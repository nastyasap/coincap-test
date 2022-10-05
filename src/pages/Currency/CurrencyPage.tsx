import {ButtonStyled, FlexStyled, LinkStyled, Title} from '../../components/common/CommonStyles';
import React from 'react';
import {CurrencyHistory} from '../../components/Main/CurrencyHistory/CurrencyHistory';
import {CurrencyData, HistoryData} from '../../types/types';
import arrow from '../../assets/icons/arrow.svg'
import {CostBlock, CostName, CostPrice, CostValue, CurrencyWrapper} from './CurrencyPageStyled';
import {useModals} from '../../components/Modals/ModalsProvider';


type Props = {
    data: CurrencyData
    historyData: HistoryData[]
}
export const CurrencyPage: React.FC<Props> = ({data, historyData}) => {
    const {setAddCurrencyId} = useModals()
    const changePercent = +Number(data.changePercent24Hr).toFixed(2)
    return (
        <CurrencyWrapper>
            <FlexStyled direction={'column'} align={'flex-start'} justify={'flex-start'}>
                <FlexStyled>
                    <LinkStyled to={'/'}><Title>All Prices</Title></LinkStyled>
                    <img src={arrow} style={{width: '15px'}}/>
                    <LinkStyled to={`/${data.id}`}> <Title>{data.name}</Title></LinkStyled>
                </FlexStyled>
                <FlexStyled direction={'column'}>
                    <CostPrice>{data.symbol}</CostPrice>
                    <CostPrice>
                        {(Number(data.priceUsd).toFixed(2)).toString()} USD
                        <p className={changePercent > 0 ? 'green' : 'red'}>{changePercent > 0 ? '+' : ''}{changePercent + '% '} </p>
                        <p>(24H)</p>
                    </CostPrice>
                </FlexStyled>
                <ButtonStyled onClick={() => setAddCurrencyId(data.id)}>Add to Wallet</ButtonStyled>
                <FlexStyled direction={'column'}>
                    <CostBlock>
                        <CostName>Market Cup (USD)</CostName>
                        <CostValue>{'$ ' + (Number(data.marketCapUsd) / 1000000000).toFixed(2) + ' B'}</CostValue>
                    </CostBlock>
                    <CostBlock>
                        <CostName>24H Volume (USD)</CostName>
                        <CostValue>{'$ ' + (Number(data.volumeUsd24Hr) / 1000000000).toFixed(2) + ' B'}</CostValue>
                    </CostBlock>
                    <CostBlock>
                        <CostName>Max Supply </CostName>
                        <CostValue>{(Number(data.maxSupply) / 1000000).toFixed(2) + ' M'}</CostValue>
                    </CostBlock>
                </FlexStyled>
            </FlexStyled>
            <CurrencyHistory name={data.name} historyData={historyData}/>
        </CurrencyWrapper>
    )
}