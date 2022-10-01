import React from 'react';
import {Columns, Data} from '../Table';

type Props = {
    data: Data[]
    columns: Columns[]
}

export const TableRows: React.FC<Props> = ({data, columns}) => {
    const rows = data.map((row, index) =>
        <tr key={`row-${index}`}>
            {columns.map(column =>
                <td key={column.accessor}>
                    {row[column.accessor]}
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