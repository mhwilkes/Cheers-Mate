import React from 'react';
import Main from './Main';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import Profile from './Profile';
import AppContainer from '../components/AppContainer';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Meeting from "./Meeting";
import Create from "./Create";

const AppRouter = () => {
    return (
        <Router>
            <AppContainer>
                <Switch>
                    <PublicRoute exact path="/" component={Main} />
                    {/*<PublicRoute exact path="/signup" component={Signup} />*/}
                    {/*<PublicRoute exact path="/login" component={Login} />*/}
                    {/*<PublicRoute exact path="/about" component={About} />*/}
                    {/*<PublicRoute exact path="/get-started" component={GetStarted} />*/}
                    <PublicRoute exact path="/create" component={Meeting} />
                    <PublicRoute exact path="/meeting/:id" component={Create} />
                    {/*<PrivateRoute exact path="/dashboard" component={Dashboard} />*/}
                    {/*<PrivateRoute exact path="/profile" component={Profile} />*/}
                    <PublicRoute exact={false} path="/" component={Main} />
                </Switch>
            </AppContainer>
        </Router>
    );
};

export default AppRouter;
