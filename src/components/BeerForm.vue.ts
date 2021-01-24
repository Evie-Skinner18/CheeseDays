import { Vue, Component } from 'vue-property-decorator';
import { Beer } from '../domain/beer/Beer';

@Component({})
export default class BeerForm extends Vue {
    beer: Beer = Beer.EMPTY();
    beerTypes: number[] = [1, 2, 3, 4, 5, 6];
    valid = true;

    private emitBeerAddedEvent(): void {
        this.$emit('beerAdded', this.beer);
    }
}