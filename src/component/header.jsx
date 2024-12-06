import React from 'react';
import logo from '../ressources/logo.png'
import { Link } from 'react-router-dom';



export default function Header() {
    return (
        <>
        <div className="bubbles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        <header>
            <nav>
                <ul className='nav_top'>
                    <li><img src={logo} alt="Logo" className="logo"/><Link to="/" className="no-underline">Human Ocean</Link></li>
                    <li><Link to="/credits" className='element-li no-underline'>Crédits</Link></li>
                    <li><Link to="/captcha" className='element-li no-underline'>Captcha</Link></li>
                </ul>
            </nav>
        </header>
        </>
    );
}
