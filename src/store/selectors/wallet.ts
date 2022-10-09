import {AppState} from '../store';
import {walletSlice} from '../reducers/wallet';

export const getWallet = (state: AppState) => state[walletSlice.name]
export const getWalletCurrenciesData = (state: AppState) => getWallet(state).currenciesData
export const getWalletTotalBuyPrice = (state: AppState) => getWallet(state).totalBuyPrice
export const getWalletTotalSellPrice = (state: AppState) => getWallet(state).totalSellPrice