import {Main} from './Main';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrenciesTableData, getCurrentPage} from '../../store/selectors/currenciesTable';
import {currenciesTableSlice} from '../../store/reducers/currenciesTable';
import {Pagination} from '../../components/Pagination/Pagination';
import {FlexStyled} from '../../components/common/CommonStyles';

export const MainContainer = () => {
    const data = useSelector(getCurrenciesTableData)
    const currentPage = useSelector(getCurrentPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(currenciesTableSlice.actions.loadTableRequest(currentPage))
    }, [dispatch, currentPage])

    const setCurrentPage = (value: number) => {
        dispatch(currenciesTableSlice.actions.loadTableRequest(value))
    }

    return (
        <FlexStyled direction={'column'} width={'100%'}>
            <Main currencyData={data}/>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </FlexStyled>
    )
}