import {AppState} from '../store';
import {topCurrenciesSlice} from '../reducers/topCurrencies';

export const getTopCurrenciesState = (state: AppState) => state[topCurrenciesSlice.name]
export const getTopCurrencies = (state: AppState) => getTopCurrenciesState(state).currenciesData