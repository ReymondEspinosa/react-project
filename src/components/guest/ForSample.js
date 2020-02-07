import React, { Component } from "react"

export const Header = props => {
    let id = props.id;
    
    return (
        <div>
           {id} This is header component.
        </div>
    )
}