import React from 'react';
import {useModals} from '../../Modals/ModalsProvider';
import {ButtonStyled, FlexStyled, LinkStyled, SpanStyled} from '../../common/CommonStyles';

export type CryptoCostProps = {
    // icon: string
    name: string
    price: number
    dayChange: number
}

export const CryptoCost: React.FC<CryptoCostProps> = ({name, price, dayChange}) => {
    const {setIsMyWalletModalOpen} = useModals()
    const diff = Number(((price * dayChange / 100)).toFixed(2))
    return (
        <FlexStyled>
            <SpanStyled>{name === 'wallet' ?
                <ButtonStyled onClick={() => setIsMyWalletModalOpen(true)}>{name}</ButtonStyled> :
                <LinkStyled to={''}>{name}</LinkStyled>} </SpanStyled>
            <FlexStyled justify={'flex-start'} align={'flex-start'}>
                <SpanStyled>{price} USD</SpanStyled>
                <SpanStyled>{diff >= 0 ? '+' : '-'} {Math.abs(diff)} ({dayChange} %)</SpanStyled>
            </FlexStyled>
        </FlexStyled>
    )
}