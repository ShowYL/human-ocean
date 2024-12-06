import React, { useState } from 'react';

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

export default function Form() {
    const [inputValue, setInputValue] = useState('');
    const [foundEntries, setFoundEntries] = useState({});

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        const foundEntry = dictionary.find(entry => entry.word === value);
        if (foundEntry && !foundEntries[foundEntry.letter]) {
            const updatedEntries = { ...foundEntries, [foundEntry.letter]: foundEntry };
            setFoundEntries(updatedEntries);
            setInputValue('');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '80vh' }}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <div style={{ marginTop: '20px' }}>
                <table>
                    <thead>
                        <tr>
                            <th>Lettre</th>
                            <th>Mot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(foundEntries).map((entry, index) => (
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
