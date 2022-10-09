import React from 'react';
import {WalletAccessor, WalletData} from '../Table';
import {ButtonStyled} from '../../../../common/CommonStyles';
import {Columns} from '../../../../../types/types';
import {useDispatch} from 'react-redux';
import {walletSlice} from '../../../../../store/reducers/wallet';

type Props = {
    data: Array<WalletData>
    columns: Columns<WalletAccessor>[]
}

export const TableRows: React.FC<Props> = ({data, columns}) => {
    const dispatch = useDispatch()
    const onDeleteClick = (id: string, count: number) => {
        dispatch(walletSlice.actions.deleteCurrencyFromWalletRequest({id, count}))
    }
    const rows = data.map((row, index) =>
        <tr key={`row-${index}`}>
            {columns.map(column =>
                <td key={column.accessor}>
                    {column.accessor === 'delete' ?
                        <ButtonStyled
                            onClick={() => onDeleteClick(row.id, row.count)}>{row[column.accessor]}</ButtonStyled> :
                        row[column.accessor]}
                </td>
            )}
        </tr>
    )

    return (
        <tbody>
        {rows}
        </tbody>
    )
}