import { BeerTypeOption } from '../Enums';
import { BeerType } from './BeerType';

export class Beer {
    name!: string;
    type: BeerType;
    strength?: number;
    country!: string;
    flavourProfile!: string;

    constructor(name: string, country: string, flavourProfile: string, typeOption?: BeerTypeOption, strength?: number){
        this.name = name,
        this.type = BeerType.FromBeerTypeOption(typeOption);
        this.strength = strength,
        this.country = country,
        this.flavourProfile = flavourProfile
    }

    static EMPTY(){
        return new Beer('','','');
    }

    public getBeerTypeOption(): string {
        const beerType = BeerTypeOption[this.type.typeOption as number];
        return beerType;
    }

    public getCheesePairing(): string {
        let cheesePairing = '';
        const isSweetBeer = this.flavourProfile.includes('sweet');
        const isBitterBeer = this.flavourProfile.includes('bitter') || this.flavourProfile.includes('sour');

        if (isSweetBeer) {
            cheesePairing = 'mild cheese such as Jarlsberg';           
        } else if (isBitterBeer) {
            cheesePairing = 'strong cheese like Stilton';
        } else {
            cheesePairing = 'nice reliable Cheddar';
        }
        return cheesePairing;
    }

    public getColour(): string {
        switch (this.type?.typeOption) {
            case BeerTypeOption.Porter:
            case BeerTypeOption.Stout:
                return 'dark'
            case BeerTypeOption.Pilsener:
            case BeerTypeOption.PaleAle:
                return 'light'
            case BeerTypeOption.Bitter:
                return 'amber'
            default:
                return 'We don\'t know the colour of this beer'
        }
    }

    public isWinterBeer(): boolean {
        const isWinterBeer = this.type?.typeOption === BeerTypeOption.Porter || 
        this.type?.typeOption === BeerTypeOption.Stout ? true : false;

        return isWinterBeer;
    }
}