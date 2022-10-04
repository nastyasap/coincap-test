import {FlexStyled} from '../../components/common/CommonStyles';
import React from 'react';
import {CurrencyHistory} from '../../components/Main/CurrencyHistory/CurrencyHistory';
import {CurrencyData, HistoryData} from '../../types/types';


type Props = {
    data: CurrencyData
    historyData: HistoryData[]
}
export const CurrencyPage: React.FC<Props> = ({data, historyData}) => {
    return (
        <FlexStyled direction={'column'}>
            <h3>{data.name}</h3>
            <FlexStyled>
                <span>{'$ ' + (Number(data.priceUsd).toFixed(2)).toString()}</span>
                <span>{'$ ' + ((Number(data.marketCapUsd) / 1000000000).toFixed(2)).toString() + ' B'}</span>
                <span>{(Number(data.changePercent24Hr).toFixed(2)).toString() + ' %'}</span>
                <span>{'$ ' + ((Number(data.volumeUsd24Hr) / 1000000000).toFixed(2)).toString() + ' B'}</span>
            </FlexStyled>
            <CurrencyHistory historyData={historyData}/>
        </FlexStyled>
    )
}