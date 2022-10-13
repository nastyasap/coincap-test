import {AppState} from '../store';
import {walletSlice} from '../reducers/wallet';
import {createSelector} from '@reduxjs/toolkit';

export const getWallet = (state: AppState) => state[walletSlice.name]
export const getWalletCurrenciesData = createSelector(getWallet, (state) => state.currenciesData)
export const getWalletTotalBuyPrice = createSelector(getWallet, (state) => state.totalBuyPrice)
export const getWalletTotalSellPrice = createSelector(getWallet, (state) => state.totalSellPrice)
