

import React, { Component } from 'react';
import { Redirect, BrowserRouter as Router, Route, Link } from 'react-router-dom'


export default class HomePageComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Link className="abc" to="/">Home</Link>
                <Link className="abc" to="/login">Login</Link>
                <Link className="abc" to="/signup">Register</Link>
                <Link className="abc" to="/starwars">Starwars</Link>
                <Link className="abc" to="/params/10/test">Url Parameters</Link>
            </div>
        )
    }
}
