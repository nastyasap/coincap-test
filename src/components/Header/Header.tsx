import React from 'react';
import {CryptoCost, CryptoCostProps} from './CryptoCost/CryptoCost';
import {Wallet} from './Wallet/Wallet';
import {FlexStyled} from '../common/CommonStyles';

type Props = {
    topCurrencies: CryptoCostProps[]
}

export const Header: React.FC<Props> = ({topCurrencies}) => {
    return (
        <FlexStyled justify={'space-between'}>
            <FlexStyled justify={'space-around'}>
                {topCurrencies.map(crypto =>
                    <CryptoCost key={crypto.name} name={crypto.name} price={crypto.price} dayChange={crypto.dayChange}/>
                )}
            </FlexStyled>
            <Wallet/>
        </FlexStyled>

    )
}