import React from 'react';

export type CryptoCostProps = {
    // icon: string
    name: string
    price: number
    prevPrice: number
}

export const CryptoCost: React.FC<CryptoCostProps> = ({name, price, prevPrice}) => {
    const diff = Number((price - prevPrice).toFixed(2))
    const diffPercent = (diff / price * 100).toFixed(2)
    return (
        <div>
            <span>{name} </span>
            <span>{price} USD</span>
            <span> {diff >= 0 ? '+' : '-'} {Math.abs(diff)} ({diffPercent} %)</span>
        </div>
    )
}