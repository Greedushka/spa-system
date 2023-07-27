import React from 'react';
import style from './style.css'
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <nav className='footer_nav'>
                <div className="container">
                    <div className="footer-row">
                        <div className="footer_left">
                            <input type="text" className='header_searchfield' placeholder='Поиск...'/>
                        </div>
                        <div className="footer_middle">
                            <NavLink to="/" className="logo">
                                <strong>Daniel's</strong> system
                            </NavLink>
                        </div>
                        <div className="footer_right">
                            123
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Footer;