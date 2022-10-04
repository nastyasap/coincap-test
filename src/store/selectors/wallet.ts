import {AppState} from '../store';
import {walletSlice} from '../reducers/wallet';

export const getWallet = (state: AppState) => state[walletSlice.name]
export const getWalletCurrencyData = (state: AppState) => getWallet(state).currenciesData