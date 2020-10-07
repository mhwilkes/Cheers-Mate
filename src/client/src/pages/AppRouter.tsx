import React from 'react';
import Main from './Main';
import AppContainer from '../components/AppContainer';
import PublicRoute from '../components/PublicRoute';

import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Meeting from "./Meeting";

const AppRouter = () => {
    return (
        <Router>
            <AppContainer>
                <Switch>
                    <PublicRoute exact path="/" component={Main} />
                    <PublicRoute exact path="/meeting" component={Meeting} />
                    <PublicRoute exact={false} path="/" component={Main} />
                </Switch>
            </AppContainer>
        </Router>
    );
};

export default AppRouter;
