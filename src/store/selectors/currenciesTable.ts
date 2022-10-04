import {AppState} from '../store';
import {currenciesTableSlice} from '../reducers/currenciesTable';

export const getCurrenciesTableState = (state: AppState) => state[currenciesTableSlice.name]
export const getCurrenciesTableData = (state: AppState) => getCurrenciesTableState(state).currenciesData
export const getCurrentPage = (state: AppState) => getCurrenciesTableState(state).currentPage