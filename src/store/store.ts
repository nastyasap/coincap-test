import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas';
import {walletSlice} from './reducers/Wallet';

const rootReducer = combineReducers({
    [walletSlice.name]: walletSlice.reducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

export type AppState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);