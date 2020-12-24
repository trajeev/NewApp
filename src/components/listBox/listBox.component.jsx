import React from 'react';
import './listBox.styles.css'

const ListBox = (props) => {
    return ( 
        <div className = 'listBox'>
            {props.franchiseName}   
            {props.store}   
            {props.storeLocation}   
        </div>
     );
}
 
export default ListBox;