import React from 'react';
import {MainAccessor} from '../Table';
import {Columns} from '../../../../types/types';

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