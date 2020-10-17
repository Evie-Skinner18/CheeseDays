<template>
  <div class="quote-section">
    <h1>Here is a nice quote for you</h1>
    
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { RandomQuote } from '@/types/QuoteDtos';
import { QuotesProvider } from '../providers/QuotesProvider';

//import Quote from './Quote.vue';

@Component({ components: {  } })
export default class QuoteSection extends Vue {

    randomQuote!: RandomQuote;
    quotesProvider: QuotesProvider = new QuotesProvider();

    public async fetchQuote(): Promise<RandomQuote> {
        const randomQuoteResponse = await this.quotesProvider.GetRandomQuote();
        const quote = randomQuoteResponse.randomQuote;

        //const quote = new RandomQuote();

        if(!quote) {
            return new RandomQuote();
        }

        return quote;
    }

    async beforeCreate(): Promise<void> {
        //console.log(this);
        const randomQuote = await this.fetchQuote();
        console.log(randomQuote);
        this.randomQuote = randomQuote;
    }
}

</script>

<style lang="css" scoped>
  .quote-section {
    padding-top: 80px; ;
  }
</style>