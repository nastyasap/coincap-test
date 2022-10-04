import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CurrencyData} from '../../components/Main/Main';
import {HistoryData} from '../../components/Main/Table/TableRows/CurrencyPage/CurrencyPage';

type InitialState = {
    isLoading: boolean
    isHistoryLoading: boolean
    currencyData: CurrencyData
    historyCurrencyData: HistoryData[]
}
const initialState: InitialState = {
    isLoading: false,
    isHistoryLoading: false,
    currencyData: {} as CurrencyData,
    historyCurrencyData: [],
}

export const currencySlice = createSlice({
        name: 'Currency',
        initialState: initialState,
        reducers: {
            loadCurrencyRequest(state, action: PayloadAction<string>) {
                state.isLoading = true
            },
            loadCurrencySuccess(state, action: PayloadAction<{ currencyData: CurrencyData }>) {
                state.isLoading = false
                state.currencyData = action.payload.currencyData
            },
            historyDataRequest(state, action: PayloadAction<string>) {
                state.isHistoryLoading = true
            },
            historyDataSuccess(state, action: PayloadAction<HistoryData[]>) {
                state.isHistoryLoading = false
                state.historyCurrencyData = action.payload
            },
        }
    }
)