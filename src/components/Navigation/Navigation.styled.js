import { NavLink } from "react-router-dom";
import { keyframes, styled } from "styled-components";
import { ReactComponent as userSvgDefault } from '../Header/AvatarButton/img/search.svg';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--text_third);
  stroke: var(--text_third);
  text-decoration: none;
  margin-right: 30px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px;

  &.active {
	stroke: #8baa36;
    color: #8baa36;
    font-weight: bold;
	animation: ${fadeIn} 0.5s;
  }

`;

export const StyledUserSvgDefault = styled(userSvgDefault)`
  width: 24px;
  height: 24px;

  text-decoration: none;
  margin-right: 30px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px;

  &.active {
	text-decoration: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px;
  }
`;
