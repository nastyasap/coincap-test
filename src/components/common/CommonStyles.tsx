import styled, {createGlobalStyle} from 'styled-components';
import React from 'react';
import {Link} from 'react-router-dom';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Consolas;
  }
`

type FlexStyledProps = {
    direction?: string
    justify?: string
    align?: string
}
export const FlexStyled = styled.div<FlexStyledProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  margin: 10px 10px;
`

export const SpanStyled = styled.span`
  margin-right: 8px;
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  margin: 0 4px;
`

export const ButtonStyled = styled.button`
  padding: 2px 6px;
  border-radius: 6px;
  border: 1px solid #282c34;
  color: #282c34;
  background-color: #e6a7e7;
  cursor: pointer;
`


