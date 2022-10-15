import {fetchCurrenciesTable} from '../../../store/sagas/currenciesTable';
import {currenciesTableSlice} from '../../../store/reducers/currenciesTable';
import {currenciesData} from '../../../_mocks/fileMock';
import {currenciesApi} from '../../../api/api';
import {runSaga, Saga} from '@redux-saga/core';

describe('currenciesTable saga test', () => {
    const action = {
        payload: 4,
        type: 'type'
    }
    const dispatched: Array<any> = []

    it('should puts currency table data to store', async () => {
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
            fetchCurrenciesTable as Saga<any[]>,
            action
        ).toPromise()
        //test that function was called with params from action payload
        expect(spy).toHaveBeenCalledWith(15)
        //test that right action was dispatched
        expect(dispatched).toEqual([{
            type: currenciesTableSlice.actions.loadTableSuccess.type,
            payload: {
                currenciesData: currenciesData
            }
        }])
        spy.mockRestore();
    })
})