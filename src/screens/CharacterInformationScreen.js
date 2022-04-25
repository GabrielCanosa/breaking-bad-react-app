import React, { useState, useEffect } from 'react';
import breakingBadApiCharacterInformationFetch from '../helpers/breakingBadApiCharacterInformationFetch';

const CharacterInformationScreen = (name) => {

  console.log(name.toString())

  const [character, setCharacter] = useState();

    useEffect(() =>  {
        breakingBadApiCharacterInformationFetch(name).then(character => {
            setCharacter(character);
        });
    }, [character]);


  return (
    <div>CharacterInformationScreen</div>
  )
}

export default CharacterInformationScreen;