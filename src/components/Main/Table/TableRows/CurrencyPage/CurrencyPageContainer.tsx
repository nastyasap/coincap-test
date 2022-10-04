import {CurrencyPage} from './CurrencyPage';
import {useParams} from 'react-router-dom';

export const CurrencyPageContainer = () => {
    const {id, interval} = useParams()
    const data = {
        id: "bitcoin",
        rank: "1",
        symbol: "BTC",
        name: "Bitcoin",
        supply: "17193925.0000000000000000",
        maxSupply: "21000000.0000000000000000",
        marketCapUsd: "119150835874.4699281625807300",
        volumeUsd24Hr: "2927959461.1750323310959460",
        priceUsd: "6929.8217756835584756",
        changePercent24Hr: "-0.8101417214350335",
        vwap24Hr: "7175.0663247679233209",
        explorer: null
    }
    const historyData = [
        {
            priceUsd: "6379.3997635993342453",
            time: 1530403200000
        },
        {
            priceUsd: "6466.3135622762295280",
            time: 1530489600000
        },
        {
            priceUsd: "6601.0724971279524219",
            time: 1530576000000
        },
        {
            priceUsd: "6581.0092630267574887",
            time: 1530662400000
        },
        {
            priceUsd: "6629.1362927171773870",
            time: 1530748800000
        },
        {
            priceUsd: "6549.1112450806328349",
            time: 1530835200000
        },
        {
            priceUsd: "6655.9108972488685303",
            time: 1530921600000
        },
        {
            priceUsd: "6818.2081672225807333",
            time: 1531008000000
        },
        {
            priceUsd: "6741.7764822044089258",
            time: 1531094400000
        },
        {
            priceUsd: "6525.5093638185088059",
            time: 1531180800000
        },
        {
            priceUsd: "6585.4814995139912926",
            time: 1531267200000
        },
        {
            priceUsd: "6489.0484273708415619",
            time: 1531353600000
        },
        {
            priceUsd: "6291.0146998844553630",
            time: 1531440000000
        },
        {
            priceUsd: "6252.1208882488125434",
            time: 1531526400000
        },
        {
            priceUsd: "6340.1868649492544957",
            time: 1531612800000
        },
        {
            priceUsd: "6530.5736788831891429",
            time: 1531699200000
        },]
    return <CurrencyPage data={data} id={id as string} historyData={historyData} interval={interval as string}/>
}