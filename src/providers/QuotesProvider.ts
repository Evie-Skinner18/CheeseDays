
import axios from 'axios'
import { Quote } from 'src/types/Quote'

export class QuotesProvider {

    public async GetRandomQuote(): Promise<Quote> {
        const uri = 'https://quote-garden.herokuapp.com/api/v2/';

        const response = await axios.get(`${uri}/quotes/random`);

        if(!response.data) {
            return new Quote();
        }

        const quote = response.data;
        return quote;
    }

}
