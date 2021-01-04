import React from 'react';
import {Link} from 'react-router-dom'
import './header.styles.scss'
import { VscAccount } from "react-icons/vsc";
import { BsIntersect } from "react-icons/bs";

const Header = () => (
    <div className = 'header'>
        <header className = 'header-header'>
            <BsIntersect size = '25px' style = {{marginTop: '10px', marginLeft: '50px', color: 'black'}}/>
            <ul>
                <li>
                    <Link to = '/about' className = 'header-link'>
                        ABOUT US
                    </Link>
                    <Link to = '/signin' className = 'header-link'>
                        <VscAccount style = {{marginRight: '10px'}}/>SIGN IN
                    </Link>
                </li>
            </ul>
        </header>
    </div>
)
 
export default Header;