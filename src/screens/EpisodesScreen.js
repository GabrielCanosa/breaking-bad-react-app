import React, { useState, useEffect } from 'react';
import breakingBadApiEpisodesFetch from '../helpers/breakingBadApiEpisodesFetch';
import SelectSeasonScreen from './SelectSeasonScreen';
import EpisodesGrid from '../components/EpisodesGrid';

const EpisodesScreen = () => {

    const [episodes, setEpisodes] = useState();
    const [episodesBySeason, setEpisodesBySeason] = useState();
    const [seasonSelected, setSeasonSelected] = useState();
    // const [characters, setCharacters] = useState();
    
    useEffect(() =>  {
        breakingBadApiEpisodesFetch(seasonSelected).then(episodesResponse => {
          setEpisodes(episodesResponse);
          selectEpisodesBySeason();
        });

    }, [seasonSelected]);

    const selectEpisodesBySeason = () => {
      if (seasonSelected === undefined)
        setSeasonSelected(1);

      let seasonEpisodes = [];

      episodes !== undefined &&
      episodes.forEach(episode => {
        if(episode.season === seasonSelected.toString()) {
          seasonEpisodes.push(episode);
        }
      });

      setEpisodesBySeason(seasonEpisodes);
    }

  return (
    <>
      {
        episodes !== undefined &&
        <SelectSeasonScreen selectedSeason={selectedSeason => setSeasonSelected(selectedSeason)} seasonEpisodes={episodes} />
      }

      {
        episodes !== undefined &&
        <EpisodesGrid episodes={episodesBySeason}/>
      }
    </>
  )
}

export default EpisodesScreen;