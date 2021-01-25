import { Vue, Component, Prop } from 'vue-property-decorator';
import { BeerType } from '../domain/beer/Enums';
import { Beer } from '../domain/beer/Beer';

@Component({})
export default class BeerComponent extends Vue {
    @Prop({default: Beer.EMPTY()}) private beer!: Beer;

    public getBeerTypeString(): string {
        const beerType = BeerType[this.beer.type as number];
        return beerType;
    }
}