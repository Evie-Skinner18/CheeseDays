<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CheeseSection from './components/CheeseSection.vue';
import Navbar from './components/Navbar.vue';

@Component({
  components: {
    CheeseSection,
    Navbar
  },
})
export default class App extends Vue {}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #ffeabf;
}
</style>
