import styled from 'styled-components';

export const CurrencyWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 0 6px;
  transition: all 0.3s;
  @media screen and (max-width: 970px) {
    flex-direction: column;
    align-items: center;
  }
`

export const CostBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-bottom: 20px;
  font-size: 18px;
`

export const CostName = styled.span`
  color: darkgray;
  font-weight: bold;
  margin-bottom: 8px;
`

export const CostValue = styled.span`
  font-size: 20px;
`

export const CostPrice = styled.span`
  width: 300px;
  display: flex;
  flex-direction: row;
  font-size: 24px;
  font-weight: bold;
  align-items: center;

  p {
    font-size: 20px;
    margin-left: 4px;
  }

  .red {
    color: #e70d0d;
  }

  .green {
    color: green;
  }
`