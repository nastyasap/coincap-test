import React from 'react';
import {useModals} from '../../Modals/ModalsProvider';

export type CryptoCostProps = {
    // icon: string
    name: string
    price: number
    dayChange: number
}

export const CryptoCost: React.FC<CryptoCostProps> = ({name, price, dayChange}) => {
    const {setIsMyWalletModalOpen} = useModals()
    const diff = Number(((price*dayChange/100)).toFixed(2))
    return (
        <div>
            <span>{name === 'wallet' ? <button onClick={() => setIsMyWalletModalOpen(true)}>{name}</button> : <a href={''}>{name}</a>} </span>
            <span>{price} USD</span>
            <span> {diff >= 0 ? '+' : '-'} {Math.abs(diff)} ({dayChange} %)</span>
        </div>
    )
}