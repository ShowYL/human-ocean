import React from 'react';
import Hero from '../component/Hero';
import CorpsHumain from './CorpsHumain.jsx';


export default function Obligatoire() {
    return (
        <section className='obligatoire'>
            <Hero />
            <hr />
            <div className='panel'>
                <div className='left-panel'>
                    <h2>Les fonctions du corps Humain</h2>
                    <CorpsHumain />
                </div>
                <div className='right-panel'>
                <h2>Les fonctions de l'ocean</h2>
                </div>
            </div>
        </section>
    );
}
