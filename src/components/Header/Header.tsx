import React from 'react';
import {CryptoCost, CryptoCostProps} from './CryptoCost/CryptoCost';
import {Wallet} from './Wallet/Wallet';

type Props = {
    topCurrency: CryptoCostProps[]
}

export const Header: React.FC<Props> = ({topCurrency}) => {
    return (
        <>
            <div>
                {topCurrency.map(crypto =>
                    <CryptoCost key={crypto.name} name={crypto.name} price={crypto.price} prevPrice={crypto.prevPrice}/>
                )}
            </div>
            <Wallet/>
        </>

    )
}