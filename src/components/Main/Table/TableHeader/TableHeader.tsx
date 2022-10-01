import React from 'react';
import {Columns} from '../Table';

type Props = {
    columns: Columns[]
}

export const TableHeader: React.FC<Props> = ({columns}) => {
    const headers = columns.map(header =>
        <th key={header.accessor}>
            {header.header}
        </th>)
    return (
        <thead>
        <tr>
            {headers}
        </tr>
        </thead>
    )
}