import axios, {AxiosResponse} from "axios";
import {CurrencyData} from '../components/Main/Main';
import {HistoryData} from '../components/Main/Table/TableRows/CurrencyPage/CurrencyPage';
import {ROWS_PER_PAGE} from '../store/sagas/currenciesTable';

const instance = axios.create({
    baseURL: 'https://api.coincap.io/v2/assets'
})

export const currenciesApi = {
    getDataTable(offset: number = 0, limit: number = ROWS_PER_PAGE, ids?: string) {
        return instance.get <AxiosResponse<ResponseType<{ data: CurrencyData[] }>>>('', {params: {limit, offset, ids}})
    },
    getCurrency(id: string) {
        return instance.get<CurrencyData>(`/${id}`)
    },
    getCurrencyHistory(id: string, interval: string) {
        return instance.get<HistoryData[]>(`/${id}/history?interval=${interval}`)
    }
}

type ResponseType<T> = {
    data: Array<T>
    timestamp: number
}