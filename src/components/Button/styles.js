import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
`;

export const CustomButton = styled.button`
  border: 0;
  border-bottom: 5px solid #040;
  border-radius: 8px;
  outline: 0;
  padding: 6px 25px;
  font-size: 24px;
  margin: 5px 15px;
  text-align: center;
  background-color: #6c6;
  font-weight: bold;
  font-variant: small-caps;

  &:active {
    border-bottom: 3px solid #040;
    transform: translateY(2px);
  }

  & > div {
    display: flex;
    align-items: center;
  }
`;
