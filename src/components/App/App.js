import React from 'react';
import AppBar from 'material-ui/AppBar';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';

import Sidenav from '../Sidenav/Sidenav';
import {styles} from './styles';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: true, docked: true};
    }

    render() {
        return (
            <div>
                <AppBar
                    style={{position: 'fixed'}} title="eShop"
                    onLeftIconButtonTouchTap={this.toggle.bind(this)}
                    iconElementRight={
                        <FlatButton
                            href="https://github.com/callemall/material-ui"
                            target="_blank"
                            label={`${this.props.cart.size} product${this.props.cart.size !== 1 ? 's' : ''}`}
                            secondary={true}
                            icon={<ShoppingCart />}
                        />
                    }
                />
                <Sidenav open={this.state.open} docked={this.state.docked} onToggle={this.toggle.bind(this)}/>
                <div style={this.state.style}>{this.props.children}</div>
            </div>
        );
    }

    toggle() {
        this.setState({open: !this.state.open});
        this.updateSidenav(!this.state.open);
    }

    /**
     * Add event listener
     */
    componentDidMount() {
        this.updateSidenav(this.state.open);
        window.addEventListener("resize", this.updateSidenav.bind(this));
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateSidenav.bind(this));
    }

    /**
     * Make Sidenav responsive
     */
    updateSidenav(isStateOpen) {
        let belowLimits = window.innerWidth < 1024;
        let isOpen = false;

        if (belowLimits) {
            isOpen = !this.state.docked ? isStateOpen : false;
            this.setState({open: isOpen, docked: !belowLimits, style: this.getStyle(false)});
        } else {
            isOpen = !this.state.docked ? true : isStateOpen;
            this.setState({open: isOpen, docked: !belowLimits, style: this.getStyle(isOpen)});
        }
    }

    getStyle(isOpen) {
        let style = isOpen ?
            {width: 'calc(100% - 296px)', marginLeft: '256px'} :
            {width: 'calc(100% - 40px)', marginLeft: 'initial'};
        return Object.assign(style, styles.root);
    }
}

export default connect(({cart}) => ({cart}))(App);
