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
                    type = 'name'
                    label = 'Franchise Name' 
                    value = {this.state.franchiseName}
                    handleChange = {this.handleChange} />
               <Input 
                    name = 'store no' 
                    type = 'name'
                    label = 'Store Number' 
                    value = {this.state.storeNo}
                    handleChange = {this.handleChange} />
               <Input 
                    name = 'store Location' 
                    type = 'name'
                    label = 'Store Location' 
                    value = {this.state.storeLocation}
                    handleChange = {this.handleChange} />
               <Input 
                    name = 'store id' 
                    type = 'name'
                    label = 'Store ID' 
                    value = {this.state.storeId}
                    handleChange = {this.handleChange} />
               <Input 
                    name = 'store address' 
                    type = 'name'
                    label = 'Store Address' 
                    value = {this.state.storeAddress}
                    handleChange = {this.handleChange} />
               <Input 
                    name = 'name' 
                    type = 'name'
                    label = 'name' 
                    value = {this.state.name}
                    handleChange = {this.handleChange} />
                  <CustomButton type = 'submit'>Submit</CustomButton>
               </form>
          </div> );
     }
}
 
export default Form;
 