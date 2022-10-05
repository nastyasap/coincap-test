import React from 'react';
import {FlexStyled, LinkStyled, SpanStyled} from '../../common/CommonStyles';
import {TopCurrencyWrapper} from './CryptoCostStyles';

export type CryptoCostProps = {
    // icon: string
    name: string
    price: string
    dayChange: string
    id?: string
}

export const CryptoCost: React.FC<CryptoCostProps> = ({name, price, dayChange, id}) => {
    return (
        <LinkStyled to={`/${id}`}>
            <TopCurrencyWrapper>
                {name}
                <FlexStyled justify={'space-between'} align={'flex-start'} width={'90%'}>
                    <SpanStyled>{`$ ${Number(price).toFixed(2)} `}</SpanStyled>
                    <SpanStyled>
                        <p className={(+dayChange) > 0 ? 'green' : 'red'}>{Number(dayChange).toFixed(2)} %</p>
                    </SpanStyled>
                </FlexStyled>
            </TopCurrencyWrapper>
        </LinkStyled>

    )
}