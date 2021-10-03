<template>
    <div>
        <h1>Thanks for adding a beer!</h1>
       <h2>{{ beer.name }}</h2>
       <p>Ooh, this beer's colour is {{ beer.getColour() }}</p>
       <p>What a tasty one. As a {{ beer.getBeerTypeString() }}, {{ beer.name }} is best enjoyed with a {{ beer.getCheesePairing() }}</p>
       <p v-if="beer.isWinterBeer()">This beer is best enjoyed in the winter!</p>
       <p v-else-if="!beer.isWinterBeer()">This beer is best enjoyed in the warmer months!</p>
    </div>   
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Beer } from '../domain/beer/Beer';

@Component({})
export default class BeerSummary extends Vue {
    @Prop({default: Beer.EMPTY()}) private beer!: Beer;
}
</script>

<style scoped>

</style>