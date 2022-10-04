import React from 'react';
import {Data, MainAccessor, Table} from './Table/Table';
import {FlexStyled} from '../common/CommonStyles';

export type Columns<A> = {
    header: string
    accessor: A
}


type Props = {
    currencyData: CurrencyData[]
}

export type CurrencyData = {
    id: string
    rank: string
    symbol: string
    name: string
    supply: string
    maxSupply: string | null
    marketCapUsd: string
    volumeUsd24Hr: string
    priceUsd: string
    changePercent24Hr: string
    vwap24Hr: string
    explorer: string | null
}


export const Main: React.FC<Props> = ({currencyData}) => {
    const mainTableData: Array<Data> = React.useMemo(
        () => currencyData.map(item => ({
            id: item.id,
            name: item.name,
            price: '$ ' + (Number(item.priceUsd).toFixed(2)).toString(),
            marketCap: '$ ' + ((Number(item.marketCapUsd) / 1000000000).toFixed(2)).toString() + ' B',
            dayChange: (Number(item.changePercent24Hr).toFixed(2)).toString() + ' %',
            dayVolume: '$ ' + ((Number(item.volumeUsd24Hr) / 1000000000).toFixed(2)).toString() + ' B',
            add: '+'
        })),
        [currencyData]
    )

    const mainColumns: Columns<MainAccessor>[] = React.useMemo(
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
        <FlexStyled>
            <Table currencyData={mainTableData} columns={mainColumns}/>
        </FlexStyled>
    )
}