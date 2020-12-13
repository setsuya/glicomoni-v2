import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  border: 2px solid #000;
  background-color: #ddd;
  padding: 5px;
`;

export const Graph = styled.div`
  display: flex;
`;

export const Dates = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  color: #000;
  font: bold 12px Arial, sans-serif;
`;

export const Values = styled.div`
  display: flex;
  border-top: 2px solid #000;
  margin-top: 5px;
  padding-top: 5px;
  color: #000;
  font: 12px Arial, sans-serif;
`;

export const Column = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: center;

  & > div:nth-child(1) {
    font-weight: bold;
  }
`;
