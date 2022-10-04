import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialState = {
    isLoading: boolean
    currenciesData: Array<{
        id: string
        name: string
        count: number
        currentPrice: number
    }>
    totalBuyPrice: number
    totalSellPrice: number
}
const initialState: InitialState = {
    isLoading: false,
    currenciesData: [],
    totalBuyPrice: 0,
    totalSellPrice: 0,
}

export const walletSlice = createSlice({
        name: 'Wallet',
        initialState: initialState,
        reducers: {
            loadWalletRequest(state, action: PayloadAction<string[]>) {
                state.isLoading = true
            },
            loadWalletSuccess(state, action: PayloadAction<{ [id: string]: number }>) {
                state.isLoading = false
                state.currenciesData.forEach(currency => currency.currentPrice = action.payload[currency.id]
                )
            },
            addCurrencyToWalletRequest(state, action: PayloadAction<{ id: string, count: number }>) {
                state.isLoading = true
            },
            addCurrencyToWalletSuccess(state, action: PayloadAction<{ id: string, count: number, priceUsd: number }>) {
                state.isLoading = false
                state.currenciesData.forEach(currency => {
                    if (currency.id === action.payload.id) {
                        currency.count += action.payload.count
                    }
                })
                state.totalBuyPrice += action.payload.count * action.payload.priceUsd
            },
            deleteCurrencyFromWalletRequest(state, action: PayloadAction<{ id: string, count: number }>) {
                state.isLoading = true
            },
            deleteCurrencyFromWalletSuccess(state, action: PayloadAction<{ id: string, count: number, priceUsd: number }>) {
                state.isLoading = false
                const index = state.currenciesData.findIndex(currency => currency.id === action.payload.id)
                if (index > -1) {
                    state.currenciesData.splice(index, 1)
                }
                state.totalSellPrice += action.payload.count * action.payload.priceUsd
            },

        }
    }
)