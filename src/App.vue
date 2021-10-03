<template>
  <v-app>
    <v-main>
      <Navbar/>
      <CheeseDaysContainer/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Navbar from './components/Navbar.vue';
import CheeseDaysContainer from './components/CheeseDaysContainer.vue';

export default Vue.extend({
  name: 'App',

  components: {
    CheeseDaysContainer,
    Navbar
  }
});
</script>


