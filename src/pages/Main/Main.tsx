import React from 'react';
import {MainAccessor, Table} from '../../components/Main/Table/Table';
import {FlexStyled, Title} from '../../components/common/CommonStyles';
import {Columns, CurrencyData, CurrencyTableData} from '../../types/types';

type Props = {
    currencyData: CurrencyData[]
}
export const Main: React.FC<Props> = ({currencyData}) => {
    const mainTableData: Array<CurrencyTableData> = React.useMemo(
        () => currencyData.map(item => ({
            id: item.id,
            name: item.name,
            price: '$ ' + (Number(item.priceUsd).toFixed(2)).toString(),
            marketCap: '$ ' + ((Number(item.marketCapUsd) / 1000000000).toFixed(2)).toString() + ' B',
            dayChange: (Number(item.changePercent24Hr).toFixed(2)).toString(),
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
        <FlexStyled width={'100%'} direction={'column'} >
            <Title margin={'10px 0'}>Today's Cryptocurrency Prices</Title>
            <Table currencyData={mainTableData} columns={mainColumns}/>
        </FlexStyled>
    )
}