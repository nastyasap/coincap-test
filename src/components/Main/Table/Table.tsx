import React from 'react'
import {TableHeader} from './TableHeader/TableHeader';
import {TableRows} from './TableRows/TableRows';
import {TableStyled} from './TableStyled';
import {Columns} from '../Main';

export type MainAccessor = 'name' | 'price' | 'marketCap' | 'dayChange' | 'dayVolume' | 'add'
export type Data = {
    id: string
    name: string
    price: string
    marketCap: string
    dayChange: string
    dayVolume: string
    add: string
}
type Props = {
    currencyData: Array<Data>
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