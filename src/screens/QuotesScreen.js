import React, { useState, useEffect } from 'react'
import breakingBadApiQuotesFetch from '../helpers/breakingBadApiQuotesFetch';
import breakingBadApiCharactersFetch from '../helpers/breakingBadApiCharactersFetch';
import { SelectQuoteAuthor } from '../components/SelectQuoteAuthor';
import QuoteTestimonial from '../components/QuoteTestimonial';

const QuotesScreen = () => {

  const [characters, setCharacters] = useState();
  const [characterSelected, setCharacterSelected] = useState();
  const [quotes, setQuotes] = useState();

  useEffect(() => {
    breakingBadApiCharactersFetch().then(charactersResponse => {
      setCharacters(charactersResponse);
    });
  }, []);

  useEffect(() => {
    if(characterSelected !== undefined) {
      breakingBadApiQuotesFetch(characterSelected).then(quotesResponse => {
        setQuotes(quotesResponse);
      });
    }
  }, [characterSelected])

  return (
    <>
      {
        characters !== undefined &&
        <SelectQuoteAuthor selectedCharacter={selectedCharacter => setCharacterSelected(selectedCharacter)} selectCharacter={characters}/>
      }

      {
        quotes !== undefined && characterSelected !== undefined &&
        <QuoteTestimonial quotesFromCharacter={quotes} selectedCharacter={characters.find(x => x.name === characterSelected)}/>
      }
    </>
  )
}

export default QuotesScreen;