import React from 'react'
import {CurrencyData} from '../Main';
import {TableHeader} from './TableHeader/TableHeader';
import {TableRows} from './TableRows/TableRows';

export type Accessor = 'name' | 'price' | 'marketCap' | 'dayChange' | 'dayVolume' | 'add'
export type Columns = {
    header: string
    accessor: Accessor
}

export type Data = {
    name: string
    price: string
    marketCap: string
    dayChange: string
    dayVolume: string
    add: string
}

type Props = {
    currencyData: CurrencyData[]
}

export const Table: React.FC<Props> = ({currencyData}) => {
    const data: Data[] = React.useMemo(
        () => currencyData.map(item => ({
            name: item.name,
            price: '$ ' + (Number(item.priceUsd).toFixed(2)).toString(),
            marketCap: '$ ' + ((Number(item.marketCapUsd) / 1000000000).toFixed(2)).toString() + ' B',
            dayChange: (Number(item.changePercent24Hr).toFixed(2)).toString() + ' %',
            dayVolume: '$ ' + ((Number(item.volumeUsd24Hr) / 1000000000).toFixed(2)).toString() + ' B',
            add: '+'
        })),
        [currencyData]
    )

    const columns: Columns[] = React.useMemo(
        () => [
            {
                header: 'Name',
                accessor: 'name',
            },
            {
                header: 'Price',
                accessor: 'price',
            },
            {
                header: 'Market Cap',
                accessor: 'marketCap',
            },
            {
                header: '24h Change',
                accessor: 'dayChange',
            },
            {
                header: '24H Volume',
                accessor: 'dayVolume',
            },
            {
                header: 'Add to wallet',
                accessor: 'add',
            },
        ],
        []
    )

    return (
        <table>
            <TableHeader columns={columns}/>
            <TableRows columns={columns} data={data}/>
        </table>
    )
}