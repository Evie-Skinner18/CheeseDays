import { BeerTypeOption } from '../Enums';

export class BeerType {
    name!: string;
    typeOption?: BeerTypeOption;

    constructor(name: string, typeOption?: BeerTypeOption) {
        this.name = name;
        this.typeOption = typeOption;
    }

    static FromBeerTypeOption(typeOption?: BeerTypeOption): BeerType {
        switch (typeOption) {
            case BeerTypeOption.Porter:
                return new BeerType('Porter', BeerTypeOption.Porter);
            case BeerTypeOption.Stout:
                return new BeerType('Stout', BeerTypeOption.Stout);
            case BeerTypeOption.Bitter:
                return new BeerType('Bitter', BeerTypeOption.Bitter);
            case BeerTypeOption.Pilsener:
                return new BeerType('Pilsener', BeerTypeOption.Pilsener);
            case BeerTypeOption.PaleAle:
                return new BeerType('PaleAle', BeerTypeOption.PaleAle);
            case BeerTypeOption.Sour:
                return new BeerType('Sour', BeerTypeOption.Sour);       
            default:
                return new BeerType('The unknown beer');
        }
    }
}