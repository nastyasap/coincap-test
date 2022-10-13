import {currenciesData, historyCurrencyData} from '../../../_mocks/fileMock';
import {currencySlice} from '../../../store/reducers/currency';
import {CurrencyData} from '../../../types/types';

describe('currency reducer test', () => {
    const initialState = {
        isLoading: false,
        isHistoryLoading: false,
        currencyData: {} as CurrencyData,
        historyCurrencyData: [],
    };
    const currencyData = currenciesData[0];
    const historyData = historyCurrencyData;

    it('should return the initial state', () => {
        expect(currencySlice.reducer(undefined, {type: undefined})).toEqual(initialState)
    });

    it('should set isLoading true', () => {
        expect(currencySlice.reducer(initialState, currencySlice.actions.loadCurrencyRequest('123'))).toEqual({
            ...initialState,
            isLoading: true,
        })
    });

    it('should return state with currency data', () => {
        expect(currencySlice.reducer(initialState, currencySlice.actions.loadCurrencySuccess({currencyData}))).toEqual(
            {
                ...initialState,
                currencyData
            }
        )
    });

    it('should set isHistoryLoading true', () => {
        expect(currencySlice.reducer(initialState, currencySlice.actions.historyDataRequest({interval: 'interval'}))).toEqual(
            {
                ...initialState,
                isHistoryLoading: true
            }
        )
    });

    it('should return history data', () => {
        expect(currencySlice.reducer(initialState, currencySlice.actions.historyDataSuccess(historyData))).toEqual(
            {
                ...initialState,
                historyCurrencyData: historyData
            }
        )
    });
})