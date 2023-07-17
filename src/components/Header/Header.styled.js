import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../utils/media';
import { ReactComponent as userSvgDefault } from './AvatarButton/img/search.svg';

export const HideContentTablet = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const HideContentDesktop = styled.div`
  display: block;
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const ShowContentTablet = styled.div`
  display: none;
  @media (max-width: 1439px) {
    display: block;
  }
`;

export const ResponsiveHeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  position: absolute;
  z-index: 10;
  margin-top: 15px;
  height: 45px;
  width: 340px;

  @media ${media.tablet} {
    width: 750px;
  }

  @media ${media.desktop} {
    width: 1240px;
  }
`;

export const HeaderContainer = styled.header`
  background-color: transparent;
  padding: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--text_theme_1);
  text-decoration: none;
  margin-right: 30px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px;

  &.active {
    color: #8baa36;
    font-weight: bold;
  }
`;

export const LogoNav = styled(NavLink)`
  color: white;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.27px;

  @media ${media.tablet} {
    font-size: 28px;
    line-height: 28px;
    letter-spacing: 0.42px;
    justify-content: normal;
    padding-bottom: 0;
  }
  @media ${media.desktop} {
    width: 145px;
  }
`;

export const LogoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #8baa36;
  color: black;
  @media ${media.desktop} {
    width: 44px;
    height: 44px;
  }
`;

export const UserDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 140px;

  @media ${media.tablet} {
    width: 185px;
  }
`;

export const StyledUserSvgDefault = styled(userSvgDefault)`
  width: 24px;
  height: 24px;
  stroke: var(--text_theme_1);
`;
