import React from 'react';
import { Container, Section } from './HeadContainer.styled';

function HeadContainer({ children }) {
    return (
        <Section>
            <Container>{children}</Container>
        </Section>
    );
}

export default HeadContainer;
