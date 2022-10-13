import {currenciesTableSlice} from '../../../store/reducers/currenciesTable';
import {currenciesData} from '../../../_mocks/fileMock';

describe('currenciesTable reducer test', () => {
    const initialState = {
        isLoading: false,
        currenciesData: [],
        currentPage: 1,
    };

    it('should return the initial state', () => {
        expect(currenciesTableSlice.reducer(undefined, {type: undefined})).toEqual(initialState)
    });

    it('should set current page and isLoading true', () => {
        expect(currenciesTableSlice.reducer(initialState, currenciesTableSlice.actions.loadTableRequest(2))).toEqual({
            ...initialState,
            currentPage: 2,
            isLoading: true
        })
    });

    it('should return state with currenciesData', () => {
        expect(currenciesTableSlice.reducer(initialState, currenciesTableSlice.actions.loadTableSuccess({currenciesData}))).toEqual({
            ...initialState,
            currenciesData
        })
    });
})