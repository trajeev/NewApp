import React, { Component } from 'react';
import Input from '../input/input.component'
import CustomButton from '../customButton/customButton.component'
import './signIn.styles.scss'

class SignIn extends Component {
    state = { 
        email: '',
        password: ''
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({email: '', password: ''})
    }

    render() { 
        return ( 
            <div className = 'sign-in'>
                <h1 style = {{color: 'rgb(83, 146, 182)'}}>SIGN IN</h1>
                <form onSubmit = {this.handleSubmit}>
                <Input 
                    name = 'email' 
                    type = 'email'
                    label = 'email' 
                    value = {this.state.email}
                    handleChange = {this.handleChange}/>
                <Input 
                    name = 'password' 
                    type = 'password'
                    label = 'password' 
                    value = {this.state.password}
                    handleChange = {this.handleChange}/>
                <CustomButton type = 'submit'>SIGN IN</CustomButton>
                </form>
            </div>
            );
    }
}
 
export default SignIn;