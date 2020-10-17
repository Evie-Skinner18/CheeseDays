<template>
    <div>
        <h1>{{ randomQuote.quoteText }}</h1>
        <h3>- {{ randomQuote.quoteAuthor }}</h3>
        <hr>
    </div>    
</template>



<script lang="ts">
import { RandomQuote } from '@/types/QuoteDtos';
import { Component, Vue } from 'vue-property-decorator'; 
import { QuotesProvider } from '../providers/QuotesProvider';

const quotesProvider = new QuotesProvider();

@Component({
    name: 'Quote',
  })

export default class Quote extends Vue {
    randomQuote!: RandomQuote;
    //quotesProvider: QuotesProvider;

    public async getQuote(): Promise<RandomQuote> {
        const randomQuoteResponse = await quotesProvider.GetRandomQuote();
        const quote = randomQuoteResponse.randomQuote;

        if(!quote) {
            return new RandomQuote();
        }

        return quote;
    }

    async beforeCreate(): Promise<void> {
        //console.log(this);
        const randomQuote = await this.getQuote();
        console.log(randomQuote);
        this.randomQuote = randomQuote;
    }
}
</script>


<style lang="scss" scoped>

</style>