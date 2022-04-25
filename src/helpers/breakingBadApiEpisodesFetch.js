const breakingBadApiEpisodesFetch = async(seasonSelected) => {
    const url = `https://www.breakingbadapi.com/api/episodes`;
    const result = await fetch(url);
    const episodesJson = await result.json();

    return episodesJson;
}

export default breakingBadApiEpisodesFetch;