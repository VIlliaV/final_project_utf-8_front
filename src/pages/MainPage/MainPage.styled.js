import styled from 'styled-components';

import figureMobile from './images/figure-mobile.png';
import figureMobile2x from './images/figure-mobile@2x.png';
import figureTablet from './images/figure-tablet.png';
import figureTablet2x from './images/figure-tablet@2x.png';
import figureDesktop from './images/figure-desktop.png';
import figureDesktop2x from './images/figure-desktop@2x.png';

import spinachMobile from './images/spinach-mobile.png';
import spinachMobile2x from './images/spinach-mobile@2x.png';
import spinachTablet from './images/spinach-tablet.png';
import spinachTablet2x from './images/spinach-tablet@2x.png';
import spinachDesktop from './images/spinach-desktop.png';
import spinachDesktop2x from './images/spinach-desktop@2x.png';

import mainSpinachMobile from './images/main-spinach-mobile.png';
import mainSpinachMobile2x from './images/main-spinach-mobile@2x.png';
import mainSpinachTablet from './images/main-spinach-tablet.png';
import mainSpinachTablet2x from './images/main-spinach-tablet@2x.png';
import mainSpinachDesktop from './images/main-spinach-desktop.png';
import mainSpinachDesktop2x from './images/main-spinach-desktop@2x.png';

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

export const MainPageContainer = styled.div`
  margin-top: -62px;
  background-repeat: no-repeat;

  @media (max-width: 767px) {
    background: url(${spinachMobile}), url(${plateMobile}), url(${mainSpinachMobile}), url(${figureMobile});
    background-position: left 0px top 48px, right 27px top 322px, right 0px top 0px, right 0px top 150px;
    background-repeat: no-repeat;
  }

  @media (max-width: 767px) and (min-resolution: 192dpi) {
    background: url(${spinachMobile2x}), url(${plateMobile2x}), url(${mainSpinachMobile2x}), url(${figureMobile2x});
    background-repeat: no-repeat;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    background: url(${spinachTablet}), url(${arrowTablet}), url(${plateTablet}), url(${mainSpinachTablet}), url(${figureTablet});
    background-position: left 0px top 0px, right 96px top 448px, right 0px top 159px, right 0px top 0px, right 0px top 0px;
    background-repeat: no-repeat;
  }

  @media (min-width: 768px) and (max-width: 1439px) and (min-resolution: 192dpi) {
    background: url(${spinachTablet2x}), url(${arrowTablet2x}), url(${plateTablet2x}), url(${mainSpinachTablet2x}), url(${figureTablet2x});
    background-repeat: no-repeat;
  }

  @media (min-width: 1440px) {
    background: url(${spinachDesktop}), url(${arrowDesktop}), url(${plateDesktop}), url(${mainSpinachDesktop}), url(${figureDesktop});
    background-position: left 0px top 0px, right 184px top 551px, right 184px top 126px, right 0px top 0px, right 0px top 0px;
    background-repeat: no-repeat;
  }

  @media (min-width: 1440px) and (min-resolution: 192dpi) {
    background: url(${spinachDesktop2x}), url(${arrowDesktop2x}), url(${plateDesktop2x}), url(${mainSpinachDesktop2x}),
      url(${figureDesktop2x});
    background-repeat: no-repeat;
  }
`;
