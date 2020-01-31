import { Component } from "react";

export default class Global extends Component{

    onValueChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            form: {            
                ...this.state.form,
                [name]: value
            }
        });
    }
    
    onFocus = (event) =>{
        const target = event.target;
        const name = target.name;
        const value = name === 'credential_email' ? 'span-credential-email' : 'span-credential-password';

        this.setState({
            span: {            
                ...this.state.span,
                [name]: value
            }
        });
    }
    
    onBlur = (event) =>{
        const target = event.target;
        const name = target.name;
        const value = name === 'credential_email' ? 'span-credential-email d-none' : 'span-credential-password d-none';

        this.setState({
            span: {            
                ...this.state.span,
                [name]: value
            }
        });
    }

}