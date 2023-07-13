import styled from 'styled-components';

import backgroundMobile from 'img/welcomePageBackground-Mobile.png';
import backgroundX2Mobile from 'img/welcomePageBackground@x2-Mobile.png';
import backgroundTablet from 'img/welcomePageBackground-Tablet.png';
import backgroundX2Tablet from 'img/welcomePageBackground-Tablet@X2.png';
import backgroundDesktop from 'img/welcomePageBackground-Desktop.png';
import backgroundX2Desktop from 'img/welcomePageBackground-Desktop@X2.png';


export const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 275px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 46.3%, rgba(0, 0, 0, 0.35) 72.75%, rgba(0, 0, 0, 0) 100%);
  background-image: url(${backgroundMobile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-resolution: 192dpi) {
    background-image: url(${backgroundX2Mobile});
  }

  @media screen and (min-width: 768px) {
    padding-top: 342px;
    padding-left: 131.5px;
    padding-right: 131.5px;
    background-image: url(${backgroundTablet});
  }

  @media screen and (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${backgroundX2Tablet});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundDesktop});
    padding-top: 214px;
    padding-left: 450px;
    padding-right: 450px;
  }

  @media screen and (min-width: 1440px) and (min-resolution: 192dpi) {
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

// font-size / line-height

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