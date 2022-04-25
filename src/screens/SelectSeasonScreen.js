import React, { useState } from 'react';

const SelectSeasonScreen = ({ selectedSeason, seasonEpisodes }) => {

  const [seasonSelected, setSeasonSelected] = useState();
  let seasons;

  if(seasonEpisodes !== undefined) {
    seasons = Array.from(new Set(seasonEpisodes.map(x => x.season.replace(/\s/g, ""))));
  }

  const handleButtonClick = (e) => {
    setSeasonSelected(e.target.value);
    selectedSeason(e.target.value);
  }

  return (
    <div style={ {textAlign: 'center', paddingTop: 20} }>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        {
          seasons !== undefined &&
          seasons.map(season => (
            <button key={`Season ${season}`} type="submit" className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-l border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    onClick={ handleButtonClick }
                    value={season} >
              {`Season ${season}`}
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default SelectSeasonScreen;