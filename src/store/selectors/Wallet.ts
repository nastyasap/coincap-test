import {AppState} from '../store';
import {walletSlice} from '../reducers/Wallet';

export const getWallet = (state: AppState) => state[walletSlice.name]
export const getWalletCurrencyData = (state: AppState) => getWallet(state).currenciesData