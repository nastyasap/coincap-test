import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas';
import {walletSlice} from './reducers/wallet';
import {currenciesTableSlice} from './reducers/currenciesTable';
import {topCurrenciesSlice} from './reducers/topCurrencies';
import {currencySlice} from './reducers/currency';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/es/storage';

const rootReducer = combineReducers({
    [walletSlice.name]: walletSlice.reducer,
    [currenciesTableSlice.name]: currenciesTableSlice.reducer,
    [topCurrenciesSlice.name]: topCurrenciesSlice.reducer,
    [currencySlice.name]: currencySlice.reducer
});

const persistConfig = {
    key: 'root',
    storage: storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

export const persistor = persistStore(store)

export type AppState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);