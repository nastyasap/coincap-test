import {AppState} from '../store';
import {currencySlice} from '../reducers/currency';
import {createSelector} from '@reduxjs/toolkit';

export const getCurrencyState = (state: AppState) => state[currencySlice.name]
export const getCurrencyId = createSelector(getCurrencyState, (state) => state.currencyData.id)
export const getCurrencyData = createSelector(getCurrencyState, (state) => state.currencyData)
export const getCurrencyHistoryData = createSelector(getCurrencyState, (state) => state.historyCurrencyData)