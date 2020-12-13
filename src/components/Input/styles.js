import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
`;

export const CustomInput = styled.input`
  border: 0;
  outline: 0;
  background-color: transparent;
  padding: 4px;
  font-size: 32px;
  margin: 5px 15px;
  width: ${prop => prop.size}px;
  text-align: center;
  font-weight: bold;
  font-family: sans-serif;

  &:focus {
    box-shadow: 0 3px 0 #666;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
