import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import store from '../../store';
import {PRODUCT_URL} from './constants';
import {styles} from './styles';

class ProductList extends React.Component {
    render() {
        if (this.props.products.error) {
            return (<div>error</div>);
        } else if (this.props.products.fetching) {
            return (<div>loading</div>);
        } else {
            this.data = this.props.products.data;
            let count = 0;
            return (
                <div style={styles.root}>
                    <GridList
                        cols={4} padding={5}
                        style={styles.gridList}>
                        {this.data.products.map((tile) => (
                            <GridTile
                                key={count++} title={tile.name}
                                subtitle={tile.shortDescription}
                                actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                                actionPosition="left" titlePosition="bottom"
                                titleBackground={styles.tileProps.titleBackground}>
                                <img src={tile.image} role="presentation"/>
                            </GridTile>
                        ))}
                    </GridList>
                </div>
            );
        }
    }

    static getProducts() {
        store.dispatch({
            type: 'FETCH_PRODUCTS',
            payload: axios.get(PRODUCT_URL)
        });
    }
}

export default connect(({products}) => ({products}))(ProductList);