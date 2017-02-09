/**
 * Created by juliocvila on 1/28/17.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';

import Sidenav from '../Sidenav/Sidenav';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: true, docked: true};
    }

    render() {
        return (
            <div className="App">
                <AppBar title="eShop" onLeftIconButtonTouchTap={this.toggle.bind(this)}/>
                <Sidenav open={this.state.open} docked={this.state.docked} onToggle={this.toggle.bind(this)}/>
                <div>{this.props.children}</div>
            </div>
        );
    }

    toggle() {
        this.setState({open: !this.state.open});
    }

    /**
     * Add event listener
     */
    componentDidMount() {
        this.updateSidenav();
        window.addEventListener("resize", this.updateSidenav.bind(this));
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateSidenav.bind(this));
    }

    updateSidenav() {
        let belowLimits = window.innerWidth < 1024;
        if (belowLimits){
            this.setState({
                open: !this.state.docked ? this.state.open : false,
                docked: !belowLimits
            });
        } else {
            this.setState({
                open: !this.state.docked ? true : this.state.open,
                docked: !belowLimits
            });
        }
    }

}
