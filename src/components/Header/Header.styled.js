import styled from 'styled-components';
import { media } from '../../utils/media';


export const HideContentTablet = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const HideContentDesktop = styled.div`
  display: block;


  @media ${media.tablet} {
	margin-left: 50px;
  }
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

