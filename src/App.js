import './App.css';
import Menu from './components/menu/menu.component'
import React from 'react';
import HomePage from './pages/homePage/homePage.jsx'
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import List from './pages/List/list.jsx'
import NewForm from './pages/form/form'
import Header from './components/header/header.component'
import SignIn from './components/sign-in/signIn.component'
import Footer from './components/footer/footer.component'
import EditForm from './components/editForm/editForm.component'
import DataFlow from './components/dataFlow/dataflow.component'

const App = ({list}) => {
    return ( 
      <div className="App">
        <Header />
           <Menu /> 
        <div className = 'App-switch'>
          <Switch >
            <Route exact path = '/' component = {HomePage} />
            <Route path = '/list'  component = {List} />
            <Route path = '/newForm' component = {NewForm} />
            <Route path = '/signin' component = {SignIn} />
            <Route path = '/dataFlow' component = {DataFlow} />
            <Route path = '/editForm' render = {() =>  (list ? <EditForm /> : <Redirect to = '/list' />)} />
          </Switch>
        </div>
        <Footer />
      </div> );
}
 
const mapStateToProps = state => ({
  list: state.list.list
})



export default connect(mapStateToProps)(App);


