import React from 'react';
import {ButtonStyled} from '../../common/CommonStyles';

type Props = {
    isOpen: boolean
    onClose: () => void
}

export const AddCurrencyToWallet: React.FC<Props> = ({isOpen, onClose}) => {
    if (!isOpen) return null
    return (
        <div>
            <span>Add Currency</span>
            <ButtonStyled onClick={onClose}>Close</ButtonStyled>
        </div>
    )
}