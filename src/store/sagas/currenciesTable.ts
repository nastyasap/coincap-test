import {all, call, put, takeLatest} from '@redux-saga/core/effects';
import {currenciesTableSlice} from '../reducers/currenciesTable';
import {currenciesApi} from '../../api/api';

export const ROWS_PER_PAGE = 5

export function* fetchCurrenciesTable({payload}: ReturnType<typeof currenciesTableSlice.actions.loadTableRequest>) {
    const {data} = yield call(currenciesApi.getDataTable, (payload - 1) * ROWS_PER_PAGE)
    yield put(currenciesTableSlice.actions.loadTableSuccess({currenciesData: data.data}))
}


export function* currenciesTableSaga() {
    yield all([
        takeLatest(currenciesTableSlice.actions.loadTableRequest.type, fetchCurrenciesTable),
    ])
}