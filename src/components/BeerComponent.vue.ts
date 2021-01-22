import { Vue, Component, Prop } from 'vue-property-decorator';
import { Beer } from '../domain/models/Beer';

@Component({})
export default class BeerComponent extends Vue {
    beer: Beer = new Beer();
}