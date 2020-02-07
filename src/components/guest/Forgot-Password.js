import React from "react";
import { Link } from "react-router-dom";

import Global from "../Global"

//Global
import GlobalButton, { GlobalLink } from "../global/button"
import { GlobalTextField } from "../global/input"
import { ShowModal } from "../global/modal"
import { Header } from "../guest/ForSample"

export default class ForgotPassword extends Global{
    constructor(props){
        super(props)

        this.state = {
            span : {
                credential_key : 'span-credential-key d-none'
            },
            form : {
                credential_key : ''
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render(){
        return (
            <div className="container mt-lg-5 mt-3 mb-3 col-lg-8">
                <div className="card rounded-0 shadow">
                    <div className="card-body pt-0 pb-0">
                        <div className="row row-content">
                            <div className="col-lg-7 p-4 mt-5 content">
                                <div className="row mt-4">
                                    <div className="col-4 offset-4">
                                        <img src="/image/thinking-man.png" className="img-fluid" alt="forgot password"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4 offset-4 mt-2 text-center">
                                        <hr className="hr-style-left"/>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-10 offset-1 text-center mt-3">
                                        <label className="label-blue">
                                            Enter your email address and we'll send you a link to reset your password.
                                        </label>
                                    </div>
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-8 offset-2 mt-2">
                                            <GlobalTextField onChange={this.onValueChange} onBlur={this.onBlur} onFocus={this.onFocus} 
                                                value={this.state.form.credential_key} spanClass={this.state.span.credential_key} 
                                                name="credential_key" spanName="Phone, e-mail, username" type="text"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8 offset-2 text-center mt-3">
                                            <GlobalButton type="submit" className="forgot-password btn-primary btn-block login-form pr-sm-5 pl-sm-5" content="Reset"/>
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
        )
    }
} 