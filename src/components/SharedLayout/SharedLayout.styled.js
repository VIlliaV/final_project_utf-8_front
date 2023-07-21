import styled from 'styled-components';
import { media } from 'utils/media';

export const Container = styled.div`
  max-width: 100vw;
  height: auto;
  & main {
    min-height: 50vh;
    @media ${media.mobile} {
      min-height: 60vh;
    }

    @media ${media.tablet} {
      min-height: 65vh;
    }
    @media ${media.desktop} {
      min-height: 70vh;
    }
  }
`;

export const EmptyContent = styled.div`
  min-height: 80%;
`;
