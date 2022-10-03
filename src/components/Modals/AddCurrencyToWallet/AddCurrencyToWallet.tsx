import React, {useState} from 'react';
import {ButtonStyled} from '../../common/CommonStyles';

type Props = {
    onClose: () => void
}

export const AddCurrencyToWallet: React.FC<Props> = ({onClose}) => {
    const [value, setValue] = useState()
    const onSubmit = () => {
        onClose()
    }

    return (
        <div>
            <input value={value}/>
            <ButtonStyled onClick={onSubmit}>Submit</ButtonStyled>
        </div>
    )
}