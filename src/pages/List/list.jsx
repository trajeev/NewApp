import React from 'react';
import {AiOutlinePlusCircle} from 'react-icons/ai'
import './list.styles.scss'
import Lists from '../../components/lists/lists.component'

const List = ({history}) =>  {
    return ( 
        <div className = 'list'> 
            <h1 style = {{color: 'blue'}}>List</h1>
            <AiOutlinePlusCircle className = 'add-icon' onClick = {() => {history.push('/newForm')}}/>
            <div className = 'list-coloumns'>
                <div className = 'list-coloumn'>
                    <span> Name</span>
                </div>
                <div className = 'list-coloumn'>
                    <span>Number</span>
                </div>
                <div className = 'list-coloumn'>
                    <span> Location</span>
                </div>
                <div className = 'list-coloumn'>
                    <span>actions</span>
                </div>
            </div>
            <Lists />
        </div>
        );
}
 
export default List;
