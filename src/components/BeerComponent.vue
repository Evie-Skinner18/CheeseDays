<template>
    <div>
        <h1>Thanks for adding a beer!</h1>
       <h2>{{ beer.name }}</h2>
       <p>Ooh, this beer's colour is {{ beer.getColour() }}</p>
    </div>   
</template>

<script lang="ts" src="./BeerComponent.vue.ts"></script>

<style scoped>

</style>