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

<script lang="ts" src="./BeerComponent.vue.ts"></script>

<style scoped>

</style>