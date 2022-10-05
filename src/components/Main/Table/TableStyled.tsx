import styled from 'styled-components';

export const TableStyled = styled.table`
  width: 90%;
  border: none;
  margin: 20px 0;
  border-spacing: 0;

  thead {
    th {
      font-weight: bold;
      text-align: center;
      border: none;
      padding: 10px 15px;
      background: rgba(230, 167, 231, 0.46);
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
      vertical-align: center;
    }

    tr:nth-child(even) {
      background: rgba(230, 167, 231, 0.2);
    }

    tr td:first-child {
      border-radius: 8px 0 0 8px;
    }

    tr td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
  
  .red {
    color: #e70d0d;
    font-weight: 600;
  }

  .green {
    color: green;
    font-weight: 600;
  }
`
