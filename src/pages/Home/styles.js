import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
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

export const Separator = styled.hr`
  width: 90%;
  height: 1px;
  border: 0;
  background-color: #ccc;
`;
