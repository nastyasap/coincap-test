import React from 'react'
import {TableHeader} from './TableHeader/TableHeader';
import {TableRows} from './TableRows/TableRows';
import {TableStyled} from '../../../Main/Table/TableStyled';
import {Columns} from '../../../../types/types';
import {FlexStyled} from '../../../common/CommonStyles';

export type WalletAccessor = 'name' | 'count' | 'currentPrice' | 'totalPrice' | 'delete'
export type WalletData = {
    id: string
    name: string
    count: number
    totalPrice: string
    currentPrice: string
    delete: string
}

type Props = {
    currencyData: Array<WalletData>
    columns: Columns<WalletAccessor>[]
}

export const WalletTable: React.FC<Props> = ({currencyData, columns}) => {
    return (
        <>
            <TableStyled>
                <TableHeader columns={columns}/>
                <TableRows columns={columns} data={currencyData}/>
            </TableStyled>
            {!currencyData.length && <FlexStyled>Your wallet is empty</FlexStyled>}
        </>

    )
}