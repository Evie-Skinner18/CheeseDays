import { Beer } from '../domain/beer/Beer';
import { BeerType } from '../domain/beer/Enums';

const porter = new Beer('London Porter', 'UK', 'Full of juicy winter flavours', BeerType.Porter, 6.5);
const ipa = new Beer('Punk IPA', 'UK', 'A tropical boost', BeerType.PaleAle, 4);

test('Should return true when the type of the given beer is porter', () => {
    const isWinterBeer = porter.isWinterBeer();
    expect(isWinterBeer).toBe(true);
});

test('Should return false when the type of the given beer is pale ale', () => {
    const isWinterBeer = ipa.isWinterBeer();
    expect(isWinterBeer).toBe(false);
});