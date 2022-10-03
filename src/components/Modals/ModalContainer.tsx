import React from 'react';
import {Backdrop, Content, Header, HeaderText, StyledModal, Wrapper} from './ModalStyled';
import {ButtonStyled} from '../common/CommonStyles';

type Props = {
    isOpen: boolean
    onClose: () => void
    header: string
    children: React.ReactNode
}

export const ModalContainer: React.FC<Props> = ({isOpen, onClose, header, children}) => {
    if (!isOpen) return null
    return (
        <>
            <Backdrop>
                <Wrapper>
                    <StyledModal>
                        <Header>
                            <HeaderText>{header}</HeaderText>
                            <ButtonStyled onClick={onClose}>Close</ButtonStyled>
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