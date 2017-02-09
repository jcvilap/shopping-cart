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
        let template = (
            <div>error</div>
        );
        if (this.props.products.fetching) {
            template = (
                <div>loading</div>
            );
        } else {
            this.data = this.props.products.data;
            template = this.getTemplate(this.data.products);
        }

        return template;
    }

    renderProducts(products) {
        let count = 0;
        return products.map(product => {
            return (
                <div key={count++}>{JSON.stringify(product)}</div>
            );
        });
    }

    getTemplate(data) {
        return (
            <div style={styles.root}>
                <GridList
                    cols={4}
                    cellHeight={200}
                    padding={1}
                    style={styles.gridList}>
                    {data.map((tile) => (
                        <GridTile
                            key={tile.image}
                            title={tile.name}
                            actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                            actionPosition="left"
                            titlePosition="top"
                            titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                            cols={tile.featured ? 2 : 1}
                            rows={tile.featured ? 2 : 1}>
                            <img src={tile.image}/>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        );
    }

    static getProducts() {
        store.dispatch({
            type: 'FETCH_PRODUCTS',
            payload: axios.get(PRODUCT_URL)
        });
    }
}

function mapStateToProps({products}) {
    return {products};
}

export default connect(mapStateToProps)(ProductList);