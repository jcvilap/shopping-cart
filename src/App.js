import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './App.css';
import logo from './logo.svg';

export class App extends Component {
    constructor(){
        super();

        // Needed for onTouchTap
        injectTapEventPlugin();
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {
        return (
            <div className="App">
                <AppBar
                    title="Have a nice Shopping!"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }

    static get childContextTypes(){
        return { muiTheme: React.PropTypes.object.isRequired };
    }
}
