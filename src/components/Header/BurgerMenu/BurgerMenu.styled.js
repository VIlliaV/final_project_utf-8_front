import { NavLink } from 'react-router-dom';
import { media } from 'utils/media';
import { ReactComponent as MenuIconSvg } from './img/menu.svg';
import { ReactComponent as CloseIconSVG } from './img/x.svg';
const { styled } = require('styled-components');

export const BurgerMenuContainer = styled.div`
  position: relative;
  z-index: 10;
`;

export const BurgerIcon = styled.div`
  display: flex;
  font-size: 24px;
  cursor: pointer;
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: none;

  &.visible {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  background-color: var(--back_second_2);
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  cursor: pointer;

  @media ${media.tablet} {
    top: 32px;
    right: 32px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 10px;
  color: var(--text_third);
  text-decoration: none;
  transition: background-color 0.3s;
  margin-bottom: 32px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.36px;

  &.active {
    color: #8baa36;
    font-weight: bold;
  }

  @media ${media.tablet} {
    margin-bottom: 32px;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.48px;
  }
`;

export const Switcher = styled.div`
  position: absolute;
  bottom: 20px;
  left: 30px;
  font-size: 18px;
  cursor: pointer;
  @media ${media.tablet} {
    bottom: 32px;
    left: 48px;
  }
`;

export const StyledMenuIconSvg = styled(MenuIconSvg)`
  stroke: var(--text_theme_1);
  width: 28px;
  height: 28px;
  @media ${media.tablet} {
  }
`;

export const StyledCloseIconSVG = styled(CloseIconSVG)`
  stroke: var(--text_theme_1);
  width: 32px;
  @media ${media.tablet} {
  }
`;
