const breakingBadApiDeathsFetch = async() => {
    const url = `https://www.breakingbadapi.com/api/deaths`;
    const result = await fetch(url);
    const deaths = await result.json();
    return deaths;
}

export default breakingBadApiDeathsFetch;