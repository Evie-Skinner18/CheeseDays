<template>
    <h1>I am a Quote!</h1>
    
</template>



<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import { QuotesProvider } from '../providers/QuotesProvider';
import { IQuote } from '../types/Quote';

@Component
export default class Quote extends Vue {
    randomQuote!: Quote;
    quotesProvider: QuotesProvider = new QuotesProvider();

    public async getRandomQuote(): Promise<Quote> {
        var randomQuote = await this.quotesProvider.GetRandomQuote();

        if(randomQuote.quoteText) {
            return randomQuote;
        }
    }
}
</script>


<style lang="scss" scoped>

</style>