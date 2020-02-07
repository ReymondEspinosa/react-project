import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class GlobalButton extends Component{
    constructor(props){
        super(props)

        this.state = {
            type : this.props.type ? this.props.type : "button",
            className : this.props.className ? "btn "+this.props.className : "btn btn-default",
            style : {
                borderRadius : this.props.rounded ? this.props.rounded : "",
                color : this.props.color ? this.props.color : "",
                backgroundColor : this.props.backgroundColor ? this.props.backgroundColor : "",
            },
            content : this.props.content ? this.props.content : "Button",
            icon : this.props.icon ? this.props.icon : "",
        }
    }

    render() {
        return (
                <button type={this.state.type} className={this.state.className} style={this.state.style}>
                    <i className={this.state.icon}></i> {this.state.content}
                </button>
        )
    }
}

export class GlobalLink extends Component{
    constructor(props){
        super(props)

        this.state = {
            className : this.props.className ? "btn "+this.props.className : "btn btn-default",
            style : {
                borderRadius : this.props.rounded ? this.props.rounded : "",
                color : this.props.color ? this.props.color : "",
                backgroundColor : this.props.backgroundColor ? this.props.backgroundColor : "",
                borderColor : this.props.borderColor ? this.props.borderColor : "",
            },
            hover : {
                backgroundColor : this.props.hoverBackgroundColor ? this.props.hoverBackgroundColor : "",
                color : this.props.hoverColor ? this.props.hoverColor : "",
            },
            content : this.props.content ? this.props.content : "Button",
            icon : this.props.icon ? this.props.icon : "",
            to : this.props.to ? this.props.to : "",
        }
    }
    
    sample(hexs){
        let hex = hexs.replace('#','');
        let r = parseInt(hex.substring(0,2), 16);
        let g = parseInt(hex.substring(2,4), 16);
        let b = parseInt(hex.substring(4,6), 16);
        return 'rgba('+r+','+g+','+b+')';
    }

    mouseOver(e){
        e.target.style.backgroundColor = this.state.hover.backgroundColor
        e.target.style.color = this.sample(this.state.hover.color);
    }

    mouseLeave(e){
        e.target.style.backgroundColor = this.state.style.backgroundColor
        e.target.style.color = this.sample(this.state.style.color);
    }

    render(){
        return (
            <Link to={this.state.to} className={this.state.className} style={this.state.style} 
                onMouseOver={e => this.mouseOver(e) } onMouseLeave={e => this.mouseLeave(e) }>
                {this.state.content}
            </Link>
        )
    }
}