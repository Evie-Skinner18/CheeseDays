import { Beer } from '../domain/beer/Beer';
import { BeerType } from '../domain/beer/Enums';

const porter = new Beer('London Porter', 'UK', 'Full of sweet winter flavours', BeerType.Porter, 6.5);
const ipa = new Beer('Punk IPA', 'UK', 'A tropical boost', BeerType.PaleAle, 4);
const stout = new Beer('Big Cat', 'UK', 'Dark and malty', BeerType.Stout, 7);


test('isWinterBeer() - Should return true when the type of the given beer is porter', () => {
    const isWinterBeer = porter.isWinterBeer();
    expect(isWinterBeer).toBe(true);
});

test('isWinterBeer() - Should return false when the type of the given beer is pale ale', () => {
    const isWinterBeer = ipa.isWinterBeer();
    expect(isWinterBeer).toBe(false);
});

test('getColour() - Should return dark when the type of the given beer is stout', () => {
    const beerColour = stout.getColour();
    expect(beerColour).toEqual("dark");
});

test('getCheesePairing() - Should return mild cheese such as Jarlsberg when the flavour profile of the given beer contains the word sweet', () => {
    const cheesePairing = porter.getCheesePairing();
    expect(cheesePairing).toEqual("mild cheese such as Jarlsberg");
});