<template>
    <div>
        <h1>{{ randomQuote.quoteText }}</h1>
        <h3>- {{ randomQuote.quoteAuthor }}</h3>
        <hr>
    </div>    
</template>



<script lang="ts">
import { RandomQuote, RandomQuoteResponse } from '@/types/QuoteDtos';
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import { QuotesProvider } from '../providers/QuotesProvider';

@Component
export default class Quote extends Vue {
    randomQuote!: RandomQuote;
    quotesProvider: QuotesProvider = new QuotesProvider();

    public async setRandomQuote(): Promise<void> {
        this.randomQuote = await this.getRandomQuote();
    }

    public async getRandomQuote(): Promise<RandomQuote> {
        const randomQuoteReasponse = await this.quotesProvider.GetRandomQuote();
        const randomQuote = randomQuoteReasponse.randomQuote;

        if(!randomQuote) {
            return new RandomQuote();
        }

        return randomQuote;
    }
}
</script>


<style lang="scss" scoped>

</style>