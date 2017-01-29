/**
 * Created by juliocvila on 1/28/17.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Sidenav from '../Sidenav/Sidenav';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: true};

        // Needed for onTouchTap
        injectTapEventPlugin();
    }

    render() {
        return (
            <div className="App">
                <AppBar title="eShop" onLeftIconButtonTouchTap={this.toggle.bind(this)}/>
                <Sidenav open={this.state.open} onToggle={this.toggle.bind(this)}/>
            </div>
        );
    }

    toggle() {
        this.setState({open: !this.state.open});
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    }

    static get childContextTypes() {
        return {muiTheme: React.PropTypes.object.isRequired};
    }
}
