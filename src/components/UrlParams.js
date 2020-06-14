

import React, { Component } from 'react';
import RedirectLinks from './RedirectLinks';

export default class UrlParamsComponent extends Component {
    constructor() {
        super();
    }

    state = {
        testList: [1,2,3,4,5,6,7,8],
        urlParams: '',
        signin: {
            username: '',
            password: ''
        }
    };

    componentDidMount() {
        const { match: { params } } = this.props;
        console.log(params);
        this.setState({urlParams: this.state.urlParams = params});
        console.log(this.state);

        //fetch('https://swapi.co/api/people/').then(response => {
        fetch('http://spolu.in/carbon/messageapi.php?phonep=9506195107').then(response => {
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
                <div>{this.state.params}Url Params</div>
                {this.state.testList.map( elem =><li key={elem}>{elem}</li>)}
                {this.state.urlParams.id}
                {this.state.urlParams.name}
            </React.Fragment>
        )
    }
}
