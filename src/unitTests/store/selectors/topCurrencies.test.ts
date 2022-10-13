import {getTopCurrencies} from '../../../store/selectors/topCurrencies';

describe("topCurrencies selector test", () => {
    const currenciesData = [
        {
            id: '123',
            rank: 'USD',
            symbol: 'string',
            name: 'string',
            supply: 'string',
            maxSupply: 'string',
            marketCapUsd: 'string',
            volumeUsd24Hr: 'string',
            priceUsd: 'string',
            changePercent24Hr: 'string',
            vwap24Hr: 'string',
            explorer: 'string'
        }
    ];
    const state = {
        isLoading: false,
        currenciesData
    };

    it("should return currenciesData", () => {
        expect(getTopCurrencies.resultFunc(state)).toBe(currenciesData);
    });
});
