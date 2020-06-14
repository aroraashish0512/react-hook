

import React, { Component } from 'react';
import RedirectLinks from './RedirectLinks';

export default class StarWarsComponent extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/').then(response => {
            // console.log(response.json());
            // window.console.log(response);
            const responseObj = response.json();
            console.log(responseObj.PromiseValue);
            if (responseObj.results) {
                console.log(responseObj.results);
            }
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return(
            <React.Fragment>
                <RedirectLinks></RedirectLinks>
                <h1>Star Wars Api Integration</h1>
            </React.Fragment>
        )
    }
}
