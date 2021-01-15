import React from 'react';
import './listBox.styles.scss'
// import {AiFillEdit} from "react-icons/ai"
// import {MdDelete} from 'react-icons/md'
// import {IconContext} from 'react-icons'
import {connect} from 'react-redux'
import { removeList, editForm } from '../../redux/list/list.action';
// import {Link} from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';



const ListBox = ({list, removeList, editForm}) => {
    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
    });

    const {franchiseName, storeLocation, storeNo} = list
    const classes = useStyles();
    return ( 
        <TableContainer component = {Paper}>
            <Table className = {classes.table} aria-label= "simple table">
                <TableBody>
                    <TableRow key = {storeNo}>
                        <TableCell align="right">{franchiseName}</TableCell>
                        <TableCell align="right">{storeLocation}</TableCell>
                        <TableCell align="right">{storeNo}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
     );
}

const mapDispatchToProps = dispatch => ({
    removeList: (list) => dispatch(removeList(list)),
    editForm: (list) => dispatch(editForm(list))
})
 
export default connect(null, mapDispatchToProps)(ListBox)