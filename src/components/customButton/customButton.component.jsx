import React from 'react';
import './customButton.styles.scss'

const CustomButton = (props) => {
    return ( 
        <div >
            <button onClick = {props.onclick} className = 'button'>{props.children}</button>
        </div>
     );
}
 
export default CustomButton;