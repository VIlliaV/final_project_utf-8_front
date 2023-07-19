import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  height: auto;
  & main {
    min-height: 100vh;
  }
`;
