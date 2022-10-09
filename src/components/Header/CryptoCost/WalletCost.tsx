import React from 'react';
import {useModals} from '../../Modals/ModalsProvider';
import {ButtonStyled, FlexStyled, SpanStyled} from '../../common/CommonStyles';

type Props = {
    name: string
    price: number
    diff: number
    diffPercent: number
}

export const WalletCost: React.FC<Props> = ({name, price, diff, diffPercent}) => {
    const {setIsMyWalletModalOpen} = useModals()
    return (
        <FlexStyled>
            <ButtonStyled className={'wallet'} onClick={() => setIsMyWalletModalOpen(true)}>
                {name}
                <FlexStyled justify={'space-between'} width={'240px'} className={'wallet'}>
                    <SpanStyled>{price.toFixed(2)} USD </SpanStyled>
                    <SpanStyled>
                    {`${diff >= 0 ? '+' : '-'} ${Math.abs(+diff.toFixed(2))} `}
                        (
                        <p className={diffPercent > 0 ? 'green' : 'red'}>{diffPercent.toFixed(2)} %</p>
                        )
                    </SpanStyled>
                </FlexStyled>
            </ButtonStyled>
        </FlexStyled>
    )
}