
import React, { Component } from 'react';
import RedirectLinks from './RedirectLinks';

export default class SignupApp extends Component {
    constructor() {
        super();
    }

    state = {
        signUp: {
        }
    };

    textFieldChange = (e) => {
        let { signUp } = this.state;
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        signUp[fieldName] = fieldValue;
        this.setState({ signUp: signUp });
    }

    signUp() {
        // console.log(this.state);
        fetch('localhost/test', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.signUp)
        }).then(response => {

        }).catch( error => {
            console.log(error);
        })
    }

    fieldChange = (e, val) => {
        window.console.log(e, val, '31');
    }

    render() {
        return (
            <React.Fragment>
                <RedirectLinks></RedirectLinks>
                <div className="container register">
                    <div className="row">
                    <input id="test" name="test" type="text" className="form-control" placeholder="Test" onChange={(e) => this.fieldChange(e, 'test')} />
                        <div className="col-md-3 register-left">
                            {/* <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" /> */}
                            <h3>Welcome</h3>
                            <input type="submit" name="" value="Login" /><br />
                        </div>
                        <div className="col-md-9 register-right">
                            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Employee</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <h3 className="register-heading">Registration</h3>
                                    <div className="row register-form">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input id="firstname" name="firstname" type="text" className="form-control" placeholder="First Name *" onChange={this.textFieldChange} />
                                            </div>
                                            <div className="form-group">
                                                <input id="lastname" name="lastname" type="text" className="form-control" placeholder="Last Name *" onChange={this.textFieldChange} />
                                            </div>
                                            <div className="form-group">
                                                <input id="password" name="password" type="password" className="form-control" placeholder="Password *" onChange={this.textFieldChange} />
                                            </div>
                                            <div className="form-group">
                                                <input id="confirmpassword" name="confirmpassword" type="password" className="form-control" placeholder="Confirm Password *" onChange={this.textFieldChange} />
                                            </div>
                                            <div className="form-group">
                                                <div className="maxl">
                                                    <label className="radio inline">
                                                        <input id="gender" type="radio" name="gender" value="m" checked onChange={this.textFieldChange} />
                                                        <span> Male </span>
                                                    </label>
                                                    <label className="radio inline">
                                                        <input id="gender" type="radio" name="gender" value="f" onChange={this.textFieldChange} />
                                                        <span>Female </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input id="email" name="email" type="email" className="form-control" placeholder="Your Email *" onChange={this.textFieldChange} />
                                            </div>
                                            <div className="form-group">
                                                <input id="phone" type="text" minLength="10" maxLength="10" name="phone" className="form-control" placeholder="Your Phone *" onChange={this.textFieldChange} />
                                            </div>
                                            <input type="button" onClick={() => this.signUp()} className="btnRegister" value="Register" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
