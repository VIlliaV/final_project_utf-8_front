import { styled } from 'styled-components';
import { media } from '../../utils/media';

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 28px;

  margin-bottom: 40px;

  @media ${media.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  @media ${media.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 14px;
  }
`;
