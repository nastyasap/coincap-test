import {Main} from './Main';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrenciesTableData} from '../../store/selectors/currenciesTable';
import {currenciesTableSlice} from '../../store/reducers/currenciesTable';

export const MainContainer = () => {
    const data = useSelector(getCurrenciesTableData)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(currenciesTableSlice.actions.loadTableRequest(1))
    }, [dispatch])
    return (
        <Main currencyData={data}/>
    )
}