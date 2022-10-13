import {AppState} from '../store';
import {topCurrenciesSlice} from '../reducers/topCurrencies';
import {createSelector} from '@reduxjs/toolkit';

export const getTopCurrenciesState = (state: AppState) => state[topCurrenciesSlice.name]
// export const getTopCurrencies = (state: AppState) => getTopCurrenciesState(state).currenciesData
export const getTopCurrencies = createSelector(getTopCurrenciesState, (state) => state.currenciesData)