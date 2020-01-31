import React, { Component } from "react";

import '../css/404.css'
import { Link } from "react-router-dom";
export default class NotFound extends Component{
    render(){
        return(
            <div className="container mt-7 col-lg-8 px-4">
                <div className="row">
                    <div className="col-lg-6 p-lg-5 mt-3">
                        <div class="row">
                            <div className="col-12 text-center">
                                <h1 className="number404 textColor">404</h1>
                            </div>
                            <div className="col-12 text-center">
                                <h3 className="textColor">Sorry, Page Not Found</h3>
                            </div>
                            <div className="col-12 text-center">
                                <h6 className="textColor">The page you requested was not be found</h6>
                            </div>
                            <div className="col-12 text-center mt-3">
                                <Link to="/" className="btn btn-outline-primary rounded mr-2 px-5"> GO BACK HOME </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 background-image-right mt-5"></div>
                </div>
            </div>
        )
    }
} 