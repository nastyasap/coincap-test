import {AppState} from '../store';
import {currenciesTableSlice} from '../reducers/currenciesTable';
import {createSelector} from '@reduxjs/toolkit';

export const getCurrenciesTableState = (state: AppState) => state[currenciesTableSlice.name]
export const getCurrenciesTableData = createSelector(getCurrenciesTableState, (state) => state.currenciesData)
export const getCurrentPage = createSelector(getCurrenciesTableState, (state) => state.currentPage)
