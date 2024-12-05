import React from 'react';
import logo from '../ressources/logo.png';

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
                    <ul className="nav_top">
                        <li>
                            <img src={logo} alt="Logo" className="logo" />
                            Human Ocean
                        </li>
                        <li>Crédits</li>
                        <li>Captcha</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
