import { all } from '@redux-saga/core/effects';
import {currenciesTableSaga} from './currenciesTable';
import {currencySaga} from './currency';

export default function* rootSaga() {
    yield all([
        currenciesTableSaga,
        currencySaga
    ]);
}
