import {currenciesData} from '../../../_mocks/fileMock';
import {currenciesApi} from '../../../api/api';
import {runSaga, Saga} from '@redux-saga/core';
import {
    addCurrentCurrencyPrice,
    deleteCurrentCurrencyPrice,
    getCurrentCurrenciesPrice
} from '../../../store/sagas/wallet';
import {walletSlice} from '../../../store/reducers/wallet';

describe('wallet saga test', () => {
    let dispatched: Array<any> = []
    beforeEach(() => {
        dispatched = [];
        jest.clearAllMocks();
    });

    it('should call getDataTable and dispatch loadWalletSuccess', async () => {
        const action = {
            payload: ['123', '321'],
            type: 'type'
        }
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
            getCurrentCurrenciesPrice as Saga<any[]>,
            action
        ).toPromise()
        //test that function was called with params from action payload
        expect(spy).toHaveBeenCalledWith(0, undefined, "123,321")
        //test that right action was dispatched
        expect(dispatched).toEqual([{
            type: walletSlice.actions.loadWalletSuccess.type,
            payload: {
                '123': 123,
                '345': 345
            }
        }])
        spy.mockRestore();
    });

    it('should call getCurrency and dispatch addCurrencyToWalletSuccess', async () => {
        const action = {
            type: 'test',
            payload: {id: 'test', count: 2}
        }

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
        await runSaga({
                dispatch: action => dispatched.push(action),
                getState: () => ({state: 'test'}),
            },
            addCurrentCurrencyPrice as Saga<any[]>,
            action
        ).toPromise()
        //test that function was called with params from action payload
        expect(spy).toHaveBeenCalledWith(action.payload.id)
        //test that right action was dispatched
        expect(dispatched).toEqual([{
            type: walletSlice.actions.addCurrencyToWalletSuccess.type,
            payload: {
                id: 'test',
                name: currenciesData[0].name,
                count: 2,
                currentPrice: Number(currenciesData[0].priceUsd)
            }
        }])
        spy.mockRestore();
    });

    it('should call getCurrency and dispatch deleteCurrencyFromWalletSuccess', async () => {
        const action = {
            type: 'test',
            payload: {id: 'test', count: 2}
        }

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
        await runSaga({
                dispatch: action => dispatched.push(action),
                getState: () => ({state: 'test'}),
            },
            deleteCurrentCurrencyPrice as Saga<any[]>,
            action
        ).toPromise()
        //test that function was called with params from action payload
        expect(spy).toHaveBeenCalledWith(action.payload.id)
        //test that right action was dispatched
        expect(dispatched).toEqual([{
            type: walletSlice.actions.deleteCurrencyFromWalletSuccess.type,
            payload: {
                id: 'test',
                count: 2,
                priceUsd: Number(currenciesData[0].priceUsd)
            }
        }])
        spy.mockRestore();
    });

})