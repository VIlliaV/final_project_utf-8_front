import styled from 'styled-components';
import { media } from 'utils/media';

const SLContainer = styled.div`
  max-width: 703px;
  margin: 0 auto;

  @media ${media.tablet} {
    min-width: 704px;
  }

  @media ${media.desktop} {
    min-width: 1240px;
  }
`;

const SLHeader = styled.div`
  max-width: 703px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: 50px;

  border-radius: 8px;
  background-color: var(--active);

  *:nth-last-child(2) {
    margin-left: auto;
    margin-right: 24px;
  }

  @media ${media.tablet} {
    min-width: 704x;
    height: 58px;

    padding: 20px;
    margin-top: 72px;

    *:nth-last-child(2) {
      margin-left: auto;
      margin-right: 78px;
    }
  }

  @media ${media.desktop} {
    min-width: 1240px;
    height: 60px;

    padding: 20px 40px;

    *:nth-last-child(2) {
      margin-left: auto;
      margin-right: 142px;
    }
  }
`;

const SLHeaderText = styled.p`
  color: var(--back_theme_1);
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  @media ${media.tablet} {
    font-size: 18px;
    line-height: 26px;
  }

  @media ${media.desktop} {
    font-size: 18px;
    line-height: 26px;
  }
`;

export { SLHeader, SLHeaderText, SLContainer };
