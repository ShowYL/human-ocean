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
                    <Link to="/" className="no-underline"><li><img src={logo} alt="Logo" className="logo"/>Human Ocean</li></Link>
                    <Link to="/credits" className='element-li no-underline'><li>Crédits</li></Link>
                    <li className='element-li'><a className='no-underline' target='blank' href="https://cookie-cauchemar-capgemini.vercel.app/">Cookie Cauchemar</a></li>
                    <Link to="/the-form" className='element-li no-underline'><li>The Formulaire</li></Link>
                </ul>
            </nav>
        </header>
        </>
    );
}
