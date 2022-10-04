import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CurrencyData} from '../../components/Main/Main';

type InitialState = {
    isLoading: boolean
    currenciesData: Array<CurrencyData>
}
const initialState: InitialState = {
    isLoading: false,
    currenciesData: [],
}

export const topCurrenciesSlice = createSlice({
        name: 'TopCurrencies',
        initialState: initialState,
        reducers: {
            loadTopCurrenciesRequest(state, action: PayloadAction<number>) {
                state.isLoading = true
            },
            loadTopCurrenciesSuccess(state, action: PayloadAction<{ currenciesData: CurrencyData[] }>) {
                state.isLoading = false
                state.currenciesData = action.payload.currenciesData
            },
        }
    }
)