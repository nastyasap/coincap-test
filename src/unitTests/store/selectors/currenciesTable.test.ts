import {getCurrenciesTableData, getCurrentPage} from '../../../store/selectors/currenciesTable';

describe("currenciesTable selector test", () => {
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
        }];

    const currentPage = 3;

    const state = {
        isLoading: false,
        currenciesData,
        currentPage,
    };

    it("should return currenciesData", () => {
        expect(getCurrenciesTableData.resultFunc(state)).toBe(currenciesData);
    });

    it("should return currentPage", () => {
        expect(getCurrentPage.resultFunc(state)).toBe(currentPage);
    });
});
