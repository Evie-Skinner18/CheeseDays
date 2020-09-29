<template>
    <h1>I am a Quote!</h1>
    
</template>



<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import { QuotesProvider } from '../providers/QuotesProvider';

@Component
export default class Quote extends Vue {

}
</script>


<style lang="scss" scoped>

</style>