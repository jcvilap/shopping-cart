/**
 * Created by juliocvila on 1/28/17.
 */
import React from 'react';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import theme from '../../theme/theme';
import App from '../App/App';
import CheckOut from '../CheckOut/CheckOut';
import ProductDetail from '../ProductDetails/ProductDetails';
import ProductList from '../ProductList/ProductList';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class Root extends React.Component {
    constructor(props) {
        super(props);

        // Needed for onTouchTap
        injectTapEventPlugin();
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={App}>
                    <IndexRedirect to={'products'} />
                    <Route path={'products'} component={ProductList} />
                    <Route path={'products/:id'} component={ProductDetail} />
                    <Route path={'checkout'} component={CheckOut} />
                </Route>
            </Router>
        );
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(theme)};
    }

    static get childContextTypes() {
        return {muiTheme: React.PropTypes.object.isRequired};
    }
}
