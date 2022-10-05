import React from 'react';
import {CryptoCost} from '../../components/Header/CryptoCost/CryptoCost';
import {Wallet} from '../../components/Header/Wallet/Wallet';
import {FlexStyled, Title} from '../../components/common/CommonStyles';
import {CurrencyData} from '../../types/types';

type Props = {
    topCurrencies: CurrencyData[]
}
export const Header: React.FC<Props> = ({topCurrencies}) => {
    return (
        <FlexStyled direction={'column'} align={'flex-start'}>
            <Title margin={'0 30px'}>Top Cryptocurrencies</Title>
            <FlexStyled justify={'space-between'} width={'100%'}>
                <FlexStyled justify={'space-around'} className={'topCurrencyCostContainer'}>
                    {topCurrencies.map(crypto =>
                        <CryptoCost key={crypto.id} id={crypto.id} name={crypto.name} price={crypto.priceUsd}
                                    dayChange={crypto.changePercent24Hr}/>
                    )}
                </FlexStyled>
                <Wallet/>
            </FlexStyled>
        </FlexStyled>

    )
}