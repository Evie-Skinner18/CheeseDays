
import axios from 'axios'
import { RandomQuoteResponse } from '@/types/QuoteDtos'

export class QuotesProvider {

    public async GetRandomQuote(): Promise<RandomQuoteResponse> {
        const uri = 'https://quote-garden.herokuapp.com/api/v2/';

        const response = await axios.get(`${uri}/quotes/random`);
        console.log(response);

        if(!response.data) {
            return new RandomQuoteResponse();
        }

        const quote = response.data;
        return quote;
    }

}
