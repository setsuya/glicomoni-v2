import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;

  & > div {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #000;
    font-weight: bold;
    margin-top: 10px;
    cursor: pointer;
    text-decoration: underline;
  }
`;
