import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../containers/Home';
import Users from '../containers/Users';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/users' component={Users}/>
        </Switch>
    </BrowserRouter>
);
