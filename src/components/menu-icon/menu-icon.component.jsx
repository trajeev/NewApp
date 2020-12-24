import React from 'react';
import './menu-icon.styles.css'
import {connect} from 'react-redux'
import {toggleMenuHidden} from '../../redux/menu/menu.action'

import {ReactComponent as DashIcon} from '../../assets/icons8-menu.svg'

const MenuIcon = ({toggleMenuHidden}) => {
    return ( 
        <div className = 'menu-icon' onClick = {toggleMenuHidden}>
            <DashIcon className = 'dash-icon' />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleMenuHidden: () => dispatch(toggleMenuHidden())
})
 
export default connect(null, mapDispatchToProps)(MenuIcon);