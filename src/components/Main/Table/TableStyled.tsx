import styled from 'styled-components';

export const TableStyled = styled.table`
  width: 90%;
  border: none;
  margin-bottom: 20px;
  border-spacing: 0;

  thead {
    th {
      font-weight: bold;
      text-align: center;
      border: none;
      padding: 10px 15px;
      background: #d8d8d8;
      font-size: 14px;
    }

    tr th:first-child {
      border-radius: 8px 0 0 8px;
    }

    tr th:first-child {
      border-radius: 8px 0 0 8px;
    }

    tr th:last-child {
      border-radius: 0 8px 8px 0;
    }
  }

  tbody {
    td {
      text-align: center;
      border: none;
      padding: 10px 15px;
      font-size: 14px;
      vertical-align: top;
    }

    tr:nth-child(even) {
      background: #f3f3f3;
    }

    tr td:first-child {
      border-radius: 8px 0 0 8px;
    }

    tr td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`
