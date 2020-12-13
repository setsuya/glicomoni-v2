import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
`;

export const Table = styled.table`
  border: 2px solid black;
  display: table;
  border-collapse: collapse;
  color: #000;
`;

export const Header = styled.thead`
  background-color: #333;
  color: #fff;
  display: table-header-group;

  & > tr {
    display: table-row;

    & > th {
      display: table-cell;
      padding: 6px 30px;
      border-bottom: 2px solid #ddd;
      font-size: 18px;
      font-variant: small-caps;

      & > span {
        display: inline-flex;
        align-items: center;
      }
    }
  }
`;

export const Body = styled.tbody`
  display: table-row-group;

  & > tr {
    display: table-row;
    background-color: #999;

    & > td {
      display: table-cell;
      padding: 5px 15px;
      font-size: 18px;

      & .green {
        color: #238823;
        font-weight: bold;
        text-shadow: 1px 1px 0 #000;
      }

      & .yellow {
        color: #ffbf00;
        font-weight: bold;
        text-shadow: 1px 1px 0 #000;
      }

      & .red {
        color: #d2222d;
        font-weight: bold;
        text-shadow: 1px 1px 0 #000;
      }
    }

    & > td:nth-child(3) {
      text-align: right;
    }
  }

  & > tr:nth-child(even) {
    background-color: #ddd;
  }
`;
