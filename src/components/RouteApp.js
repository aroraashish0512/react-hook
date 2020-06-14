

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePageComponent from './HomePage';
import LoginApp from './Login';
import SignupApp from './Signup';
import StarWarsComponent from './StarWars';
import UrlParams from './UrlParams';

export default class RouteApp extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                <Route path="/" component={HomePageComponent} exact />
                    <Route path="/homepage" component={HomePageComponent} exact />
                    <Route path="/login" component={LoginApp} />
                    <Route path="/starwars" component={StarWarsComponent} />
                    <Route path="/signup" component={SignupApp} />
                    <Route path="/params/:id/:name" component={UrlParams} />
                </div>
            </BrowserRouter>
        )
    }
}
