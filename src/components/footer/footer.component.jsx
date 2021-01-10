import React from 'react';
import './footer.styles.scss'
import {Link} from 'react-router-dom'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {SiInstagram} from 'react-icons/si'
import {IconContext} from 'react-icons'

const Footer = () => (
    <IconContext.Provider value = {{size: '25px'}}>
    <div className = 'footer'>
        <footer className = 'footer-footer'>
        <ul>
            <li>
                <Link to = '/facebook'>
                    <FaFacebook style = {{color: 'blue'}} />
                </Link>
                <Link to = '/twitter'>
                    <AiFillTwitterCircle style = {{color: 'rgb(24, 146, 202)'}} />
                </Link>
                <Link to = '/instagram'>
                    <SiInstagram style = {{color: 'rgb(150, 18, 68)'}} />
                </Link>
            </li>
        </ul>
        </footer>
    </div>
    </IconContext.Provider>
)
 
export default Footer;