import React from "react"
import { Link } from "react-router-dom"

import Global from "../Global"
import "../../css/login.css"

export default class Registration extends Global{
    constructor(prop){
        super(prop)

        this.state = {
            span : {
                credential_email : 'span-credential-email d-none',
                credential_password : 'span-credential-password d-none'
            },
            form : {
                credential_email : '',
                credential_password : '',
            },
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
                        <div className="row">
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
                                        <button type="button" className="btn btn-outline-primary rounded mr-2"><i className="fab fa-facebook-f"></i> Sign up with facebook</button>
                                        <button type="button" className="btn btn-outline-danger rounded mr-2"><i className="fab fa-google"></i> Sign up with Gmail</button>
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
                                            <div className="form-group row mb-1">
                                                <label className="has-float-label col-12 p-0">
                                                    <input className="form-control rounded-0" autoComplete="off" type="text" id="credential_email" name="credential_email" value={this.state.form.email}
                                                    onFocus={e => this.onFocus(e, "email")} onChange={this.onValueChange} onBlur={e => this.onBlur(e, "email")}/>
                                                    <span className={this.state.span.credential_email}>Email</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-8 offset-lg-2 col-10 offset-1 mt-2">
                                            <div className="form-group row mb-1">
                                                <label className="has-float-label col-12 p-0">
                                                    <input className="form-control rounded-0" type="password" id="credential_password" name="credential_password" value={this.state.form.password}
                                                    onFocus={e => this.onFocus(e, "password")} onChange={this.onValueChange} onBlur={e => this.onBlur(e, "password")}/>
                                                    <span className={this.state.span.credential_password}>Password</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8 offset-2 text-center mt-3">
                                            <button type="submit" className="btn btn-primary btn-block login-form pr-sm-5 pl-sm-5"><b> Sign Up </b></button>
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
                                                <Link to="/" className="btn btn-primary btn-primary-edit btn-lg pr-sm-5 pl-sm-5 btn-sign-up"><b> Sign In </b></Link>
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