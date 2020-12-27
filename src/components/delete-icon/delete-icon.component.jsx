import React from 'react';
import './delete-icon.styles.css'
import {ReactComponent as CrossIcon} from '../../assets/delete-round-button.svg'

const DeleteIcon = () => (
    <div className = 'delete-icon'>
        <CrossIcon className = 'cross-icon' />
    </div>
)
 
export default DeleteIcon;