import { BeerType } from './Enums';

export class Beer {
    name!: string;
    type?: BeerType;
    strength?: number;
    country!: string;
    flavourProfile!: string;

    constructor(name: string, country: string, flavourProfile: string, type?: BeerType, strength?: number){
        this.name = name,
        this.type = type,
        this.strength = strength,
        this.country = country,
        this.flavourProfile = flavourProfile
    }

    static EMPTY(){
        return new Beer('','','');
    }

    public getBeerTypeString(): string {
        const beerType = BeerType[this.type as number];
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
        switch (this.type) {
            case BeerType.Porter:
            case BeerType.Stout:
                return 'dark'
            case BeerType.Pilsener:
            case BeerType.PaleAle:
                return 'light'
            case BeerType.Bitter:
                return 'amber'
            default:
                return 'We don\'t know the colour of this beer'
        }
    }

    public isWinterBeer(): boolean {
        const isWinterBeer = 
        this.type === BeerType.Porter || this.type === BeerType.Stout ? true : false;

        return isWinterBeer;
    }
}