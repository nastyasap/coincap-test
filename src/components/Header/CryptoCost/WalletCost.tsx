import React from 'react';
import {useModals} from '../../Modals/ModalsProvider';
import {ButtonStyled, FlexStyled, SpanStyled} from '../../common/CommonStyles';

type Props = {
    name: string
    price: string
    dayChange: string
}

export const WalletCost: React.FC<Props> = ({name, price, dayChange}) => {
    const {setIsMyWalletModalOpen} = useModals()
    const diff = Number(((+price * +dayChange / 100)).toFixed(2))
    return (
        <FlexStyled>
            <ButtonStyled onClick={() => setIsMyWalletModalOpen(true)}>
                {name}
                <FlexStyled justify={'space-between'} width={'220px'}>
                    <SpanStyled>{`${Number(price).toFixed(2)} USD ${diff >= 0 ? '+' : '-'} ${Math.abs(diff)} `}</SpanStyled>
                    <SpanStyled>
                        (
                        <p className={(+dayChange) > 0 ? 'green' : 'red'}>{Number(dayChange).toFixed(2)} %</p>
                        )
                    </SpanStyled>
                </FlexStyled>
            </ButtonStyled>
        </FlexStyled>
    )
}