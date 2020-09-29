<template>
    <nav class="navalicious">
        <span class="cheese-items">
            <router-link to="/">Home</router-link>
            <router-link to="/quotes">Quotes</router-link>
            <router-link to="/cheese">Cheese</router-link>
        </span>
    </nav>    
</template>

<script lang="ts">
import{ Vue, Component } from 'vue-property-decorator'
export default class Navbar extends Vue{
    
}
</script>

<style scoped>
.navalicious {
  text-transform: uppercase;
  background-color: #5a2605;
  min-height: 40px;
  padding: 10px;
  text-align: right;
  position: fixed;
  width: 100%;
  font-weight: 600;
  z-index: 999;
}

.navalicious a {
  color: #fcc455;
  text-decoration: none;
  letter-spacing: 15px;
  margin-right: 30px;
}

.navalicious a:hover {
  color: #ffeabf;
}

.cheese-items {
    padding-right: 20px;
}


</style>