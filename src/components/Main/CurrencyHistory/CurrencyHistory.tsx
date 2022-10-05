import React from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import {ButtonStyled, FlexStyled} from '../../common/CommonStyles';
import {useDispatch} from 'react-redux';
import {currencySlice} from '../../../store/reducers/currency';
import {HistoryData} from '../../../types/types';


type Props = {
    historyData: HistoryData[]
    name: string
}

export const CurrencyHistory: React.FC<Props> = ({historyData, name}) => {
    const dispatch = useDispatch()
    const data = historyData.map(item => ({
        priceUsd: (Number(item.priceUsd).toFixed(2)).toString(),
        time: new Date(item.time).toLocaleString('en', {
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        })
    }))

    const onIntervalChange = (interval: string, start: number) => {
        dispatch(currencySlice.actions.historyDataRequest({interval, start}))
    }

    const createStart = (hour: number) => {
        const currentTime = Number(new Date().getTime())
        return currentTime - hour * 60 * 60 * 1000
    }

    const periods = [
        {name: '1H', interval: 'm1', start: createStart(1)},
        {name: '24H', interval: 'm30', start: createStart(24)},
        {name: '7D', interval: 'h1', start: createStart(7 * 24)},
        {name: '1M', interval: 'h6', start: createStart(30 * 24)},
        {name: '6M', interval: 'h12', start: createStart(6 * 30 * 24)},
        {name: '1Y', interval: 'd1', start: createStart(365 * 24)},
    ]

    return (
        <FlexStyled direction={'column'}>
            <FlexStyled justify={'space-between'} width={'100%'}>
                <span>{name} Price Chart (USD)</span>
                <FlexStyled width={'100%'} justify={'space-between'}>
                    {periods.map((item) => <ButtonStyled onClick={() => onIntervalChange(item.interval, item.start)}
                                                         key={item.name}>{item.name}</ButtonStyled>)}
                </FlexStyled>
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

