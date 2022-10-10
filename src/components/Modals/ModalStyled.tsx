import styled from 'styled-components';
import {ButtonStyled, FlexStyled} from '../common/CommonStyles';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const StyledModal = styled.div<{ width?: string }>`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 8px;
  width: ${props => props.width || '40%'};
  transition: all 0.3s;

  @media screen and (max-width: 600px) {
    width: 60%;
  }
`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;

export const HeaderText = styled.div`
  align-self: center;
  color: #696767;
  margin-left: 10px;
`;

export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Input = styled.input`
  border: 1px solid #e6a7e7;
  padding: 4px 2px;
  border-radius: 4px;
  margin-right: 15px;

  @media screen and (max-width: 480px) {
    width: 100px;
  }
`

export const ButtonSubmit = styled(ButtonStyled)`
  @media screen and (max-width: 480px) {
    padding: 2px 4px;
  }
`

export const FormWrapper = styled(FlexStyled)`
  justify-content: space-between;
  height: 70px;
  @media screen and (max-width: 710px) {
    flex-direction: column;
    align-items: flex-start;
  }
`