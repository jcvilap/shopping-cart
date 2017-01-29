/**
 * Created by juliocvila on 1/28/17.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/chevron-left';
import './Sidenav.css';

export default class Sidenav extends React.Component {
    render() {
        return (
            <Drawer open={this.props.open} onRequestChange={(open) => this.setState({open})}>
                <AppBar
                    className={'SidenavBar'}
                    title="eShop"
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    onLeftIconButtonTouchTap={this.props.onToggle}
                />
                <MenuItem className="pink">Menu Item</MenuItem>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item</MenuItem>
            </Drawer>
        );
    }
}