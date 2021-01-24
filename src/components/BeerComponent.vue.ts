import { Vue, Component, Prop } from 'vue-property-decorator';
import { Beer } from '../domain/beer/Beer';

@Component({})
export default class BeerComponent extends Vue {
    @Prop({default: Beer.EMPTY()}) private beer!: Beer;
}