import React from 'react';
import logo from '../ressources/logo.png'

export default function Header() {

    return (
        <header>
            <nav>
                <ul className='nav_top'>
                    <li><img src={logo}/></li>
                    <li>Human Ocean</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}
