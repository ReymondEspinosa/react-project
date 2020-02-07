import React from "react"
import { Link } from "react-router-dom"

import Global from "../Global"
import "../../css/login.css"

import { axiosRequestPOST } from "../storage/axios"
import { toastrError, toastrSuccess } from "../storage/toastr"

//Global
import GlobalButton, { GlobalLink } from "../global/button"
import { GlobalTextField, GlobalCheckbox } from "../global/input"
import Auth from '../storage/storage';

export const requestResultLogin = response => {
    switch(response.data.message){
        case 'login-success' : 
            toastrSuccess('Login Success');
            // Auth.login(() => {
            //     localStorage.setItem('_', "res.data")
            // }, 'sample')
        break;

        case 'not-found' : 
            toastrError('Credentials not found');
        break;

        case 'wrong-password' : 

        break;
        
        case 'error' : 
            let message = Object.values(response.data.messages);
            message.map(function(value, key){
                toastrError(value);
            })
        break;
        
        default: //error
    }
}
export default class Login extends Global{
    constructor(prop){
        super(prop)

        this.state = {
            span : {
                credential_key_login : 'span-credential-email d-none',
                credential_password_login : 'span-credential-password d-none'
            },
            form : {
                credential_key_login : '',
                credential_password_login : '',
                rememberMe : false,
            },
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        
        var request = {
            url : '/sample',
            data : this.state.form,
            requestor  : 'Login Request'
        }

        axiosRequestPOST(request)
    }

    render(){
        return(
            <div className="container mt-lg-5 mt-3 mb-3 col-lg-8">
                <div className="card rounded-0 shadow">
                    <div className="card-body pt-0 pb-0">
                        <div className="row row-content">
                            <div className="col-lg-7 p-4 content">
                                <div className="row">
                                    <div className="col-12 mt-2 text-center">
                                        <h3 className="font font-weight-bold">Sign in to Account</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4 offset-4 mt-2 text-center">
                                        <hr className="hr-style-left"/>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12 mt-2 text-center">
                                        <GlobalButton rounded="1.25rem" content="Sign in with facebook"
                                            icon="fab fa-facebook-f" className="btn-outline-primary mr-2"/>
                                        <GlobalButton rounded="1.25rem" content="Sign in with Gmail"
                                            icon="fab fa-google" className="btn-outline-danger mr-2"/>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-12 text-center mt-4">
                                        or use your existing account
                                    </div>    
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-8 offset-lg-2 col-10 offset-1 mt-4">
                                            <GlobalTextField onChange={this.onValueChange} onBlur={this.onBlur} onFocus={this.onFocus} 
                                                value={this.state.form.credential_key_login} spanClass={this.state.span.credential_key_login} 
                                                name="credential_key_login" spanName="Phone, email or username" type="text"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-8 offset-lg-2 col-10 offset-1 mt-2">
                                            <GlobalTextField onChange={this.onValueChange} onBlur={this.onBlur} onFocus={this.onFocus} 
                                                value={this.state.form.credential_password_login} spanClass={this.state.span.credential_password_login} 
                                                name="credential_password_login" spanName="Password" type="password"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-inline col-4 offset-1 offset-lg-2 p-0">
                                            <GlobalCheckbox checked={this.state.form.rememberMe} onChange={this.onValueChange} name="rememberMe"/>
                                        </div>
                                        <div className="form-inline co-4  offset-2 offset-lg-1 p-0">
                                            <div className="form-check mb-2 mr-sm-2">
                                                <Link to="/forgot-password">Forgot Password?</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8 offset-2 text-center mt-3">
                                            <GlobalButton type="submit" content="Sign In" className="btn-primary mr-2 btn-block"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-5 background-image-right">
                                <div className="row">
                                    <div className="p-5">
                                        <div className="row mt-5">
                                            <div className="col-12 text-center">
                                                <h2>Hello, Friend</h2>
                                            </div>
                                            <div className="col-4 offset-4">
                                                <hr className="hr-style-right"/>
                                            </div>
                                            <div className="col-12 text-center mt-3">
                                                <label className="label">
                                                    Fill up personal information and start journey with us.
                                                </label>
                                            </div>
                                            <div className="col-12 text-center mt-5">
                                                <GlobalLink to="/register" content="Sign Up" className="btn btn-primary btn-lg pr-sm-5 pl-sm-5"
                                                    backgroundColor="transparent" color="#efe7e7" borderColor="#efe7e7" 
                                                    hoverBackgroundColor="#efe7e7" hoverColor="#01a8dc"/> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}