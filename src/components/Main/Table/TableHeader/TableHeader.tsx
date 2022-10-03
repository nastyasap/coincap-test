import React from 'react';
import {Columns} from '../../Main';
import {MainAccessor} from '../Table';

type Props = {
    columns: Columns<MainAccessor>[]
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