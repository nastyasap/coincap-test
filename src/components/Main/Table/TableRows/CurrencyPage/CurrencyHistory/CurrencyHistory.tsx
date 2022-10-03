import React from 'react';
import {HistoryData} from '../CurrencyPage';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import {FlexStyled, LinkStyled} from '../../../../../common/CommonStyles';


type Props = {
    id: string
    interval: string
    historyData: HistoryData[]
}

export const CurrencyHistory: React.FC<Props> = ({historyData, interval, id}) => {
    const data = historyData.map(item => ({
        priceUsd: (Number(item.priceUsd).toFixed(2)).toString(),
        time: new Date(item.time).toLocaleString('en', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }))

    const intervals = ['1H', '6H', '1D', '1M', '5M', '30M']

    return (
        <FlexStyled direction={'column'}>
            <FlexStyled>
                {intervals.map((item) => <LinkStyled key={item} to={`/${id}/${item}`}>{item}</LinkStyled>)}
            </FlexStyled>
            <LineChart width={600} height={300} data={data} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                <Line type="monotone" dataKey="priceUsd" stroke="#8884d8"/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                <XAxis dataKey="time"/>
                <YAxis/>
                <Tooltip/>
            </LineChart>
        </FlexStyled>

    )
}

