// import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/menu.component'
import React from 'react';
import HomePage from './pages/homePage/homePage.jsx'
import MenuIcon from './components/menu-icon/menu-icon.component'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import List from './pages/List/list.jsx'
import NewForm from './pages/form/form'

const App = ({hidden}) => {
    return ( 
      <div className="App">
        <div>
          { hidden ? <Menu /> : <MenuIcon/>}
        </div>
        <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route path = '/list'  component = {List} />
          <Route path = '/newForm' component = {NewForm} />
        </Switch>
      </div> );
}
 
const mapStateToProps = state => ({
  hidden: state.menu.hidden
})

export default connect(mapStateToProps)(App);


