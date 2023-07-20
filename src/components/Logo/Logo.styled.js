import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { media } from "utils/media";

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