import {getTopCurrencies} from '../../../store/selectors/topCurrencies';
import {currenciesData} from '../../../_mocks/fileMock';

describe("topCurrencies selector test", () => {
    const state = {
        isLoading: false,
        currenciesData
    };

    it("should return currenciesData", () => {
        expect(getTopCurrencies.resultFunc(state)).toEqual(currenciesData);
    });
});
