import {WalletCost} from '../CryptoCost/WalletCost';
import {useSelector} from 'react-redux';
import {
    getWalletCurrenciesData,
    getWalletTotalBuyPrice,
    getWalletTotalSellPrice
} from '../../../store/selectors/wallet';

export const Wallet = () => {
    const totalWalletBuyPrice = useSelector(getWalletTotalBuyPrice)
    const totalWalletSellPrice = useSelector(getWalletTotalSellPrice)
    const walletCurrenciesData = useSelector(getWalletCurrenciesData)

    const walletPrice = walletCurrenciesData.reduce((acc, currency) => acc += currency.count * currency.currentPrice, 0)
    const diff = walletPrice - (totalWalletBuyPrice - totalWalletSellPrice) || 0
    const diffPercent = diff / walletPrice * 100 || 0

    return (
        <WalletCost name={'Wallet'} price={walletPrice} diff={diff} diffPercent={diffPercent}/>
    )
}