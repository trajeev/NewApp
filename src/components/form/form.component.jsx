import React, {Component} from 'react';
import Input from '../input/input.component'
import CustomButton from '../customButton/customButton.component'
import './form.styles.scss'

class Form extends Component {
     state = { 
          franchiseName: '',
          storeNo: '',
          storeLocation: '',
          storeId: '',
          storeAddress: '',
          name: '',
     }

     handleSubmit = (event) => {
          event.preventDefault()
          this.setState({name: '',franchiseName: '',
          storeNo: '',
          storeLocation: '',
          storeId: '',
          storeAddress: ''})
     }
     
     handleChange = event => {
          const {name, value} = event.target
          this.setState({[name]: value})
     }

     render() { 
          return ( 
          <div className = 'form-registration'>
               <h1>Create new form</h1>
               <form onSubmit = {this.handleSubmit}>
               <Input 
                    name = 'franchiseName' 
                    type = 'text'
                    label = 'Franchise Name' 
                    placehoder = 'franchise name'
                    value = {this.state.franchiseName}
                    handleChange = {this.handleChange} />
               <Input 
                    name = 'storeNo' 
                    type = 'text'
                    label = 'Store Number' 
                    placehoder = 'store no'
                    value = {this.state.storeNo}
                    handleChange = {this.handleChange} />
               <Input 
                    name = 'storeLocation' 
                    type = 'text'
                    label = 'Store Location' 
                    placehoder = 'store location'
                    value = {this.state.storeLocation}
                    handleChange = {this.handleChange} />
               <Input 
                    name = 'storeId' 
                    type = 'text'
                    label = 'Store ID' 
                    placehoder = 'store ID'
                    value = {this.state.storeId}
                    handleChange = {this.handleChange} />
               <Input 
                    name = 'storeAddress' 
                    type = 'text'
                    label = 'Store Address' 
                    placehoder = 'store address'
                    value = {this.state.storeAddress}
                    handleChange = {this.handleChange} />
               <Input 
                    name = 'name' 
                    type = 'text'
                    label = 'name' 
                    placehoder = 'name'
                    value = {this.state.name}
                    handleChange = {this.handleChange} />
                  <CustomButton type = 'submit'>Submit</CustomButton>
               </form>
          </div> );
     }
}
 
export default Form;
 