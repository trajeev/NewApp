import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import './list.styles.scss'
import Lists from '../../components/lists/lists.component'
import Chart from '../../components/chart/chart'
import {fetchAll} from '../../redux/list/list.action'

const List = ({history}) =>  {
    const lists = useSelector(state => state.list.lists)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAll())
    }, [dispatch])

    return ( 
        <div className = 'list'> 
            <h1 style = {{color: 'blue'}}>List</h1>
            <AiOutlinePlusCircle className = 'add-icon' onClick = {() => {history.push('/newForm')}}/>
            <Chart lists = {lists} />
            <Lists lists = {lists}/>
        </div>
        );
}
 
export default List;
