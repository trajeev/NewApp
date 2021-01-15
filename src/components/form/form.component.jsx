import React, { useState} from 'react';
import Input from '../input/input.component'
import CustomButton from '../customButton/customButton.component'
import './form.styles.scss'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addList} from '../../redux/list/list.action'

const Form = ({addList, history}) => {
     const [storeCredentials, setCredentials] = useState({
          franchiseName: '',
          storeNo: '',
          storeLocation: '',
          storeId: ''
     })
     const {franchiseName, storeNo, storeLocation, storeId} = storeCredentials
     const handleSubmit = (event) => {
          event.preventDefault()
          history.push('/list')
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
          <h1 style = {{color: 'blue'}}>Create new form</h1>
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
          <CustomButton onclick = {() => addList({
               franchiseName, 
               storeNo,
               storeLocation,
               storeId
          })} type = 'submit'>Submit</CustomButton>
          </form>
     </div> )
}



const mapDispatchToProps = disptach => ({
     addList: (list) => disptach(addList(list))
})
 
export default withRouter(connect(null, mapDispatchToProps)(Form));
 