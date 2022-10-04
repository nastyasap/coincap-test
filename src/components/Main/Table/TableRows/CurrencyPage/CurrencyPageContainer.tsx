import {CurrencyPage} from './CurrencyPage';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrencyData, getCurrencyHistoryData} from '../../../../../store/selectors/currency';
import {useEffect} from 'react';
import {currencySlice} from '../../../../../store/reducers/currency';

export const CurrencyPageContainer = () => {
    const {id} = useParams()
    const data = useSelector(getCurrencyData)
    const historyData = useSelector(getCurrencyHistoryData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(currencySlice.actions.loadCurrencyRequest(id as string))
    }, [dispatch,id])

    return <CurrencyPage data={data} historyData={historyData}/>
}