import React from 'react';
import './input.styles.scss'

const Input = (props) => {
    return ( 
        <div className = 'group'>
            <label className = 'form-input-label'>{props.label}</label>
            <input className = 'form-input' 
                name = {props.name} 
                type = {props.type} 
                value = {props.value}
                placeholder = {props.placeholder}
                onChange = {props.handleChange} ></input>
        </div>
     );
}
 
export default Input;