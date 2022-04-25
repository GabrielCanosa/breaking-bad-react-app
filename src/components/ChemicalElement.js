import React from 'react';

const ChemicalElement = ({word, letters}) => {

    let firstLetter = word.substr(0, letters);
    let restOfWord = word.substr(letters, word.length);

  return (
    <>
        <div className='flex justify-center flex-col md:flex-row'>
            <p className="firstLetter letters">{firstLetter}</p>
            <p className="restOfWord letters">{restOfWord}</p>
        </div>
    </>
  )
}

export default ChemicalElement;