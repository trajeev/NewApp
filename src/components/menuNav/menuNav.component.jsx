import React from 'react';
import SubMenu from '../submenu/submenu.component'
import {connect} from 'react-redux'
import {toggleSecondMenu} from '../../redux/menu/menu.action'
import './menuNav.styles.scss'
import {AiOutlineRight} from 'react-icons/ai'

const MenuNav = ({secondMenu, toggleSecondMenu}) => (
    <div onMouseEnter = {toggleSecondMenu} onMouseLeave = {toggleSecondMenu} className = 'menunav'>
        <span><strong>Addn. Menu</strong></span>
        <AiOutlineRight style = {{marginLeft: '50px'}}/>
        {secondMenu ? <SubMenu/> : null}
    </div>
)

const mapStateToProps = state => ({
    secondMenu: state.menu.secondMenu
  })
  
  const mapDispatchToProps = dispatch => ({
    toggleSecondMenu: () => dispatch(toggleSecondMenu())
  })
 
export default connect(mapStateToProps,mapDispatchToProps)(MenuNav);