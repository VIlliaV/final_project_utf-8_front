import { NavLink } from 'react-router-dom';
import { media } from '../../utils/media';
import styled from 'styled-components';

export const HideContentTablet = styled.div`

min-width: 340px;

  @media (max-width: 1440px) {
    display: none;
  }
`;

export const ResponsiveHeaderContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;

  margin-top: 15px;
  min-width: 100%;
  min-height: 45px;
  @media ${media.desktop} {
	/* margin-left: 100px; */
  }
`

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  margin: 0 10px;
  padding: 5px 10px;
  text-decoration: none;
  color: ${(props) => (props.active ? '#8BAA36' : 'black')};
`;


export const LogoNav = styled(NavLink)`
  color: white;
  height: 35px;
  

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.27px;

  @media ${media.tablet} {
    width: 215px;
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
    width: 44px;
    height: 44px;
  border-radius: 8px;
  background-color: #8BAA36;
  color: black;
  @media ${media.desktop} {
    width: 44px;
    height: 44px;
  }
`;