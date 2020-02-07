import React from "react"
import { Link } from "react-router-dom"

import Global from "../Global"
import "../../css/login.css"

import { axiosRequestPOST } from "../storage/axios"
import { toastrError, toastrSuccess } from "../storage/toastr"

//Global
import GlobalButton, { GlobalLink } from "../global/button"
import { GlobalTextField } from "../global/input"

export const requestResultRegistration = response => {
    switch(response.data.message){
        case 'registration-success':
            toastrSuccess('Registration success');
            break;
        default: //error
            let message = Object.values(response.data.messages);
            message.map(function(value, key){
                toastrError(value[0]);
            })
    }
}
export default class Registration extends Global{
    constructor(prop){
        super(prop)

        this.state = {
            span : {
                credential_key_registration : 'span-credential-email d-none',
                credential_password_registration : 'span-credential-password d-none'
            },
            form : {
                credential_key_registration : '',
                credential_password_registration : '',
            },
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        var request = {
            url : '/api/sample/access1',
            data : this.state.form,
            requestor  : 'Registration Request'
        }

        axiosRequestPOST(request)
    }

    render(){
        return (
            <div className="container mt-lg-5 mt-3 mb-3 col-lg-8">
                <div className="card rounded-0 shadow">
                    <div className="card-body pt-0 pb-0">
                        <div className="row row-content">
                            <div className="col-lg-7 p-4 content order-2">
                                <div className="row">
                                    <div className="col-12 mt-2 text-center">
                                        <h3 className="font font-weight-bold">Sign up to Account</h3>
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
                                        or use your email address
                                    </div>
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-8 offset-lg-2 col-10 offset-1 mt-4">
                                            <GlobalTextField onChange={this.onValueChange} onBlur={this.onBlur} onFocus={this.onFocus} 
                                                value={this.state.form.credential_key_registration} spanClass={this.state.span.credential_key_registration} 
                                                name="credential_key_registration" spanName="Email" type="text"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-8 offset-lg-2 col-10 offset-1 mt-2">
                                            <GlobalTextField onChange={this.onValueChange} onBlur={this.onBlur} onFocus={this.onFocus} 
                                                value={this.state.form.credential_password_registration} spanClass={this.state.span.credential_password_registration} 
                                                name="credential_password_registration" spanName="Password" type="password"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8 offset-2 text-center mt-3">
                                            <GlobalButton type="submit" content="Sign Up" className="btn-primary mr-2 btn-block"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-5 background-image-right">
                                <div className="row">
                                    <div className="p-5">
                                        <div className="row mt-5">
                                            <div className="col-12 text-center">
                                                <h2>Welcome Back!</h2>
                                            </div>
                                            <div className="col-4 offset-4">
                                                <hr className="hr-style-right"/>
                                            </div>
                                            <div className="col-12 text-center mt-3">
                                                <label className="label">
                                                    To keep connected with us please login with your personal info
                                                </label>
                                            </div>
                                            <div className="col-12 text-center mt-5">
                                                <GlobalLink to="/" content="Sign In" className="btn btn-primary btn-lg pr-sm-5 pl-sm-5"
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
        )
    }
}