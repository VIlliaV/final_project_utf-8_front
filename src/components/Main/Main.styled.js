import styled from 'styled-components';
import { media } from '../../utils/media';

import plateMobile from './images/plate-mobile.png';
import plateMobile2x from './images/plate-mobile@2x.png';
import plateTablet from './images/plate-tablet.png';
import plateTablet2x from './images/plate-tablet@2x.png';
import plateDesktop from './images/plate-desktop.png';
import plateDesktop2x from './images/plate-desktop@2x.png';

import arrowTablet from './images/arrow-tablet.png';
import arrowTablet2x from './images/arrow-tablet@2x.png';
import arrowDesktop from './images/arrow-desktop.png';
import arrowDesktop2x from './images/arrow-desktop@2x.png';

export const HeroSection = styled.div`
  background-repeat: no-repeat;

  @media ${media.mobMax} {
    background: url(${plateMobile});
    background-position: right 27px top 322px;
    background-size: 320px auto;
    background-repeat: no-repeat;
  }

  @media ${media.mobMax + media.retina} {
    background: url(${plateMobile2x});
    background-position: right 27px top 322px;
    background-size: 320px auto;
    background-repeat: no-repeat;
  }

  @media ${media.tabDesk} {
    background: url(${arrowTablet}), url(${plateTablet});
    background-position: right 72.15px top 441px, right 0px top 159px;
    background-size: 186px auto, 368px auto;
    background-repeat: no-repeat;
  }

  @media ${media.tabDesk + media.retina} {
    background: url(${arrowTablet2x}), url(${plateTablet2x});
    background-position: right 72.15px top 441px, right 0px top 159px;
    background-size: 186px auto, 368px auto;
    background-repeat: no-repeat;
  }

  @media ${media.desktop} {
    background: url(${arrowDesktop}), url(${plateDesktop});
    background-position: right 183.22px top 539px, right 184px top 126px;
    background-size: 220px auto, 578px auto;
    background-repeat: no-repeat;
  }

  @media ${media.desktop + media.retina} {
    background: url(${arrowDesktop2x}), url(${plateDesktop2x});
    background-position: right 183.22px top 539px, right 184px top 126px;
    background-size: 220px auto, 578px auto;
    background-repeat: no-repeat;
  }

  padding: 132px 27px 83px 28px;
  margin: 0 auto;
  position: relative;
  width: 375px;
  height: 777px;

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
    width: 768px;
    height: 640px;
    h1 {
      margin-bottom: 24px;
      text-align: left;
      font-size: 72px;
      letter-spacing: -0.36px;
    }
  }

  @media ${media.desktop} {
    padding: 226px 122px 268px 100px;
    width: 1440px;
    height: 800px;

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
