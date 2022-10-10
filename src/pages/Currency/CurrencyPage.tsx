import {ButtonStyled, FlexStyled, Label, Title} from '../../components/common/CommonStyles';
import React from 'react';
import {CurrencyHistory} from '../../components/Main/CurrencyHistory/CurrencyHistory';
import {CurrencyData, HistoryData} from '../../types/types';
import back from '../../assets/icons/back.svg'
import {CostBlock, CostName, CostPrice, CostValue, CurrencyWrapper} from './CurrencyPageStyled';
import {useModals} from '../../components/Modals/ModalsProvider';
import {useNavigate} from 'react-router-dom';


type Props = {
    data: CurrencyData
    historyData: HistoryData[]
}
export const CurrencyPage: React.FC<Props> = ({data, historyData}) => {
    const {setAddCurrencyId} = useModals()
    const navigate = useNavigate()
    const changePercent = +Number(data.changePercent24Hr).toFixed(2)
    return (
        <CurrencyWrapper>
            <FlexStyled direction={'column'} align={'flex-start'} justify={'flex-start'}>
                <Label onClick={() => navigate(-1)}>
                    <img src={back} style={{width: '30px', marginRight: '4px'}}/>
                    <Title>Back</Title>
                </Label>
                <FlexStyled direction={'column'}>
                    <CostPrice>{data.name} {data.symbol}</CostPrice>
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