import React from 'react';
import {Backdrop, ButtonSubmit, Content, Header, HeaderText, StyledModal, Wrapper} from './ModalStyled';

type Props = {
    isOpen: boolean
    onClose: () => void
    header: string
    className?: string
    children: React.ReactNode
    width?: string
}

export const ModalContainer: React.FC<Props> = ({width, className, isOpen, onClose, header, children}) => {

    if (!isOpen) return null
    return (
        <>
            <Backdrop onClick={onClose}>
                <Wrapper onClick={(e) => e.stopPropagation()}>
                    <StyledModal width={width} className={className}>
                        <Header>
                            <HeaderText>{header}</HeaderText>
                            <ButtonSubmit onClick={onClose}>x</ButtonSubmit>
                        </Header>
                        <Content>
                            {children}
                        </Content>
                    </StyledModal>
                </Wrapper>
            </Backdrop>
        </>
    )
}