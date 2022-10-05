import styled, {createGlobalStyle} from 'styled-components';
import {Link} from 'react-router-dom';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Consolas, serif;
  }
`

type FlexStyledProps = {
    direction?: string
    justify?: string
    align?: string
    width?: string
}
export const FlexStyled = styled.div<FlexStyledProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  margin: 10px 10px;
  color: #282c34;
  font-weight: 300;
  width: ${props => props.width || 'content-box'};
  transition: all 0.3s;

  .topCurrencyCost {
    @media screen and (max-width: 1280px) {
      flex-direction: column;
    }
    @media screen and (max-width: 1070px) {
      flex-direction: row;
      margin: 0 20px;
    }
  }

  .topCurrencyCostContainer {
    @media screen and (max-width: 1070px) {
      flex-direction: column;
      align-items: flex-start;

    }
  }

  .red {
    color: #e70d0d;
  }

  .green {
    color: green;
  }

`

export const SpanStyled = styled.span`
  display: flex;
  //margin: 0;
  //padding: 0;
  //margin-right: 6px;
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  margin: 0 4px;
  transition: all 0.3s;
  color: #282c34;

  &:hover {
    color: #7d1381;
  }

  &:active {

  }
`

export const ButtonStyled = styled.button`
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid #e6a7e7;
  color: #4b4949;
  background-color: rgba(230, 167, 231, 0.62);
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  box-sizing: border-box;
  transition: all 0.3s;


  &:not([disabled]):hover {
    border: 1px solid #e6a7e7;
    color: #ffffff;
  }
`

export const Title = styled.h3`
  margin-left: 30px;
`


