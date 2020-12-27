import React from 'react';
import {withRouter} from 'react-router-dom'
import {ReactComponent as AddIcon} from '../../assets/addIcon.svg'
import './list.styles.css'
import Lists from '../../components/lists/lists.component'

const List = ({history}) =>  {
    return ( 
        <div className = 'list'> 
            <h1>List</h1>
            <AddIcon className = 'add-icon' onClick = {() => {history.push('/newForm')}}/>
            <Lists />
        </div>
        );
}
 
export default withRouter(List);
