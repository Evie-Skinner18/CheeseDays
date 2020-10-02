<template>
  <div class="quote-section">
    <h1>Here is a nice quote for you</h1>
    <Quote />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Quote from './Quote.vue';

@Component({ components: { Quote } })
export default class QuoteSection extends Vue {
  }

</script>

<style lang="css" scoped>
  .quote-section {
    padding-top: 80px; ;
  }
</style>