const breakingBadApiCharacterInformationFetch = async(name) => {
    const url = `https://www.breakingbadapi.com/api/characters?name=${name}`;

    const result = await fetch(url);
    const characterJson = await result.json();

    // const character = characterJson.map(char => {
    //     return {
    //         prop: char.name
    //     }
    // })

    // return character;
}

export default breakingBadApiCharacterInformationFetch;