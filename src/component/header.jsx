import React from 'react';
import logo from '../ressources/logo.png'

export default function Header() {

    return (
        <header>
            <nav>
                <ul className='nav_top'>
                    <li><img src={logo}/>Human Ocean</li>
                    <li>Crédits</li>
                    <li>Captcha</li>
                </ul>
            </nav>
        </header>
    );
}
