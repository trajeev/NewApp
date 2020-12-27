import React from 'react';
import './menu.styles.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {toggleMenuHidden} from '../../redux/menu/menu.action'
import {ReactComponent as CloseIcon} from '../../assets/closeIcon.svg'
import {ReactComponent as DashIcon} from '../../assets/icons8-menu.svg'



const Menu = ({toggleMenuHidden, hidden}) => (
    <div >
        {hidden ? 
        (<DashIcon className = 'dash-icon' onClick = {toggleMenuHidden}/>) :
        (<div className = 'menu'>
            <div className = 'icon'>
                <CloseIcon className = 'close-icon' onClick = {toggleMenuHidden}/>
            </div>
                <ul>
                    <li>
                        <Link to = '/' onClick = {toggleMenuHidden}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to = '/list' onClick = {toggleMenuHidden}>
                            STORE SETUP
                        </Link>
                    </li>
                </ul>
            </div>)} 
    </div>
)
 
const mapDispatchToProps = dispatch => ({
    toggleMenuHidden: () => dispatch(toggleMenuHidden())
})

const mapStateToProps = state => ({
    hidden: state.menu.hidden
  })

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

