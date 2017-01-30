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
        this.state = {open: true};
    }

    render() {
        return (
            <div className="App">
                <AppBar title="eShop" onLeftIconButtonTouchTap={this.toggle.bind(this)}/>
                <Sidenav open={this.state.open} onToggle={this.toggle.bind(this)}/>
                <div>{this.props.children}</div>
            </div>
        );
    }

    toggle() {
        this.setState({open: !this.state.open});
    }
}
