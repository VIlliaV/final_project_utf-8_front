import styled from 'styled-components';

import backgroundMobile from 'img/welcomePageBackground-Mobile.png';
import backgroundX2Mobile from 'img/welcomePageBackground@x2-Mobile.png';
import backgroundTablet from 'img/welcomePageBackground-Tablet.png';
import backgroundX2Tablet from 'img/welcomePageBackground-Tablet@X2.png';
import backgroundDesktop from 'img/welcomePageBackground-Desktop.png';
import backgroundX2Desktop from 'img/welcomePageBackground-Desktop@X2.png';
import { media } from 'utils/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 275px;
  padding-bottom: 261px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 46.3%, rgba(0, 0, 0, 0.35) 72.75%, rgba(0, 0, 0, 0) 100%);
  background-image: url(${backgroundMobile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media ${media.retina} {
    background-image: url(${backgroundX2Mobile});
  }

  @media ${media.tablet} {
    padding: 342px 131.5px;
    background-image: url(${backgroundTablet});
  }

  @media ${media.tablet + media.retina} {
    background-image: url(${backgroundX2Tablet});
  }

  @media ${media.desktop} {
    background-image: url(${backgroundDesktop});
    padding: 214px 450px 216px;
  }

  @media ${media.desktop + media.retina} {
    background-image: url(${backgroundX2Desktop});
  }
`;

export const Icon = styled.img`
  width: 54px;
  height: 54px;
  margin-left: auto;
  margin-right: auto;
  fill: #fafafa;
  background-color: #8baa36;
  border-radius: 12px;

  @media ${media.tablet} {
    width: 68px;
    height: 68px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #fafafa;
  margin-top: 44px;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.56px;

  @media ${media.tablet} {
    margin-top: 44px;
    font-size: 28px;
  }
`;

export const TextBlock = styled.div`
  margin-top: 14px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  color: #fafafa;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;

  @media ${media.mobile} {
    width: 305px;
    height: auto;
  }

  @media ${media.tablet} {
    width: 505px;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
  }

  @media ${media.desktop} {
    width: 540px;
  }
`;
