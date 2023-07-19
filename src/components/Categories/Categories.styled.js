import styled from 'styled-components';
import { media } from '../../utils/media';

export const CategoriesPageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media ${media.tablet} {
    width: 704px;
  }
  @media ${media.desktop} {
    width: 1242px;
  }
`;
