import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CurrencyData} from '../../types/types';

type InitialState = {
    isLoading: boolean
    currenciesData: Array<CurrencyData>
    currentPage: number
}
const initialState: InitialState = {
    isLoading: false,
    currenciesData: [],
    currentPage: 1,
}

export const currenciesTableSlice = createSlice({
        name: 'CurrenciesTable',
        initialState: initialState,
        reducers: {
            loadTableRequest(state, action: PayloadAction<number>) {
                state.isLoading = true
                state.currentPage = action.payload
            },
            loadTableSuccess(state, action: PayloadAction<{ currenciesData: CurrencyData[] }>) {
                state.isLoading = false
                state.currenciesData = action.payload.currenciesData
            },
        }
    }
)