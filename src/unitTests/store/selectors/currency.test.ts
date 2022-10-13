import {getCurrencyData, getCurrencyHistoryData, getCurrencyId} from '../../../store/selectors/currency';

describe("currency selector test", () => {
    const currencyData = {
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
    };

    const historyCurrencyData = [
        {
            date: 'string',
            priceUsd: 'string',
            time: 1234
        }
    ]

    const state = {
        isLoading: false,
        isHistoryLoading: false,
        currencyData,
        historyCurrencyData,
    };

    it("should return currencyId", () => {
        expect(getCurrencyId.resultFunc(state)).toBe(currencyData.id);
    });

    it("should return currencyData", () => {
        expect(getCurrencyData.resultFunc(state)).toBe(currencyData);
    });

    it("should return currencyHistoryData", () => {
        expect(getCurrencyHistoryData.resultFunc(state)).toBe(historyCurrencyData);
    });
});
