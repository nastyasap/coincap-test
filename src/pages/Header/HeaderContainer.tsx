import {Header} from './Header';
import {useDispatch, useSelector} from 'react-redux';
import {getTopCurrencies} from '../../store/selectors/topCurrencies';
import {useEffect} from 'react';
import {topCurrenciesSlice} from '../../store/reducers/topCurrencies';

export const HeaderContainer = () => {
    const data = useSelector(getTopCurrencies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(topCurrenciesSlice.actions.loadTopCurrenciesRequest())
    }, [dispatch])

    return (
        <Header topCurrencies={data}/>
    )
}