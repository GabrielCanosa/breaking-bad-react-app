import React, { useState, useEffect } from 'react';
import breakingBadApiCharactersFetch from '../helpers/breakingBadApiCharactersFetch';

const EpisodesGrid = ({episodes}) => {

  const [charactersInEpisode, setCharactersInEpisode] = useState();
  const [characters, setCharacters] = useState();

  useEffect(() => {
    breakingBadApiCharactersFetch().then(charactersResponse => {
      setCharacters(charactersResponse);
    });    
  }, [])
  

    const handleOpenEpisodeInformation = (e) => {
        setCharactersInEpisode(e.target.value.toString());
    }

  return (
    <div className="w-full md:w-3/5 mx-auto p-8">
        <p className='p-3'>Choose and episode</p>
        <div className="shadow-md">
          {
            episodes !== undefined &&
            episodes.map(episode => (
              <div className="tab w-full overflow-hidden border-t">
                <input value={episode.characters} className="absolute opacity-0" id={`episode-${episode.episode_id}`} type="radio" name="tabs2" onClick={ handleOpenEpisodeInformation } />
                <label className="block p-5 leading-normal cursor-pointer" for={`episode-${episode.episode_id}`}><b>{episode.series}</b> {episode.season}x{episode.episode} {episode.title}</label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p className="p-3">Characters that appear:</p>
                  <div className='flex items-center flex-col md:flex-row justify evenly p-5'>
                    {
                      characters !== undefined &&
                      charactersInEpisode !== undefined &&
                      characters.map(character => (
                        charactersInEpisode.includes(character.name) &&
                          <img src={character.img} className="mx-auto object-cover rounded-full w-20 h-20" alt={character.name} title={character.name} />
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
  )
}

export default EpisodesGrid;