import React, { useState } from 'react';
import Hero from '../component/Hero';
import CorpsHumain from './CorpsHumain.jsx';
import Ocean from './Ocean.jsx';

export default function Obligatoire() {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <section className='obligatoire'>
            <Hero />
            <hr />
            <div className='panel'>
                <div className='left-panel'>
                    <h2>Les fonctions du corps Humain</h2>
                    <CorpsHumain currentImage={currentImage} setCurrentImage={setCurrentImage} />
                </div>
                <div className='right-panel'>
                    <h2>Les fonctions de l'ocean</h2>
                    <Ocean currentImage={currentImage} />
                </div>
            </div>
            <hr />
        </section>
    );
}