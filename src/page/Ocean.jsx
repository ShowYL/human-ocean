import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Corail from '../ressources/corail.jpg';
import Gazeux from '../ressources/gazeux.png';
import CourantOceanique from '../ressources/courant_oceanique.png';
import MaraisSalant from '../ressources/marais_salant.jpg'

export default function Ocean({ currentImage }) {
    const text = [
        { front: <img src={Corail} alt="Corail" className="rigth-panel" />, back: "Le cerveau est le centre de contrôle du corps, comme les récifs coralliens qui jouent un rôle central dans l'écosystème marin. Ils hébergent une diversité de vie marine, tout comme le cerveau intègre et coordonne les fonctions corporelles." },
        { front: <img src={MaraisSalant} alt="Marais salant" className="rigth-panel" />, back: "Les reins filtrent le sang pour éliminer les toxines et maintenir l'équilibre des sels, comme les marais salants qui filtrent l'eau douce et salée, contribuant à réguler la salinité et à purifier l'eau dans les zones côtières." },
        { front: <img src={CourantOceanique} alt="Couranr Océanique" className="rigth-panel" />, back: "Le cœur, en pompant le sang, est comparable aux courants océaniques qui déplacent l'eau à travers le globe. Les courants, comme le Gulf Stream, agissent comme des \"pompes\" thermiques qui régulent la température et la répartition des nutriments, tout comme le cœur distribue l'oxygène et les nutriments à travers le corps." },
        { front: <img src={Gazeux} alt="Gazeux" className="rigth-panel"/>, back: "Les poumons permettent les échanges gazeux (oxygène et dioxyde de carbone), tout comme l'océan absorbe le CO2 atmosphérique et libère de l'oxygène grâce à la photosynthèse des phytoplanctons et aux échanges à la surface de l'eau." }
    ];

    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        setFlipped(false);
    }, [currentImage]);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const currentText = text[currentImage];

    return (
        <div className="card-container" onClick={handleFlip}>
            <AnimatePresence>
                {flipped ? (
                    <motion.div
                        key="back"
                        initial={{ opacity: 0, rotateY: 180 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: 180 }}
                        transition={{ duration: 0.6 }}
                        className="card back"
                    >
                        {currentText.back}
                    </motion.div>
                ) : (
                    <motion.div
                        key="front"
                        initial={{ opacity: 0, rotateY: flipped ? -180 : 0 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: flipped ? -180 : 0 }}
                        transition={{ duration: 0.6 }}
                        className="card front"
                    >
                        {currentText.front}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}