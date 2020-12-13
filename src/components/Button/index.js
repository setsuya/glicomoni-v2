import React from 'react';

import { Container, CustomButton } from './styles';

export default function Button({ text = '', ...rest }) {
  return (
    <Container>
      <CustomButton {...rest}>
        <div>
          {text}
        </div>
      </CustomButton>
    </Container>
  );
}