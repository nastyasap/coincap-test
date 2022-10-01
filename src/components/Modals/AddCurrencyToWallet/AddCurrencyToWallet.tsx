import React from 'react';

type Props = {
    isOpen: boolean
    onClose: () => void
}

export const AddCurrencyToWallet: React.FC<Props> = ({isOpen, onClose}) => {
    if (!isOpen) return null
    return (
        <div>
            <span>Add Currency</span>
            <button onClick={onClose}>Close</button>
        </div>
    )
}