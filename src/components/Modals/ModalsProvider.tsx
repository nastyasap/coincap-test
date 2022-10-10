import React, {useContext, useState} from 'react';
import ReactDOM from 'react-dom';
import OpenWallet from './Wallet';
import AddCurrencyToWallet from './AddCurrencyToWallet';
import {ModalContainer} from './ModalContainer';

const ModalsContext = React.createContext({
    setAddCurrencyId: (value: null | string) => {
    },
    setIsMyWalletModalOpen: (value: boolean) => {
    }
})
export const useModals = () => useContext(ModalsContext)

type Props = {
    children: React.ReactNode
}

export const ModalsProvider: React.FC<Props> = ({children}) => {
    const [addCurrencyId, setAddCurrencyId] = useState<null | string>(null)
    const [isMyWalletModalOpen, setIsMyWalletModalOpen] = useState(false)

    return <ModalsContext.Provider value={{setAddCurrencyId, setIsMyWalletModalOpen}}>
        <>
            {ReactDOM.createPortal(
                <>
                    <ModalContainer width={'350px'} isOpen={addCurrencyId !== null} onClose={() => setAddCurrencyId(null)}
                                    header={'Add Currency'}>
                        <AddCurrencyToWallet id={addCurrencyId} onClose={() => setAddCurrencyId(null)}/>
                    </ModalContainer>
                    <ModalContainer width={'520px'} className={'wallet'} isOpen={isMyWalletModalOpen} onClose={() => setIsMyWalletModalOpen(false)}
                                    header={'My Wallet'}>
                        <OpenWallet/>
                    </ModalContainer>
                </>
                , document.body
            )}
            {children}
        </>
    </ModalsContext.Provider>
}