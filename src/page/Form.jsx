import React, { useState } from 'react';
import './Form.css'; // Assurez-vous de créer ce fichier CSS

const dictionary = [
    { letter: 'a', word: 'banane' },
    { letter: 'b', word: 'durée' },
    { letter: 'c', word: 'champ' },
    { letter: 'd', word: 'ganberge' },
    { letter: 'e', word: 'rhododendron' },
    { letter: 'f', word: 'tableau' },
    { letter: 'g', word: 'pied' },
    { letter: 'h', word: 'pomme' },
    { letter: 'i', word: 'cheval' },
    { letter: 'j', word: 'papier' },
    { letter: 'k', word: 'révision' },
    { letter: 'l', word: 'innovant' },
    { letter: 'm', word: 'poche' },
    { letter: 'n', word: 'gardon' },
    { letter: 'o', word: 'addition' },
    { letter: 'p', word: 'proxenitisme' },
    { letter: 'q', word: 'fenetre' },
    { letter: 'r', word: 'code' },
    { letter: 's', word: 'turlupine' },
    { letter: 't', word: 'ornitaurinque' },
    { letter: 'u', word: 'moche' },
    { letter: 'v', word: 'porrte' },
    { letter: 'w', word: 'radiateur' },
    { letter: 'x', word: 'local' },
    { letter: 'y', word: 'caramel' },
    { letter: 'z', word: 'ile' },
    { letter: '1', word: 'hein' },
    { letter: '2', word: 'de' },
    { letter: '3', word: 'troyes' },
    { letter: '4', word: 'quartz' },
    { letter: '5', word: 'saint' },
    { letter: '6', word: 'dix' },
    { letter: '7', word: 'sete' },
    { letter: '8', word: 'huitre' },
    { letter: '9', word: 'oeuf' },
    { letter: '0', word: 'hero' },
    { letter: '@', word: 'hâte' },
    { letter: '.', word: 'point' }
];

const specialWord = 'supprimer'; // Mot spécial pour supprimer la dernière lettre

export default function Form() {
    const [inputValue, setInputValue] = useState('');
    const [letterValue, setLetterValue] = useState('');
    const [foundEntries, setFoundEntries] = useState({});

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value === specialWord) {
            // Supprimer la dernière lettre
            const lastLetter = letterValue.slice(-1);
            const updatedEntries = { ...foundEntries };
            delete updatedEntries[lastLetter];
            setFoundEntries(updatedEntries);
            setLetterValue(letterValue.slice(0, -1));
            setInputValue('');
        } else {
            const foundEntry = dictionary.find(entry => entry.word === value);
            if (foundEntry) {
                setLetterValue(prev => prev + foundEntry.letter);
                setInputValue('');
                if (!foundEntries[foundEntry.letter]) {
                    const updatedEntries = { ...foundEntries, [foundEntry.letter]: foundEntry };
                    setFoundEntries(updatedEntries);
                }
            }
        }
    };

    const sortedEntries = Object.values(foundEntries).sort((a, b) => a.letter.localeCompare(b.letter));

    return (
        <div className="form-container">
            <h1>Formulaire</h1>
            <p>
                Bienvenue sur notre formulaire interactif ! Pour écrire votre adresse e-mail, vous devez répondre correctement à une série d'énigmes. 
                Chaque réponse correcte vous donnera une lettre qui sera ajoutée à votre adresse e-mail. 
                Entrez la réponse à l'énigme dans le champ ci-dessous et regardez votre adresse e-mail se construire lettre par lettre. 
                Bonne chance !
                <br />
                <br />
                Ps : Pour supprimer la dernière lettre, entrez le mot "supprimer".
            </p>
            <p>Entrez un mot pour obtenir une lettre</p>
            
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Entrez un mot" className="input-field" />
            <input type="text" value={letterValue} readOnly placeholder="Votre mail" className="input-field" />
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Lettre</th>
                            <th>Mot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedEntries.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.letter}</td>
                                <td>{entry.word}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}