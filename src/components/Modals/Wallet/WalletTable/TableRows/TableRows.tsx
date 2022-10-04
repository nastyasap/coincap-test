import React from 'react';
import {WalletAccessor, WalletData} from '../Table';
import {ButtonStyled} from '../../../../common/CommonStyles';
import {Columns} from '../../../../../types/types';

type Props = {
    data: Array<WalletData>
    columns: Columns<WalletAccessor>[]
}

export const TableRows: React.FC<Props> = ({data, columns}) => {
    const onDeleteClick = (id: string) => {

    }
    const rows = data.map((row, index) =>
        <tr key={`row-${index}`}>
            {columns.map(column =>
                <td key={column.accessor}>
                    {column.accessor === 'delete' ?
                        <ButtonStyled onClick={() => onDeleteClick(row.id)}>{row[column.accessor]}</ButtonStyled> :
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