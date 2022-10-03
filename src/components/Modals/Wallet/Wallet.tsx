import React from 'react';
import {useSelector} from 'react-redux';
import {getWalletCurrencyData} from '../../../store/selectors/Wallet';
import {Columns} from '../../Main/Main';
import {WalletAccessor, WalletTable} from './WalletTable/Table';


type Props = {}

export const Wallet: React.FC<Props> = ({}) => {
    const data = useSelector(getWalletCurrencyData)
    const walletData = data.map(item => ({...item, delete: '-'}))
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