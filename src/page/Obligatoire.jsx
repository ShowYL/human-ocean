import React from 'react';
import Hero from '../component/Hero';


export default function Obligatoire() {
    return (
        <section className='obligatoire'>
            <Hero />
            <hr />
            <div className='panel'>
                <div className='left-panel'>
                    <h2>Les Fonction du corps Humain</h2>
                </div>
                <div className='right-panel'>
                <h2>Les Fonction de l'ocean</h2>
                </div>
            </div>
        </section>
    );
}
