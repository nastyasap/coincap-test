import {
    getWalletCurrenciesData,
    getWalletTotalBuyPrice,
    getWalletTotalSellPrice
} from '../../../store/selectors/wallet';

describe("wallet selector test", () => {
    const currenciesData = [
        {
            id: '123',
            name: 'string',
            count: 123,
            currentPrice: 345609
        }
    ];
    const totalBuyPrice = 1000
    const totalSellPrice = 200
    const state = {
        isLoading: false,
        currenciesData, totalBuyPrice, totalSellPrice
    };

    it("should return currenciesData", () => {
        expect(getWalletCurrenciesData.resultFunc(state)).toEqual(currenciesData);
    });

    it("should return totalBuyPrice", () => {
        expect(getWalletTotalBuyPrice.resultFunc(state)).toEqual(totalBuyPrice);
    });

    it("should return totalSellPrice", () => {
        expect(getWalletTotalSellPrice.resultFunc(state)).toEqual(totalSellPrice);
    });
});
