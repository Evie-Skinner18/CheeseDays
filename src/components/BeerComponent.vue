<template>
    <div>
        <h1>Thanks for adding a beer!</h1>
       <h2>{{ beer.name }}</h2>
       <p>Ooh, this beer's colour is {{ beer.getColour() }}</p>
       <p>What a tasty one. As a {{ beerTypeString }}, {{ beer.name }} is best enjoyed with a {{ beer.getCheesePairing() }}</p>
    </div>   
</template>

<script lang="ts" src="./BeerComponent.vue.ts"></script>

<style scoped>

</style>