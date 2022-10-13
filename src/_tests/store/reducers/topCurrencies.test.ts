import {topCurrenciesSlice} from '../../../store/reducers/topCurrencies';
import {currenciesData} from '../../../_mocks/fileMock';

describe('topCurrencies reducer test', () => {
    const initialState = {
        isLoading: false,
        currenciesData: [],
    }

    it('should return the initial state', () => {
        expect(topCurrenciesSlice.reducer(undefined, {type: undefined})).toEqual(initialState)
    });

    it('should set isLoading true', () => {
        expect(topCurrenciesSlice.reducer(initialState, topCurrenciesSlice.actions.loadTopCurrenciesRequest())).toEqual({
            isLoading: true,
            currenciesData: []
        })
    });

    it('should return currenciesData', () => {
        expect(topCurrenciesSlice.reducer(initialState, topCurrenciesSlice.actions.loadTopCurrenciesSuccess({currenciesData}))).toEqual(
            {
                isLoading: false,
                currenciesData: currenciesData
            }
        )
    });
})