import React from 'react';
import './listBox.styles.scss'
import {AiFillEdit} from "react-icons/ai"
import {MdDelete} from 'react-icons/md'
import {IconContext} from 'react-icons'
import {connect} from 'react-redux'
import { removeList } from '../../redux/list/list.action';

const ListBox = ({list, removeList}) => {
    const {FranchiseName, storeLocation, store} = list
    return ( 
        <IconContext.Provider value = {{size: '25px', color: 'blue'}}>
        <div className = 'listBox'>
            <div className = 'listBox-sentence'>
                <span >{FranchiseName}  </span>  
                <span >{store} </span>  
                <span >{storeLocation}  </span>   
            </div>
            <div className = 'listBox-icons'>
                <AiFillEdit className = 'listBox-icon' />
                <MdDelete className = 'listBox-icon' onClick = {() => removeList(list)}/>
            </div>
        </div>
        </IconContext.Provider>
     );
}

const mapDispatchToProps = dispatch => ({
    removeList: (list) => dispatch(removeList(list))
})
 
export default connect(null, mapDispatchToProps)(ListBox);