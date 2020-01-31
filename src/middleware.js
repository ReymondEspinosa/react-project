import React from "react";
import { Route, Redirect} from "react-router-dom";

import Auth from "./components/storage/storage"

// const auth = ;

export const Authenticated = ({component: Component, ...rest}) => {
    return (
        <Route {...rest}
            render = { props => {
                    if(Auth.isAuthenticated()){
                        return <Component {...props}/>  
                    }else{
                        return (<Redirect to={{
                                pathname: "/",
                                state: { from: props.location }
                            }}
                        />)
                    }
                }
            }
        />
    )
}

export const NotAuthenticated = ({component: Component, ...rest}) => {
    return (
        <Route {...rest}
            render = { props => {
                    if(!Auth.isAuthenticated()){
                        return <Component {...props}/>  
                    }
                        return (<Redirect to={{
                                pathname: "/dashboard",
                                state: { from: props.location }
                            }}
                        />)
                }
            }
        />
    )
}