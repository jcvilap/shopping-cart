/**
 * Created by juliocvila on 1/28/17.
 */
import React from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/chevron-left';
import './Sidenav.css';

class Sidenav extends React.Component {
    render() {
        return (
            <Drawer
                open={this.props.open} docked={this.props.docked}
                onRequestChange={(open) => this.setState({open})}>
                <AppBar
                    className={'SidenavBar'} title="eShop"
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    onLeftIconButtonTouchTap={this.props.onToggle}
                />
                <MenuItem><Link to={'/products'}>Product List</Link></MenuItem>
                <MenuItem><Link to={'/products/hello'}>Product Detail</Link></MenuItem>
                <MenuItem><Link to={'/checkout'}>Check Out</Link></MenuItem>
            </Drawer>
        );
    }
}

export default Sidenav;