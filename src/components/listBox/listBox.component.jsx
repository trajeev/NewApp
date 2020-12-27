import React from 'react';
import './listBox.styles.css'
import DeleteIcon from '../delete-icon/delete-icon.component'
import Edit from '../edit-icon/edit-icon.component'

const ListBox = (props) => {
    return ( 
        <div className = 'listBox'>
            <div className = 'listBox-sentence'>
                <span >{props.franchiseName}  </span>  
                <span >{props.store}</span>  
                <span >{props.storeLocation}  </span>   
            </div>
            <div className = 'listBox-icons'>
                <Edit/>
                <DeleteIcon />
            </div>
        </div>
     );
}
 
export default ListBox;