import {Header} from './Header';

export const HeaderContainer = () => {
    const data = [
        {name: 'bitcoin', price: 6929, prevPrice: 6926},
        {name: 'ethereum', price: 405, prevPrice: 401},
        {name: 'ripple', price: 688, prevPrice: 687.5}
    ]
    return (
        <Header topCurrencies={data}/>
    )
}