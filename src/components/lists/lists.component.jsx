import React from 'react';
import {connect} from 'react-redux'
import './lists.styles.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeList, editForm } from '../../redux/list/list.action'
import {withRouter} from 'react-router-dom'
import Link from '@material-ui/core/Link'

const Lists = ({lists, removeList, editForm, history}) => {
    const useStyles = makeStyles({
        table: {
          width: 680,
        },
        header: {
            color: 'blue',
            borderBlockColor: 'blue',
            fontSize: 20
        },
        cell: {
            color: 'rgb(60, 60, 211)',
            fontSize: 17,
            borderBlockEndColor: 'blue'
        }, 
        icon: {
            marginLeft: 10,
            cursor: 'pointer',
            color: 'rgb(60, 60, 211)'
        }
    });
    const classes = useStyles();
    return (
    <div className = 'lists'>
        { (lists.length && lists[0] !== null) > 0 ?
        (<TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead >
            <TableRow>
                <TableCell className = {classes.header} align = 'center'>Name</TableCell>
                <TableCell className = {classes.header} align = 'center'>Location</TableCell>
                <TableCell className = {classes.header} align = 'center'>Number</TableCell>
                <TableCell className = {classes.header} align = 'center'>Actions</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {lists.map((list) => (
                <TableRow key={list._id}>
                <TableCell component="th" scope="list" className = {classes.cell} align = 'center'>
                    {list.franchiseName}
                </TableCell>
                <TableCell className = {classes.cell} align = 'center'>{list.storeLocation}</TableCell>
                <TableCell className = {classes.cell} align = 'center'>{list.storeNo}</TableCell>
                <TableCell className = {classes.cell} align = 'center'> 
                    <Link onClick = {() => history.push('/editForm')}>
                        <EditIcon className = {classes.icon} onClick = {() => editForm(list)} /> 
                    </Link>
                    <DeleteIcon className = {classes.icon} onClick = {() => removeList(list)}/>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>) : (<h3> No forms to show</h3>)
    }
    </div>
    )
}

const mapStateToProps = ({list: {lists}}) => ({
    lists
})

const mapDispatchToProps = dispatch => ({
    removeList: (list) => dispatch(removeList(list)),
    editForm: (list) => dispatch(editForm(list))
})
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Lists));