

import React, { Component } from 'react';
import RedirectLinks from './RedirectLinks';

export default class LoginApp extends Component {
    constructor() {
        super();
    }
    
    state = {
        signin: {
            username: '',
            password: ''
        }
    };

    componentDidMount() {
        console.log(this.state);
    }

    signIn() {
        const username = this.refs.username.value;
        const password = this.refs.password.value;
        this.setState({signin: this.state.signin = {username, password}});
        console.log(this.state.signin);
    }

    render() {
        return (
            <React.Fragment>
                <RedirectLinks></RedirectLinks>
                <div className="container">
                    <div className="row">
                        <h2><strong>Bootstrap input show password value By </strong> <a href="https://goo.gl/pR8ito" target="_blank">Nababur</a>
                            <br /></h2><br />
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="username">Email address</label>
                                    <input ref="username" type="text" className="form-control" id="username" name="username" aria-describedby="usernameHelp"
                                        placeholder="Enter usernamme" />
                </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input ref="password" type="password" className="form-control" name="password" id="password" placeholder="Password" />
                </div>
                                        <div className="form-check">
                                            <button className="btn btn-info" type="button" name="showpassword" id="showpassword" value="Show Password">Show
                        password</button>
                                            <button onClick={this.signIn.bind(this)} type="button" className="btn btn-primary">Submit</button>
                                        </div>
            </form>
                                </div>
    </div>
                        </div>
            </React.Fragment>
                    )
                }
            }
