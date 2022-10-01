import React, {useContext, useState} from 'react';
import ReactDOM from 'react-dom';
import {AddCurrencyToWallet} from './AddCurrencyToWallet/AddCurrencyToWallet';
import {OpenWallet} from './OpenWallet/OpenWallet';

const ModalsContext = React.createContext({
    setIsAddModalOpen: (value: boolean) => {
    }, setIsMyWalletModalOpen: (value: boolean) => {
    }
})
export const useModals = () => useContext(ModalsContext)

type Props = {
    children: React.ReactNode
}

export const ModalsProvider: React.FC<Props> = ({children}) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isMyWalletModalOpen, setIsMyWalletModalOpen] = useState(false)

    return <ModalsContext.Provider value={{setIsAddModalOpen, setIsMyWalletModalOpen}}>
        <>
            {ReactDOM.createPortal(
                <div>
                    <AddCurrencyToWallet isOpen={isAddModalOpen} onClose={() => setIsMyWalletModalOpen(false)}/>
                    <OpenWallet isOpen={isMyWalletModalOpen} onClose={() => setIsMyWalletModalOpen(false)}/>
                </div>
                , document.body
            )}
            {children}
        </>
    </ModalsContext.Provider>
}