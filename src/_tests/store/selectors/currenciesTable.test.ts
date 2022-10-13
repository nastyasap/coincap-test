import {getCurrenciesTableData, getCurrentPage} from '../../../store/selectors/currenciesTable';
import {currenciesData} from '../../../_mocks/fileMock';

describe("currenciesTable selector test", () => {
    const currentPage = 3;

    const state = {
        isLoading: false,
        currenciesData,
        currentPage,
    };

    it("should return currenciesData", () => {
        expect(getCurrenciesTableData.resultFunc(state)).toEqual(currenciesData);
    });

    it("should return currentPage", () => {
        expect(getCurrentPage.resultFunc(state)).toEqual(currentPage);
    });
});
