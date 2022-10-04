import React from 'react'
import {TableHeader} from './TableHeader/TableHeader';
import {TableRows} from './TableRows/TableRows';
import {TableStyled} from './TableStyled';
import {Columns, CurrencyTableData} from '../../../types/types';

export type MainAccessor = 'name' | 'price' | 'marketCap' | 'dayChange' | 'dayVolume' | 'add'

type Props = {
    currencyData: Array<CurrencyTableData>
    columns: Columns<MainAccessor>[]
}
export const Table: React.FC<Props> = ({currencyData, columns}) => {
    return (
        <TableStyled>
            <TableHeader columns={columns}/>
            <TableRows columns={columns} data={currencyData}/>
        </TableStyled>
    )
}