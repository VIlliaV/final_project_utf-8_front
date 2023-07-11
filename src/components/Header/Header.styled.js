import { NavLink } from 'react-router-dom';
import { media } from '../../utils/media';
import styled from 'styled-components';


export const ResponsiveHeaderContainer = styled.div`
margin-bottom: 110px;
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  margin-left: 100px;
  margin-top: 15px;
  min-width: 1240px;
  min-height: 45px;
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
  width: 145px;
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