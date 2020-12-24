import React from 'react';
import './input.styles.scss'

const Input = (props) => {
    return ( 
        <div className = 'group'>
            <label className = {`${props.value.length ? 'shrink': ''} form-input-label`}>{props.label}</label>
            <input className = 'form-input' 
                name = {props.name} 
                type = {props.type} 
                value = {props.value}
                onChange = {props.handleChange} ></input>
        </div>
     );
}
 
export default Input;