import {AppState} from '../store';
import {currencySlice} from '../reducers/currency';

export const getCurrencyState = (state: AppState) => state[currencySlice.name]
export const getCurrencyId = (state: AppState) => getCurrencyState(state).currencyData.id
export const getCurrencyData = (state: AppState) => getCurrencyState(state).currencyData
export const getCurrencyHistoryData = (state: AppState) => getCurrencyState(state).historyCurrencyData