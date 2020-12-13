import React from 'react';

import { BiLoaderAlt } from "react-icons/bi";

import { Container, Loader } from './styles';

export default function Loading({ text = 'Loading...' }) {
  return (
    <Container>
      <Loader>
        <BiLoaderAlt />
      </Loader>
      {text}
    </Container>
  );
}