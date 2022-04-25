
const breakingBadApiQuotesFetch = async(author) => {
    const url = `https://www.breakingbadapi.com/api/quotes?author=${author.replace(/\s/g, "+")}`;
    
    const result = await fetch(url);
    const quotesJson = await result.json();

    const quotesByAuthor = [];
    quotesJson.forEach(quote => {
        if(quote.author === author) {
            quotesByAuthor.push(quote);
        }
    });

    return quotesByAuthor.slice(0,5);
}

export default breakingBadApiQuotesFetch;