<template>
<v-form  ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="beer.name" :counter="10" label="Name" required>
      </v-text-field>
      
      <v-select v-model="beer.type" :items="beerTypes" :rules="[v => !!v || 'Type is required']" 
        label="Type" required>
      </v-select>

      <v-text-field v-model="beer.strength" label="Strength" required>
      </v-text-field>
  
      <v-text-field v-model="beer.country" label="Country" required>
      </v-text-field>

      <v-text-field v-model="beer.flavourProfile" label="Flavour Profile" required>
      </v-text-field>
  
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="emitBeerAddedEvent"
      >
        Add beer
      </v-btn>

    </v-form>
    
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { Beer } from '../domain/beer/Beer';

@Component({})
export default class BeerForm extends Vue {
    beer: Beer = Beer.EMPTY();
    beerTypes: string[] = ['Porter', 'Stout', 'Pilsener', 'Pale ale'];
    valid = true;

    @Watch('this.beer.name')
    private isValid(): void
    {
      const beerNameIsValid = !this.beer.name.includes('<') && !this.beer.name.includes('>') 
        && !this.beer.name.includes('{') && !this.beer.name.includes('}');
      
      this.valid = beerNameIsValid;
    }

    private emitBeerAddedEvent(): void {
        this.$emit('beerAdded', this.beer);
    }
}
</script>

<style scoped>

</style>