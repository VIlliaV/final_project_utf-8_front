import styled from 'styled-components';
import { media } from '../../utils/media';

export const HeroSection = styled.div`
  position: relative;
  padding: 132px 27px 83px 28px;

  h1 {
    margin-bottom: 14px;
    color: #22252a;
    text-align: center;
    font-size: 60px;
    font-weight: 400;
    letter-spacing: -0.3px;
  }

  span {
    color: #8baa36;
  }

  @media ${media.tablet} {
    padding: 204px 33px 195px 32px;

    h1 {
      margin-bottom: 24px;
      text-align: left;
      font-size: 72px;
      letter-spacing: -0.36px;
    }
  }

  @media ${media.desktop} {
    padding: 226px 122px 268px 100px;

    h1 {
      margin-bottom: 14px;
      font-size: 100px;
      letter-spacing: -0.5px;
    }
  }
`;

export const HeroSectionText = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 364px;
  width: 248px;
  color: #23262a;
  text-align: center;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.28px;

  @media ${media.tablet} {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 32px;
    width: 362px;
    text-align: left;
  }

  @media ${media.desktop} {
    margin-bottom: 50px;
    width: 465px;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
  }
`;
