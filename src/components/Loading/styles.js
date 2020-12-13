import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 5px;
  font-size: 24px;
  font-variant: small-caps;
`;

export const Loader = styled.div`
  display: flex;
  margin-right: 10px;

  & > svg {
    animation: ${rotate} 1.2s linear infinite;
  }
`;
