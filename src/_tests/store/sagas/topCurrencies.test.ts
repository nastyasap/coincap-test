import {currenciesData} from '../../../_mocks/fileMock';
import {currenciesApi} from '../../../api/api';
import {runSaga, Saga} from '@redux-saga/core';
import {fetchTopCurrencies} from '../../../store/sagas/topCurrencies';
import {topCurrenciesSlice} from '../../../store/reducers/topCurrencies';

describe('topCurrencies saga test', () => {
    const action = {
        payload: {},
        type: 'type'
    }
    const dispatched: Array<any> = []

    it('should check dispatched actions and call api with right payload', async () => {
        const spy = jest.spyOn(currenciesApi, 'getDataTable').mockResolvedValue({
            data: {
                data: currenciesData,
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
            fetchTopCurrencies as Saga<any[]>,
            action
        ).toPromise()
        //test that function was called with params from action payload
        expect(spy).toHaveBeenCalled()
        //test that right action was dispatched
        expect(dispatched).toEqual([{
            type: topCurrenciesSlice.actions.loadTopCurrenciesSuccess.type,
            payload: {
                currenciesData: currenciesData
            }
        }])
        spy.mockRestore();
    })
})