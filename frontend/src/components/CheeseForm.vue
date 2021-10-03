<template>
<v-form  ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="cheese.name" :counter="10" label="Name" required>
      </v-text-field>
      
      <v-select v-model="cheese.type" :items="cheeseTypes" :rules="[v => !!v || 'Type is required']" 
        label="Type" required>
      </v-select>

      <v-text-field v-model="cheese.strength" label="Strength" required>
      </v-text-field>
  
      <v-text-field v-model="cheese.country" label="Country" required>
      </v-text-field>

      <v-text-field v-model="cheese.flavourProfile" label="Flavour Profile" required>
      </v-text-field>
  
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="emitCheeseAddedEvent"
      >
        Add cheese
      </v-btn>

    </v-form>
    
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { Cheese } from '../domain/cheese/Cheese';

@Component({})
export default class CheeseForm extends Vue {
    cheese: Cheese = Cheese.EMPTY();
    cheeseTypes: number[] = [1, 2, 3, 4, 5, 6];
    valid = true;

    @Watch('this.cheese.name')
    private isValid(): void
    {
      const cheeseNameIsValid = !this.cheese.name.includes('<') && !this.cheese.name.includes('>') 
        && !this.cheese.name.includes('{') && !this.cheese.name.includes('}');
      
      this.valid = cheeseNameIsValid;
    }

    private emitCheeseAddedEvent(): void {
        this.$emit('cheeseAdded', this.cheese);
    }
}
</script>

<style scoped>

</style>