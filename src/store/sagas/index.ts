import {all} from '@redux-saga/core/effects';
import {currenciesTableSaga} from './currenciesTable';
import {currencySaga} from './currency';
import {topCurrenciesSaga} from './topCurrencies';
import {walletSaga} from './wallet';

export default function* rootSaga() {
    yield all([
        currenciesTableSaga(),
        currencySaga(),
        topCurrenciesSaga(),
        walletSaga(),
    ]);
}
