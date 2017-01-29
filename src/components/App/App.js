/**
 * Created by juliocvila on 1/28/17.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import theme from '../../theme/theme';
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
        console.log(theme);
        return {muiTheme: getMuiTheme(theme)};
    }

    static get childContextTypes() {
        return {muiTheme: React.PropTypes.object.isRequired};
    }
}
