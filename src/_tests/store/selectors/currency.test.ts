import {getCurrencyData, getCurrencyHistoryData, getCurrencyId} from '../../../store/selectors/currency';
import {currenciesData, historyCurrencyData} from '../../../_mocks/fileMock';

describe("currency selector test", () => {
    const currencyData = currenciesData[0]
    const state = {
        isLoading: false,
        isHistoryLoading: false,
        currencyData,
        historyCurrencyData,
    };

    it("should return currencyId", () => {
        expect(getCurrencyId.resultFunc(state)).toEqual(currencyData.id);
    });

    it("should return currencyData", () => {
        expect(getCurrencyData.resultFunc(state)).toEqual(currencyData);
    });

    it("should return currencyHistoryData", () => {
        expect(getCurrencyHistoryData.resultFunc(state)).toEqual(historyCurrencyData);
    });
});
