import { styled } from "styled-components";
import { media } from "utils/media";
import { fadeIn } from "../AvatarButton.styled";
import userDefaultPng from '../img/userSvgDefault.svg'
import { ReactComponent as UserIconSVG } from '../img/userIcon.svg';

export const PopupEdit = styled.form`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 70px;
  left: -180px;
  width: 330px;
  height: 330px;
  background-color: var(--back_theme_1);
  border: 1px solid var(--fix_back);
  padding: 10px;
  border-radius: 30px;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.3s;

  @media ${media.tablet} {
    width: 480px;
    height: 400px;
    left: -400px;
  }

  @media ${media.desktop} {
    width: 500px;
    height: 425px;
  }
`;

export const AvatarDiv = styled.div`
  position: relative;
  min-width: 90px;
  min-height: 90px;
  margin-bottom: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 50px 0;
  cursor: pointer;

  @media ${media.tablet} {
    width: 105px;
    height: 105px;
  }
`;

export const AddNewImgButton = styled.button`
  cursor: pointer;
  background-image: url(${userDefaultPng});
  background-color: #D9D9D9;
  background-repeat: no-repeat;
  background-position: center;
  border: 0;
  border-radius: 100px;
  width: 90px;
  height: 90px;

  @media ${media.tablet} {
    width: 105px;
    height: 105px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
  }
`;

export const ImgPlusButton = styled.button`
  cursor: pointer;
  display: flex;
  position: absolute;
  bottom: 0px;
  right: 0px;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: #8baa36;
  border: 0;
  border-radius: 15px;
`;


export const CloseButton = styled.div`
  position: absolute;
  width: 20px;
  top: 20px;
  right: 20px;
  cursor: pointer;
  @media ${media.tablet} {
    width: 24px;
  }
`;

export const NameInputDiv = styled.div`
  position: relative;

  width: 285px;
  height: 50px;
  margin-bottom: 25px;
  @media ${media.tablet} {
    width: 400px;
  }
`;

export const AvatarSvg = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
  @media ${media.tablet} {
    left: 15px;
    top: 11px;
  }
`;

export const StyledUserIcon = styled(UserIconSVG)`
  stroke: var(--text_theme_1);
  width: 18px;
  height: 18px;
  @media ${media.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const EditButton = styled.button`
  cursor: pointer;
  position: absolute;
  border: 0;
  background-color: transparent;
  right: 15px;
  top: 16px;
`;

export const NameInput = styled.input`
  padding: 0 0 0 42px;
  width: 100%;
  height: 50px;
  border-radius: 4px;
  background-color: var(--back_theme_1);
  color: var(--back_theme_2);
  border: 1px solid var(--back_theme_2);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;
  @media ${media.tablet} {
    font-size: 18px;
    letter-spacing: -0.36px;
  }
`;

export const EditConfirmButton = styled.button`
cursor: pointer;
  width: 285px;
  height: 50px;
  background-color: #8baa36;
  border: 0;
  border-radius: 6px;
  color: white;

  @media ${media.tablet} {
    width: 400px;
    height: 60px;
  }

  &:hover, &:focus {
	background-color: var(--active_theme_2);
	color: var(--active);
  }
`;

