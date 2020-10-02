
export class RandomQuoteResponse {
    statusCode?: number
    randomQuote?: RandomQuote
}

export class RandomQuote {
    id?: string
    quoteText?: string
    quoteAuthor?: string
}