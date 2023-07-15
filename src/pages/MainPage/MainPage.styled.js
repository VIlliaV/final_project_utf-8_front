import styled from 'styled-components';
import { media } from '../../utils/media';

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

export const MainPageContainer = styled.div`
  background-repeat: no-repeat;

  @media ${media.mobMax} {
    background: url(${spinachMobile}), url(${mainSpinachMobile}), url(${figureMobile});
    background-position: left 0px top 48px, right 0px top 0px, right 0px top 150px;
    background-size: 48px auto, 375px auto, 269px auto;
    background-repeat: no-repeat;
  }

  @media ${media.mobMax + media.retina} {
    background: url(${spinachMobile2x}), url(${mainSpinachMobile2x}), url(${figureMobile2x});
    background-position: left 0px top 48px, right 0px top 0px, right 0px top 150px;
    background-size: 48px auto, 375px auto, 269px auto;
    background-repeat: no-repeat;
  }

  @media ${media.tabDesk} {
    background: url(${spinachTablet}), url(${mainSpinachTablet}), url(${figureTablet});
    background-position: left 0px top 0px, right 0px top 0px, right 0px top 0px;
    background-size: 67px auto, 583px auto, 332px auto;
    background-repeat: no-repeat;
  }

  @media ${media.tabDesk + media.retina} {
    background: url(${spinachTablet2x}), url(${mainSpinachTablet2x}), url(${figureTablet2x});
    background-position: left 0px top 0px, right 0px top 0px, right 0px top 0px;
    background-size: 67px auto, 583px auto, 332px auto;
    background-repeat: no-repeat;
  }

  @media ${media.desktop} {
    background: url(${spinachDesktop}), url(${mainSpinachDesktop}), url(${figureDesktop});
    background-position: left 0px top 0px, right 0px top 0px, right 0px top 0px;
    background-size: 116px auto, 913px auto, 725px auto;
    background-repeat: no-repeat;
  }

  @media ${media.desktop + media.retina} {
    background: url(${spinachDesktop2x}), url(${mainSpinachDesktop2x}), url(${figureDesktop2x});
    background-position: left 0px top 0px, right 0px top 0px, right 0px top 0px;
    background-size: 116px auto, 913px auto, 725px auto;
    background-repeat: no-repeat;
  }
`;
