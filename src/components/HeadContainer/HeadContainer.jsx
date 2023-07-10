import React from 'react';
import { Container } from './HeadContainer.styled';

function HeadContainer({ children }) {
  return <Container>{children}</Container>;
}

export default HeadContainer;
