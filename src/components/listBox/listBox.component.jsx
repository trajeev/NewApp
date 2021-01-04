import React from 'react';
import './listBox.styles.scss'
import {AiFillEdit} from "react-icons/ai"
import {MdDelete} from 'react-icons/md'
import {IconContext} from 'react-icons'

const ListBox = (props) => {
    return ( 
        <IconContext.Provider value = {{size: '25px', color: 'rgb(83, 146, 182)'}}>
        <div className = 'listBox'>
            <div className = 'listBox-sentence'>
                <span >{props.franchiseName}  </span>  
                <span >{props.store}</span>  
                <span >{props.storeLocation}  </span>   
            </div>
            <div className = 'listBox-icons'>
                <AiFillEdit className = 'listBox-icon' />
                <MdDelete className = 'listBox-icon' />
            </div>
        </div>
        </IconContext.Provider>
     );
}
 
export default ListBox;