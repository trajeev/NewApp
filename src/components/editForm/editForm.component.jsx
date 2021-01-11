import React, {useState} from 'react';
import './editForm.styles.scss'
import {connect} from 'react-redux'
import Input from '../input/input.component'
import CustomButton from '../customButton/customButton.component'
import {editList} from '../../redux/list/list.action'

const EditForm = ({list, editList}) => {
    const [storeCredentials, setCredentials] = useState({
        franchiseName: list.franchiseName,
        storeNo: list.storeNo ,
        storeLocation: list.storeLocation ,
        storeId: list.storeId
   })
    const {franchiseName, storeNo, storeLocation, storeId} = storeCredentials

    const handleSubmit = (event) => {
        event.preventDefault()
          setCredentials({franchiseName: '',
          storeNo: '',
          storeLocation: '',
          storeId: ''})
    }

    const handleChange = event => {
        const {name, value} = event.target
        setCredentials({...storeCredentials, [name]: value})
   }

    return (
    <div className = 'form-registration'>
          <h1 style = {{color: 'blue'}}>Edit your form</h1>
          <form onSubmit = {handleSubmit}>
          <Input 
               name = 'franchiseName' 
               type = 'text'
               label = 'Franchise Name' 
               placehoder = 'franchiseName'
               value = {franchiseName}
               handleChange = {handleChange} />
          <Input 
               name = 'storeNo' 
               type = 'text'
               label = 'Store Number' 
               placehoder = 'store no'
               value = {storeNo}
               handleChange = {handleChange} />
          <Input 
               name = 'storeLocation' 
               type = 'text'
               label = 'Store Location' 
               placehoder = 'store location'
               value = {storeLocation}
               handleChange = {handleChange} />
          <Input 
               name = 'storeId' 
               type = 'text'
               label = 'Store ID' 
               placehoder = 'store ID'
               value = {storeId}
               handleChange = {handleChange} />
          <CustomButton onclick = {() => editList({
               franchiseName, 
               storeNo, 
               storeLocation, 
               storeId
          })} type = 'submit'>Submit</CustomButton>
          </form>
    </div>
    )
}

const mapStateToProps = state => ({
    list: state.list.list
})

const mapDispatchToProps = dispatch => ({
     editList: (list) => dispatch(editList(list))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);