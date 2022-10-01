import React from 'react'
import {useTable} from 'react-table'
import {CurrencyData} from '../Main';

type Accessor = 'name' | 'price' | 'marketCap' | 'dayChange' | 'dayVolume' | 'add'
type Columns = {
    Header: string
    accessor: Accessor
}

type Data = {
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
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Price',
                accessor: 'price',
            },
            {
                Header: 'Market Cap',
                accessor: 'marketCap',
            },
            {
                Header: '24h Change',
                accessor: 'dayChange',
            },
            {
                Header: '24H Volume',
                accessor: 'dayVolume',
            },
            {
                Header: 'Add to wallet',
                accessor: 'add',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data})

    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()} >
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell =>
                            <td {...cell.getCellProps()}>
                                {cell.render('Cell')}
                            </td>
                        )}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}