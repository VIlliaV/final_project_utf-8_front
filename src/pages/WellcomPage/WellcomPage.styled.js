import styled from 'styled-components';

import backgroundMobile from './images/welcomePageBackground-Mobile.png';
import backgroundX2Mobile from './images/welcomePageBackground@x2-Mobile.png';
import backgroundTablet from './images/welcomePageBackground-Tablet.png';
import backgroundX2Tablet from './images/welcomePageBackground-Tablet@X2.png';
import backgroundDesktop from './images/welcomePageBackground-Desktop.png';
import backgroundX2Desktop from './images/welcomePageBackground-Desktop@X2.png';


export const Container = styled.div`
    /* display: flex;
  flex-direction: column; */
    /* justify-content: center;
  align-items: center; */
    box-sizing: border-box;
    max-width: 375px;
    height: 817px;
    padding: 275px 35px 261px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 46.3%, rgba(0, 0, 0, 0.35) 72.75%, rgba(0, 0, 0, 0) 100%);
    background-image: url(${backgroundMobile});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (min-resolution: 192dpi) {
        background-image: url(${backgroundX2Mobile});
    }

    @media screen and (min-width: 376px) and (max-width: 768px) {
        background-image: url(${backgroundTablet});
        max-width: 100%;
        height: auto;
    }

    @media screen and (min-width: 376px) and (max-width: 768px) and (min-resolution: 192dpi) {
        background-image: url(${backgroundX2Tablet});
    }

    @media screen and (min-width: 769px) {
        background-image: url(${backgroundDesktop});
        max-width: 100%;
        height: auto;
        padding: 342px 132px;
    }

    @media screen and (min-width: 769px) and (min-resolution: 192dpi) {
        background-image: url(${backgroundX2Desktop});
    }

    @media screen and (min-width: 1440px) {
        padding: 214px 450px;
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
`;

export const Title = styled.h1`
  text-align: center;
  color: #fafafa;
  margin-top: 44px;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.56px;
`;

export const TextBlock = styled.p`
margin-top: 14px;
  color: #fafafa;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.36px;
`;