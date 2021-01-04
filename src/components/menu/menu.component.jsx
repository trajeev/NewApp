import React from 'react';
import './menu.styles.scss'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {toggleMenuHidden} from '../../redux/menu/menu.action'
import { AiOutlineHome, AiOutlineAppstore, AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai"
import {IconContext} from 'react-icons'



const Menu = ({toggleMenuHidden, hidden}) => (
    <IconContext.Provider value = {{size: '25px'}}>
    <div >
        {hidden ? 
        (<AiOutlineMenuUnfold className = 'dash-icon' onClick = {toggleMenuHidden}/>) :
        (<div className = 'menu'>
            <div className = 'icon'>
                <AiOutlineMenuFold className = 'close-icon' onClick = {toggleMenuHidden}/>
            </div>
                <ul>
                    <li>
                        <Link to = '/' onClick = {toggleMenuHidden}>
                            <AiOutlineHome style = {{marginRight: '10px'}}/>   Home
                        </Link>
                    </li>
                    <li>
                        <Link to = '/list' onClick = {toggleMenuHidden}>
                            <AiOutlineAppstore style = {{marginRight: '10px'}}/> Store Setup
                        </Link>
                    </li>
                </ul>
            </div>)} 
    </div>
    </IconContext.Provider>
)
 
const mapDispatchToProps = dispatch => ({
    toggleMenuHidden: () => dispatch(toggleMenuHidden())
})

const mapStateToProps = state => ({
    hidden: state.menu.hidden
  })

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

