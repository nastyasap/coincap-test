import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getWalletCurrenciesData} from '../../../store/selectors/wallet';
import {WalletAccessor, WalletTable} from './WalletTable/Table';
import {Columns} from '../../../types/types';
import {walletSlice} from '../../../store/reducers/wallet';

export const Wallet: React.FC = () => {
    const data = useSelector(getWalletCurrenciesData)
    const walletCurrenciesId = data.map(crypto => crypto.id)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(walletSlice.actions.loadWalletRequest(walletCurrenciesId))
    }, [dispatch, walletCurrenciesId])

    const walletData = data.map(item => ({
        ...item,
        currentPrice: item.currentPrice.toFixed(2),
        totalPrice: (item.count * item.currentPrice).toFixed(2),
        delete: '-'
    }))
    const walletColumns: Columns<WalletAccessor>[] = React.useMemo(
        () => [
            {
                header: 'Name',
                accessor: 'name',
            },
            {
                header: 'Count',
                accessor: 'count',
            },
            {
                header: 'Current Price',
                accessor: 'currentPrice',
            },
            {
                header: 'Total Price',
                accessor: 'totalPrice',
            },
            {
                header: 'Delete Currency',
                accessor: 'delete',
            },
        ],
        []
    )
    return (
        <>
            <WalletTable currencyData={walletData} columns={walletColumns}/>
        </>
    )
}