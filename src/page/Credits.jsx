import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CommitsGraph from '../component/CommitsGraph.jsx';

const contributors = [
    {
        name: 'Paqui ESTHER',
        github: 'Paquies',
        role: 'Développeur',
        avatar: 'https://github.com/paquies.png',
        info: 'Je suis un développeur passionné par la technologie et l\'innovation. J\'aime apprendre de nouvelles choses et partager mes connaissances avec les autres.'
    },
    {
        name: 'Yann LACAZE',
        github: 'ShowYL',
        role: 'Développeur',
        avatar: 'https://github.com/showyl.png',
        info: 'Je suis un développeur passionné par la technologie et l\'innovation. J\'aime apprendre de nouvelles choses et partager mes connaissances avec les autres.'
    },
    {
        name: 'Clement GINER',
        github: 'D4kooo',
        role: ' 🫃🏻 Développeuse 🫠',
        avatar: 'https://github.com/D4kooo.png',
        info: 'Je suis un développeur passionné par la technologie et l\'innovation. J\'aime apprendre de nouvelles choses et partager mes connaissances avec les autres.'
    },
    {
        name: 'Fantin PESANT',
        github: 'F4NT1N',
        role: 'Développeur',
        avatar: 'https://github.com/F4NT1N.png',
        info: 'Je suis un développeur passionné par la technologie et l\'innovation. J\'aime apprendre de nouvelles choses et partager mes connaissances avec les autres.'
    },
    {
        name: 'Étienne NOEL',
        github: 'EtienneNo',
        role: 'Developpeur',
        avatar: 'https://github.com/EtienneNo.png',
        info: 'Je suis un développeur passionné par la technologie et l\'innovation. J\'aime apprendre de nouvelles choses et partager mes connaissances avec les autres.'
    },
    {
        name: 'Elfin POUGET-PEJOAN',
        github: 'Nifle-CGE',
        role: 'Developpeur',
        avatar: 'https://github.com/Nifle-CGE.png',
        info: 'Je suis un développeur passionné par la technologie et l\'innovation. J\'aime apprendre de nouvelles choses et partager mes connaissances avec les autres.'
    },
    {
        name: 'Allan HOARAU',
        github: 'rompichames',
        role: 'Developpeur',
        avatar: 'https://github.com/rompichames.png',
        info: 'Je suis un développeur passionné par la technologie et l\'innovation. J\'aime apprendre de nouvelles choses et partager mes connaissances avec les autres.'
    },
    {
        name: 'Yoan POUX-BORIES',
        github: 'YoanPOUX',
        role: 'Developpeur',
        avatar: 'https://github.com/YoanPOUX.png',
        info: 'Je suis un développeur passionné par la technologie et l\'innovation. J\'aime apprendre de nouvelles choses et partager mes connaissances avec les autres.'
    },
    {
        name: 'Martin BAGOT',
        github: 'MartinBgt',
        role: 'Developpeur',
        avatar: 'https://github.com/MartinBgt.png',
        info: 'Je suis un développeur passionné par la technologie et l\'innovation. J\'aime apprendre de nouvelles choses et partager mes connaissances avec les  autres.'
    },
    {
        name: 'Nathan BOLE-RICHARD',
        github: 'IAidenI',
        role: 'Developpeur',
        avatar: 'https://github.com/IAidenI.png',
        info: 'Je suis un développeur passionné par la technologie et l\'innovation. J\'aime apprendre de nouvelles choses et partager mes connaissances avec les autres.'
    },
    {
        name: 'Pierrick AUTRET',
        github: 'Yeesou',
        role: 'Developpeur',
        avatar: 'https://github.com/Yeesou.png',
        info: 'Je suis un développeur passionné par la technologie et l\'innovation. J\'aime apprendre de nouvelles choses et partager mes connaissances avec les autres.'
    }
];


const repos = [
    { owner: 'ShowYL', name: 'human-ocean' },
    { owner: 'D4kooo', name: 'Cookie-Cauchemar-CAPGEMINI-' },
    { owner: 'F4NT1N', name: 'N2I_Jeu_IA' }
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
                        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', width: '65%', height: '65%', backgroundColor: '#2a2a2a', zIndex: 1000 }}
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
                                <p>{contributors[selectedId].info}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <hr />
            <div className="participation-graph">
                <h2>Graphique de participation</h2>
                <p>Graphique ou visualisation des contributions ici</p>
                <br />
                <CommitsGraph repos={repos} />
                <br />
                <p>** Ce graphique représente le nombre de comits effectuer, ce ci n'est donc pas représentatif de la réalité du travail réalisé.</p>
            </div>
            <hr />
        </div>
    );
};

export default Credits;