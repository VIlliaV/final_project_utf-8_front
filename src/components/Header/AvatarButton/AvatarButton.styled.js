import { keyframes, styled } from 'styled-components';
import { media } from 'utils/media';

import { ReactComponent as PlusIconSVG } from './img/plus.svg';


export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const AvatarButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;








export const ButtonRadius = styled.button`
  border: 0;
  width: 34px;
  border-radius: 50px;
  cursor: pointer;

  @media ${media.tablet} {
    width: 44px;
  }
`;






export const AvatarText = styled.p`
  margin-left: 15px;
  color: var(--text_third);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 170%;
`;

export const ButtonYes = styled.button`
cursor: pointer;
  width: 140px;
  height: 50px;
  color: var(--text_theme_1);
  background-color: #8baa36;
  border: 0;
  border-radius: 6px;
  margin-right: 10px;

  @media ${media.tablet} {
    width: 195px;
    height: 60px;
  }

  &:hover, &:focus {
	background-color: var(--active_theme_2);
	color: var(--active);
  }
`;

export const ButtonNo = styled.button`
cursor: pointer;
  width: 140px;
  height: 50px;
  background-color: #d9d9d9;
  border: 0;
  border-radius: 6px;


  @media ${media.tablet} {
    width: 195px;
    height: 60px;
  }
  &:hover, &:focus {
	background-color: var(--back_fix);
	border: 1px solid black;
  }
`;









export const AvatarDefaultImg = styled.button`
  width: 90px;
  height: 90px;
  /* background-color: #D9D9D9; */
  border: 0;
  border-radius: 100px;

  @media ${media.tablet} {
    width: 105px;
    height: 105px;
  }
`;










export const StyledPlusIconSVG = styled(PlusIconSVG)`
  width: 20;
  height: 20;
  @media ${media.tablet} {
  }
`;



