import React from 'react';
import {Table} from './Table/Table';
import {FlexStyled} from '../common/CommonStyles';

type Props = {
    currencyData: CurrencyData[]
}

export type CurrencyData = {
    id: string
    rank: string
    symbol: string
    name: string
    supply: string
    maxSupply: string | null
    marketCapUsd: string
    volumeUsd24Hr: string
    priceUsd: string
    changePercent24Hr: string
    vwap24Hr: string
}

export const Main: React.FC<Props> = ({currencyData}) => {
    return (
        <FlexStyled>
            <Table currencyData={currencyData}/>
        </FlexStyled>
    )
}