import React from 'react';
import {CryptoCost, CryptoCostProps} from '../../components/Header/CryptoCost/CryptoCost';
import {Wallet} from '../../components/Header/Wallet/Wallet';
import {FlexStyled} from '../../components/common/CommonStyles';

type Props = {
    topCurrencies: CryptoCostProps[]
}

export const Header: React.FC<Props> = ({topCurrencies}) => {
    return (
        <FlexStyled justify={'space-between'} width={'100%'}>
            <FlexStyled justify={'space-around'} className={'topCurrencyCostContainer'}>
                {topCurrencies.map(crypto =>
                    <CryptoCost key={crypto.name} name={crypto.name} price={crypto.price} dayChange={crypto.dayChange}/>
                )}
            </FlexStyled>
            <Wallet/>
        </FlexStyled>

    )
}