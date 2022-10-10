import React, {useState} from 'react';
import {WalletAccessor, WalletData} from '../Table';
import {ButtonStyled, ButtonWrapper, ConfirmButton} from '../../../../common/CommonStyles';
import {Columns} from '../../../../../types/types';
import {useDispatch} from 'react-redux';
import {walletSlice} from '../../../../../store/reducers/wallet';

type Props = {
    data: Array<WalletData>
    columns: Columns<WalletAccessor>[]
}

export const TableRows: React.FC<Props> = ({data, columns}) => {
    const dispatch = useDispatch()
    const [onDelete, setDelete] = useState<string | null>(null)

    const onButtonClick = (id: string) => {
        setDelete(id)
    }

    const onDeleteClick = (id: string, count: number) => {
        dispatch(walletSlice.actions.deleteCurrencyFromWalletRequest({id, count}))
        setDelete(null)
    }
    const rows = data.map((row, index) =>
        <tr key={`row-${index}`}>
            {columns.map(column =>
                <td key={column.accessor}>
                    {column.accessor === 'delete' ?
                        onDelete === row.id ?
                            <div>
                                <p style={{fontSize: '13px'}}>Are you sure?</p>
                                <ButtonWrapper>
                                    <ConfirmButton onClick={() => onDeleteClick(row.id, row.count)}>Yes</ConfirmButton>
                                    <ConfirmButton onClick={() => setDelete(null)}>No</ConfirmButton>
                                </ButtonWrapper>
                            </div>
                            :
                            <ButtonStyled
                                onClick={() => onButtonClick(row.id)}>{
                                row[column.accessor]
                            }</ButtonStyled> :
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