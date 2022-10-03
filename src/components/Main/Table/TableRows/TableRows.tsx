import React from 'react';
import {useModals} from '../../../Modals/ModalsProvider';
import {ButtonStyled, LinkStyled} from '../../../common/CommonStyles';
import {Columns} from '../../Main';
import {Data, MainAccessor} from '../Table';

type Props = {
    data: Array<Data>
    columns: Columns<MainAccessor>[]
}

export const TableRows: React.FC<Props> = ({data, columns}) => {
    const {setAddCurrencyId} = useModals()
    const rows = data.map((row, index) =>
        <tr key={`row-${index}`}>
            {columns.map(column =>
                <td key={column.accessor}>
                    {column.accessor === 'add' ?
                        <ButtonStyled onClick={() => setAddCurrencyId(row.id)}>{row[column.accessor]}</ButtonStyled> :
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