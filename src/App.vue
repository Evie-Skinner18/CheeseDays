<template>
  <v-app>
    <v-main>
      <Navbar/>
      <CheeseSection/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from './components/Navbar.vue';
import CheeseSection from './components/CheeseSection.vue';

export default Vue.extend({
  name: 'App',

  components: {
    CheeseSection,
    Navbar
  },

  data: () => ({
    //
  }),
});
</script>


