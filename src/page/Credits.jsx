import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const contributors = [
    {
        name: 'Paqui ESTHER',
        github: 'Paquies',
        role: 'Développeur',
        avatar: 'https://github.com/paquies.png'
    },
    {
        name: 'Yann LACAZE',
        github: 'ShowYL',
        role: 'Développeur',
        avatar: 'https://github.com/showyl.png'
    },
    {
        name: 'Clement GINER',
        github: 'D4kooo',
        role: ' 🫃🏻 Développeuse 🫠',
        avatar: 'https://github.com/D4kooo.png'
    },
    {
        name: 'Fantin PESANT',
        github: 'F4NT1N',
        role: 'Développeur',
        avatar: 'https://github.com/F4NT1N.png'
    },
    {
        name: 'Étienne NOEL',
        github: 'EtienneNo',
        role: 'Developpeur',
        avatar: 'https://github.com/EtienneNo.png'
    },
    {
        name: 'Elfin POUGET-PEJOAN',
        github: 'Nifle-CGE',
        role: 'Developpeur',
        avatar: 'https://github.com/Nifle-CGE.png'
    },
    {
        name: 'Allan HOARAU',
        github: 'rompichames',
        role: 'Developpeur',
        avatar: 'https://github.com/rompichames.png'
    },
    {
        name: 'Yoan POUX-BORIES',
        github: 'YoanPOUX',
        role: 'Developpeur',
        avatar: 'https://github.com/YoanPOUX.png'
    },
    {
        name: 'Martin BAGOT',
        github: 'MartinBgt',
        role: 'Developpeur',
        avatar: 'https://github.com/MartinBgt.png'
    },
    {
        name: 'Nathan BOLE-RICHARD',
        github: 'IAidenI',
        role: 'Developpeur',
        avatar: 'https://github.com/IAidenI.png'
    },
    {
        name: 'Pierrick AUTRET',
        github: 'Yeesou',
        role: 'Developpeur',
        avatar: 'https://github.com/Yeesou.png'
    }
];

const Credits = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <div className="credits-container">
            <h1>Crédits</h1>
            <div className="contributors-list">
                {contributors.map((contributor, index) => (
                    <motion.div 
                        key={index} 
                        className="contributor-card"
                        layoutId={`card-${index}`}
                        onClick={() => setSelectedId(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="contributor-card-inner">
                            <div className="contributor-card-front">
                                <img src={contributor.avatar} alt={`${contributor.name} avatar`} className="avatar" />
                                <div className="contributor-info">
                                    <h2>{contributor.name}</h2>
                                    <p>{contributor.role}</p>
                                    <a href={`https://github.com/${contributor.github}`} target="_blank" rel="noopener noreferrer">
                                        {contributor.github}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <AnimatePresence>
                {selectedId !== null && (
                    <motion.div 
                        className="contributor-card-plus"
                        layoutId={`card-${selectedId}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => setSelectedId(null)}
                        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', width: '80%', height: '80%', backgroundColor: '#2a2a2a', zIndex: 1000 }}
                    >
                        <div className="contributor-card-inner">
                            <div className="contributor-card-front">
                                <img src={contributors[selectedId].avatar} alt={`${contributors[selectedId].name} avatar`} className="avatar" />
                                <div className="contributor-info">
                                    <h2>{contributors[selectedId].name}</h2>
                                    <p>{contributors[selectedId].role}</p>
                                    <a href={`https://github.com/${contributors[selectedId].github}`} target="_blank" rel="noopener noreferrer">
                                        {contributors[selectedId].github}
                                    </a>
                                </div>
                            </div>
                            <div className='info-contributor'>
                                <p>Plus d'informations ici...</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <hr />
            <div className="participation-graph">
                <h2>Graphique de participation</h2>
                <p>Graphique ou visualisation des contributions ici</p>
            </div>
        </div>
    );
};

export default Credits;