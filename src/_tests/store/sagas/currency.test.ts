import {currenciesData, historyCurrencyData} from '../../../_mocks/fileMock';
import {currenciesApi} from '../../../api/api';
import {runSaga, Saga} from '@redux-saga/core';
import {currencySlice} from '../../../store/reducers/currency';
import {fetchCurrencyData, fetchCurrencyHistoryData} from '../../../store/sagas/currency';

describe('currency saga test', () => {
    const action = {
        payload: 'currency_id',
        type: 'type'
    }
    let dispatched: Array<any> = []

    beforeEach(() => {
        dispatched = [];
        jest.clearAllMocks();
    });

    it('should call getCurrency and getCurrencyHistory from currenciesApi and dispatch right actions', async () => {
        const spy = jest.spyOn(currenciesApi, 'getCurrency').mockResolvedValue({
            data: {
                data: currenciesData[0],
                timestamp: 1234
            },
            headers: {},
            status: 200,
            statusText: '',
            config: {},
            request: ''
        });
        const spy2 = jest.spyOn(currenciesApi, 'getCurrencyHistory').mockResolvedValue({
            data: {
                data: historyCurrencyData,
                timestamp: 1234
            },
            headers: {},
            status: 200,
            statusText: '',
            config: {},
            request: ''
        });
        await runSaga({
                dispatch: action => dispatched.push(action),
                getState: () => ({state: 'test'}),
            },
            fetchCurrencyData as Saga<any[]>,
            action
        ).toPromise()
        //test that function was called with params from action payload
        expect(spy).toHaveBeenCalledWith('currency_id')
        expect(spy2).toHaveBeenCalledWith('currency_id', 'm30')
        //test that right action was dispatched
        expect(dispatched).toEqual([
            {
                type: currencySlice.actions.loadCurrencySuccess.type,
                payload: {
                    currencyData: currenciesData[0]
                }
            },
            {
                type: currencySlice.actions.historyDataSuccess.type,
                payload: historyCurrencyData
            },
        ])
        spy.mockRestore();
    });

    it('should call getCurrencyHistory from currenciesApi and dispatch historyDataSuccess', async () => {
        const spy = jest.spyOn(currenciesApi, 'getCurrencyHistory').mockResolvedValue({
            data: {
                data: historyCurrencyData,
                timestamp: 1234
            },
            headers: {},
            status: 200,
            statusText: '',
            config: {},
            request: ''
        });

        const action = {
            type: 'test',
            payload: {
                interval: 'interval',
                start: 'start'
            }
        }

        await runSaga({
                dispatch: action => dispatched.push(action),
                getState: () => ({
                    [currencySlice.name]: {currencyData: {id: 'test'}}
                }),
            },
            fetchCurrencyHistoryData as Saga<any[]>,
            action
        ).toPromise();
        expect(spy).toHaveBeenCalledWith('test', action.payload.interval, action.payload.start)
        expect(dispatched).toEqual([{
            type: currencySlice.actions.historyDataSuccess.type,
            payload: historyCurrencyData
        }])
    })
})