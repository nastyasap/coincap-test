import React from 'react';
import {Columns, Data} from '../Table';
import {useModals} from '../../../Modals/ModalsProvider';
import {ButtonStyled, LinkStyled} from '../../../common/CommonStyles';

type Props = {
    data: Data[]
    columns: Columns[]
}

export const TableRows: React.FC<Props> = ({data, columns}) => {
    const {setIsAddModalOpen} = useModals()
    const rows = data.map((row, index) =>
        <tr key={`row-${index}`}>
            {columns.map(column =>
                <td key={column.accessor}>
                    {column.accessor === 'add' ?
                        <ButtonStyled onClick={() => setIsAddModalOpen(true)}>{row[column.accessor]}</ButtonStyled> :
                        <LinkStyled to={`/${row.id}/1d`}>{row[column.accessor]}</LinkStyled>}
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