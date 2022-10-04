import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas';
import {walletSlice} from './reducers/wallet';
import {currenciesTableSlice} from './reducers/currenciesTable';
import {topCurrenciesSlice} from './reducers/topCurrencies';
import {currencySlice} from './reducers/currency';

const rootReducer = combineReducers({
    [walletSlice.name]: walletSlice.reducer,
    [currenciesTableSlice.name]: currenciesTableSlice.reducer,
    [topCurrenciesSlice.name]: topCurrenciesSlice.reducer,
    [currencySlice.name]: currencySlice.reducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

export type AppState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);