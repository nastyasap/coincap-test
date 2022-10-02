import React from 'react';
import {Columns, Data} from '../Table';
import {useModals} from '../../../Modals/ModalsProvider';

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
                        <button onClick={() => setIsAddModalOpen(true)}>{row[column.accessor]}</button> :
                        <a href={''}>{row[column.accessor]}</a>}
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