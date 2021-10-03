import { CheeseTypeOption } from '../Enums';

export class Cheese {
    name!: string;
    type?: CheeseTypeOption;
    strength?: number;
    country!: string;
    flavourProfile!: string;

    constructor(name: string, country: string, flavourProfile: string, type?: CheeseTypeOption, 
        strength?: number){
        this.name = name,
        this.type = type,
        this.strength = strength,
        this.country = country,
        this.flavourProfile = flavourProfile
    }

    static EMPTY(){
        return new Cheese('','','');
    }
}