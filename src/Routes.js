import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';
import No404 from './pages/no404';


class Routes extends Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route component={No404} />
                </Switch>
            </main>
        )
    }
};

export default Routes;
