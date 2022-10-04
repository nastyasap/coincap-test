import {Header} from './Header';

export const HeaderContainer = () => {
    const data = [
        {name: 'bitcoin', price: 6929, dayChange: -0.81},
        {name: 'ethereum', price: 405, dayChange: -0.5},
        {name: 'ripple', price: 688, dayChange: -0.6}
    ]
    return (
        <Header topCurrencies={data}/>
    )
}