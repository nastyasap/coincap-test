import {all, call, put, takeLatest} from '@redux-saga/core/effects';
import {topCurrenciesSlice} from '../reducers/topCurrencies';
import {currenciesApi} from '../../api/api';

function* fetchTopCurrencies({payload}: ReturnType<typeof topCurrenciesSlice.actions.loadTopCurrenciesRequest>) {
    const {data} = yield call(currenciesApi.getDataTable, 0, 3)
    yield put(topCurrenciesSlice.actions.loadTopCurrenciesSuccess(data))
}

export function* topCurrenciesSaga() {
    yield all([
        takeLatest(topCurrenciesSlice.actions.loadTopCurrenciesRequest.type, fetchTopCurrencies)
    ])
}