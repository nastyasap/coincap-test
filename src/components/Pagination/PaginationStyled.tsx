import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .pageCard {
    height: 36px;
    padding: 0 15px;
    background: transparent;
    border: 1px solid #e0c0e1;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 0 6px;
    color: #e0c0e1;
    cursor: pointer;

    &:not([disabled]):hover {
      border: 1px solid #e6a7e7;
      color: #e6a7e7;
    }
  }

  .pageCard.active {
    background: #e6a7e7;
    border: 1px solid #e6a7e7;
    color: #4b4949;
  }
`;

