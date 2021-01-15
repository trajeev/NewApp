import React from 'react';
import {AiOutlinePlusCircle} from 'react-icons/ai'
import './list.styles.scss'
import Lists from '../../components/lists/lists.component'

const List = ({history}) =>  {
    return ( 
        <div className = 'list'> 
            <h1 style = {{color: 'blue'}}>List</h1>
            <AiOutlinePlusCircle className = 'add-icon' onClick = {() => {history.push('/newForm')}}/>
            <Lists />
        </div>
        );
}
 
export default List;
