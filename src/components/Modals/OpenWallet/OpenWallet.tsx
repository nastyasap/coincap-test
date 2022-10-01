import React from 'react';

type Props = {
    isOpen: boolean
    onClose: () => void
}

export const OpenWallet: React.FC<Props> = ({isOpen, onClose}) => {
    if (!isOpen) return null
    return (
        <div>
            <span>My Wallet</span>
            <button onClick={onClose}>Close</button>
        </div>
    )
}