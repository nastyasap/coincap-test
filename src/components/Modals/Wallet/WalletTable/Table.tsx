import React from 'react'
import {TableHeader} from './TableHeader/TableHeader';
import {TableRows} from './TableRows/TableRows';
import {Columns} from '../../../Main/Main';
import {TableStyled} from '../../../Main/Table/TableStyled';

export type WalletAccessor = 'name' | 'count' | 'currentPrice' | 'delete'
export type WalletData = {
    id: string
    name: string
    count: number
    currentPrice: number
    delete: string
}

type Props = {
    currencyData: Array<WalletData>
    columns: Columns<WalletAccessor>[]
}

export const WalletTable: React.FC<Props> = ({currencyData, columns}) => {
    return (
        <TableStyled>
            <TableHeader columns={columns}/>
            <TableRows columns={columns} data={currencyData}/>
        </TableStyled>
    )
}