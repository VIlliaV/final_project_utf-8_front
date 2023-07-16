import { keyframes, styled } from 'styled-components';
import { media } from 'utils/media';
import defaultIcon from './img/userSvgDefault.svg';
import { ReactComponent as UserIconSVG } from './img/userIcon.svg';
import { ReactComponent as EditIconSVG } from './img/edit.svg';
import { ReactComponent as CloseIconSVG } from '../BurgerMenu/img/x.svg';
import { ReactComponent as PlusIconSVG } from './img/plus.svg';
import { ReactComponent as ArrowIconSVG } from './img/arrow-right.svg';
import { ReactComponent as userSvgDefault } from './img/userSvgDefault.svg';

const fadeIn = keyframes`
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
  /* width: 100px; */
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

export const Popup = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 70px;
  right: 0;
  width: 160px;
  height: 130px;
  background-color: var(--back_theme_1);
  border: 1px solid var(--fix_back);
  color: var(--text_theme_1);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.3s;

  @media ${media.tablet} {
    width: 180px;
    height: 135px;
  }
`;

export const PopupConfirm = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 70px;
  right: -30%;
  width: 330px;
  height: 180px;
  background-color: var(--back_theme_1);
  border: 1px solid var(--fix_back);
  padding: 10px;
  border-radius: 30px;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.3s;

  @media ${media.tablet} {
    width: 480px;
    height: 215px;
  }

  @media ${media.desktop} {
    width: 500px;
  }
`;

export const PopupEdit = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 70px;
  left: -180%;
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
    left: -400%;
  }

  @media ${media.desktop} {
    width: 500px;
    height: 425px;
  }
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  background-color: #8baa36;
  color: #fafafa;
  border-radius: 24px 44px;
  width: 125px;
  height: 45px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${media.tablet} {
    width: 140px;
    height: 45px;
  }
  img {
    margin-left: 5px;
  }
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

export const EditDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 125px;
  margin-bottom: 25px;
  @media ${media.tablet} {
    width: 140px;
  }
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

export const ButtonIconEdit = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;
`;

export const EditText = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px;
`;

export const AvatarText = styled.p`
  margin-left: 15px;
  color: var(--text_theme_1);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 170%;
`;

export const ButtonYes = styled.button`
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
`;

export const ButtonNo = styled.button`
  width: 140px;
  height: 50px;
  background-color: #d9d9d9;
  border: 0;
  border-radius: 6px;

  @media ${media.tablet} {
    width: 195px;
    height: 60px;
  }
`;

export const ConfirmTitle = styled.p`
  color: var(--text_theme_1);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  margin-bottom: 25px;

  @media ${media.tablet} {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.36px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EditConfirmButton = styled.button`
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
`;

export const EditButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 16px;
  border: 0;
  background-color: transparent;
  width: 17px;
  height: 15px;

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

export const NameInputDiv = styled.div`
  position: relative;

  width: 285px;
  height: 50px;
  margin-bottom: 25px;
  @media ${media.tablet} {
    width: 400px;
  }
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

export const AvatarDefaultImg = styled.button`
  width: 90px;
  height: 90px;
  background-color: #d9d9d9;
  border: 0;
  border-radius: 100px;

  @media ${media.tablet} {
    width: 105px;
    height: 105px;
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

export const AddNewImgButton = styled.button`
  cursor: pointer;
  background-image: ${defaultIcon};
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

export const StyledEditIconSVG = styled(EditIconSVG)`
  stroke: var(--text_theme_1);
  width: 17px;
  height: 17px;
  @media ${media.tablet} {
    width: 19px;
    height: 19px;
  }
`;

export const StyledCloseIconSVG = styled(CloseIconSVG)`
  stroke: var(--text_theme_1);
  width: 20px;
  @media ${media.tablet} {
  }
`;

export const StyledPlusIconSVG = styled(PlusIconSVG)`
  width: 20;
  height: 20;
  @media ${media.tablet} {
  }
`;

export const StyledArrowIconSVG = styled(ArrowIconSVG)`
  padding-left: 4px;
  width: 20px;
`;

export const StyledUserSvgDefault = styled(userSvgDefault)``;
