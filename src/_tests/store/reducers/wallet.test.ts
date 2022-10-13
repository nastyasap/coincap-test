import {walletSlice} from '../../../store/reducers/wallet';

describe('wallet reducer test', () => {
    const initialState = {
        isLoading: false,
        currenciesData: [],
        totalBuyPrice: 0,
        totalSellPrice: 0,
    };
    const currenciesData = [
        {
            id: '123',
            name: 'string',
            count: 1,
            currentPrice: 500
        },
        {
            id: '234',
            name: 'string',
            count: 1,
            currentPrice: 500
        }
    ];
    const idPayload = currenciesData.map(currency => currency.id);
    const newPrices = idPayload.reduce((acc: { [id: string]: number }, id) => {
        acc[id] = 1000
        return acc
    }, {});
    const addedCurrency = {
        id: '456',
        name: 'new',
        count: 3,
        currentPrice: 200
    }


    it('should return the initial state', () => {
        expect(walletSlice.reducer(undefined, {type: undefined})).toEqual(initialState)
    });

    it('should set isLoading true', () => {
        expect(walletSlice.reducer(initialState, walletSlice.actions.loadWalletRequest(idPayload))).toEqual({
            ...initialState, isLoading: true
        })
    });

    it('should return state with new price of currencies', () => {
        expect(walletSlice.reducer({
            ...initialState,
            currenciesData: currenciesData
        }, walletSlice.actions.loadWalletSuccess(newPrices))).toEqual(
            {
                isLoading: false,
                currenciesData: [{
                    id: '123',
                    name: 'string',
                    count: 1,
                    currentPrice: 1000
                },
                    {
                        id: '234',
                        name: 'string',
                        count: 1,
                        currentPrice: 1000
                    }],
                totalBuyPrice: 0,
                totalSellPrice: 0,
            }
        )
    });

    it('should set isLoading true while new currency is added', () => {
        expect(walletSlice.reducer(initialState, walletSlice.actions.addCurrencyToWalletRequest({
            id: addedCurrency.id,
            count: addedCurrency.count
        }))).toEqual(
            {
                ...initialState,
                isLoading: true
            }
        )
    });

    it('should add new currency to initial state', () => {
        expect(walletSlice.reducer(initialState, walletSlice.actions.addCurrencyToWalletSuccess(addedCurrency))).toEqual(
            {
                ...initialState,
                currenciesData: [addedCurrency],
                totalBuyPrice: 600
            }
        )
    });

    it('should add new currency to existing state', () => {
        expect(walletSlice.reducer({
            ...initialState,
            currenciesData: currenciesData
        }, walletSlice.actions.addCurrencyToWalletSuccess({
            id: '123',
            name: 'new',
            count: 2,
            currentPrice: 700
        }))).toEqual(
            {
                ...initialState,
                currenciesData: [{
                    id: '123',
                    name: 'string',
                    count: 3,
                    currentPrice: 500
                },
                    {
                        id: '234',
                        name: 'string',
                        count: 1,
                        currentPrice: 500
                    }],
                totalBuyPrice: 1400
            }
        )
    });

    it('should set isLoading true while currency is deleted from state', () => {
        expect(walletSlice.reducer({
            ...initialState,
            currenciesData
        }, walletSlice.actions.deleteCurrencyFromWalletRequest({id: '123', count: 1}))).toEqual(
            {
                ...initialState,
                currenciesData: currenciesData,
                isLoading: true
            }
        )
    });

    it('should remove currency from state', () => {
        expect(walletSlice.reducer({
            ...initialState,
            currenciesData
        }, walletSlice.actions.deleteCurrencyFromWalletSuccess({id: '123', count: 1, priceUsd: 300}))).toEqual(
            {
                ...initialState,
                currenciesData: [
                    {
                        id: '234',
                        name: 'string',
                        count: 1,
                        currentPrice: 500
                    }
                ],
                totalSellPrice: 300
            }
        )
    });
})