
import axios from 'axios'
import IQuote from 'src/types/Quote'

export class QuotesProvider {

    public async GetRandomQuote(): Promise<IQuote> {
        const uri = 'https://quote-garden.herokuapp.com/api/v2/';

        const response = await axios.get(`${uri}/quotes/random`);

        if(!response.data) {
            return 
        }

        const quote = response.data;
        return quote;
    }

}
