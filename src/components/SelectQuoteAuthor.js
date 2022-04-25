import React from 'react';

export const SelectQuoteAuthor = ({selectedCharacter, selectCharacter}) => {

    const handleSelectCharacter = (e) => {
        if(e.target.value !== 'Choose a character') {
            selectedCharacter(e.target.value);
        }
    };

    return (
        <div className="flex justify-center flex-col md:flex-row">
            <label className="text-gray-700" for="characters">
            Choose a character
                <select id="characters" className="block w-52 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="characters"
                onChange={ handleSelectCharacter }>
                    <option>Choose a character</option>
                    {
                        selectCharacter !== undefined &&
                        selectCharacter.map(character => (
                            <option key={character.name} value={character.name}>
                                {character.name}
                            </option>
                        ))
                    }
                </select>
            </label>
        </div>
    )
}