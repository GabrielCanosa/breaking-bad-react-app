const breakingBadApiCharactersFetch = async() => {
    const url = `https://www.breakingbadapi.com/api/characters`;
    const result = await fetch(url);
    const charactersJson = await result.json();

    return charactersJson;
}

export default breakingBadApiCharactersFetch;