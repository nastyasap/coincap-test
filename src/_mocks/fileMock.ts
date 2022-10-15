import {CurrencyData, HistoryData} from '../types/types';

export const currenciesData: CurrencyData[] = [
    {
        id: '123',
        rank: 'USD',
        symbol: 'string',
        name: 'string',
        supply: 'string',
        maxSupply: 'string',
        marketCapUsd: 'string',
        volumeUsd24Hr: 'string',
        priceUsd: '123',
        changePercent24Hr: 'string',
        vwap24Hr: 'string',
        explorer: 'string'
    },
    {
        id: '345',
        rank: 'BTC',
        symbol: 'string',
        name: 'string',
        supply: 'string',
        maxSupply: 'string',
        marketCapUsd: 'string',
        volumeUsd24Hr: 'string',
        priceUsd: '345',
        changePercent24Hr: 'string',
        vwap24Hr: 'string',
        explorer: 'string'
    },
];

export const historyCurrencyData: HistoryData[] = [
    {
        date: 'string',
        priceUsd: 'string',
        time: 2345
    },
    {
        date: 'string',
        priceUsd: 'string',
        time: 1234
    },
    {
        date: 'string',
        priceUsd: 'string',
        time: 4567
    },
]