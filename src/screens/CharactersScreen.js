import React, { useState, useEffect } from 'react';
import breakingBadApiCharactersFetch from '../helpers/breakingBadApiCharactersFetch';

export const CharactersScreen = () => {

    const [characters, setCharacters] = useState();

    useEffect(() =>  {
        breakingBadApiCharactersFetch().then(characters => {
            setCharacters(characters);
        });
    }, []);

  return (

    <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Characters</h2>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

            {
                characters !== undefined &&
                characters.map(character => (
                    <div className="shadow-lg rounded-2xl w-79 bg-white dark:bg-gray-800 p-1">
                        <img alt={`${character.name}`} src={character.category === 'Breaking Bad' ? `./assets/breakingBadBackground.jpg` : `./assets/BetterCallSaulBackground.jpg`} className="rounded-t-lg h-28 w-full mb-4"/>
                        <div className="flex flex-col items-center justify-center p-4 -mt-16">
                            <a href="#" className="block relative">
                                <img alt={`${character.name}`} src={`${character.img}`} className="mx-auto object-cover rounded-full h-16 w-16  border-2 border-white dark:border-gray-800"/>
                            </a>
                            <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
                                {character.name}
                            </p>
                            <p className="text-gray-400 text-xs mb-4">
                                {character.category}
                            </p>
                            <p className="text-xs p-2 bg-pink-500 text-white px-4 rounded-full">
                                {character.nickname}
                            </p>
                            <div className="rounded-lg p-2 w-full mt-4">
                                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">
                                    <p className="flex flex-col">
                                        Portrayed
                                        <span className="text-black dark:text-white font-bold">
                                            {character.portrayed}
                                        </span>
                                    </p>
                                    <p className="flex flex-col">
                                        Birthday
                                        <span className="text-black dark:text-white font-bold">
                                            {character.birthday}
                                        </span>
                                    </p>
                                    <p className="flex flex-col">
                                        Occupation
                                        {
                                            character.occupation !== undefined &&
                                            character.occupation.map(occupation => (
                                                <span className="text-black dark:text-white font-bold">
                                                    {occupation}
                                                </span>
                                            ))
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

            </div>
        </div>
    </div>
  )
}

export default CharactersScreen;