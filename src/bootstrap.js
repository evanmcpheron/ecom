import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Switch, Route } from 'react-router-dom';
import reducers from './reducers';

import Layout from './components/layout';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import './style/import.scss';

import history from './history';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';

function main() {
    ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Router history={history}>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={SignIn}/>
                    </Switch>
                </Layout>
            </Router>
        </Provider>,
        document.querySelector('.app-wrapper')
    );
}

document.addEventListener('DOMContentLoaded', main);
