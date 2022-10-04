import axios, {AxiosResponse} from "axios";
import {ROWS_PER_PAGE} from '../store/sagas/currenciesTable';
import {CurrencyData, HistoryData} from '../types/types';

const instance = axios.create({
    baseURL: 'https://api.coincap.io/v2/assets'
})

export const currenciesApi = {
    getDataTable(offset: number = 0, limit: number = ROWS_PER_PAGE, ids?: string) {
        return instance.get <AxiosResponse<ResponseType<{ data: CurrencyData[] }>>>('', {params: {limit, offset, ids}})
    },
    getCurrency(id: string) {
        return instance.get<AxiosResponse<ResponseType<CurrencyData>>>(`/${id}`)
    },
    getCurrencyHistory(id: string, interval: string, start: number = (new Date().getTime() - 24 * 60 * 60 * 1000)) {
        return instance.get<HistoryData[]>(`/${id}/history`, {params: {interval, start, end: new Date().getTime()}})
    }
}

type ResponseType<T> = {
    data: Array<T>
    timestamp: number
}