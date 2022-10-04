import {all, call, put, select, takeLatest} from '@redux-saga/core/effects';
import {currencySlice} from '../reducers/currency';
import {currenciesApi} from '../../api/api';
import {getCurrencyId} from '../selectors/currency';

function* fetchCurrencyData({payload}: ReturnType<typeof currencySlice.actions.loadCurrencyRequest>) {
    const {data} = yield call(currenciesApi.getCurrency, payload)
    const {data: historyData} = yield call(currenciesApi.getCurrencyHistory, payload, 'm30')
    console.log('saga', historyData.data)
    yield put(currencySlice.actions.loadCurrencySuccess({currencyData: data.data}))
    yield put(currencySlice.actions.historyDataSuccess(historyData.data))
}

function* fetchCurrencyHistoryData({payload}: ReturnType<typeof currencySlice.actions.historyDataRequest>) {
    const id: string = yield select(getCurrencyId)
    const {data} = yield call(currenciesApi.getCurrencyHistory, id, payload.interval, payload.start)
    yield put(currencySlice.actions.historyDataSuccess(data.data))
}

export function* currencySaga() {
    yield all([
        takeLatest(currencySlice.actions.loadCurrencyRequest.type, fetchCurrencyData),
        takeLatest(currencySlice.actions.historyDataRequest.type, fetchCurrencyHistoryData),
    ])
}