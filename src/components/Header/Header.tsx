import React from 'react';
import {CryptoCost, CryptoCostProps} from './CryptoCost/CryptoCost';
import {Wallet} from './Wallet/Wallet';

type Props = {
    topCurrencies: CryptoCostProps[]
}

export const Header: React.FC<Props> = ({topCurrencies}) => {
    return (
        <>
            <div>
                {topCurrencies.map(crypto =>
                    <CryptoCost key={crypto.name} name={crypto.name} price={crypto.price} prevPrice={crypto.prevPrice}/>
                )}
            </div>
            <Wallet/>
        </>

    )
}