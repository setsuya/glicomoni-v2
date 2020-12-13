import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 58px;
  margin-bottom: 30px;
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputGroup = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 5px 0;
  border-radius: 12px 0 12px 0;
  background-color: #ddd;
  color: #999;
  box-shadow: 4px 4px 0 #222;

  & > svg {
    margin-left: 10px;
    font-size: 36px;
    color: ${props => props.focus ? '#000' : 'inherit'};
  }
`;
