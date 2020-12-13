import React from 'react';

import { Container, CustomInput } from './styles';

export default function Input({ size = 70, ...rest }) {
  return (
    <Container>
      <CustomInput size={size} {...rest} />
    </Container>
  );
}