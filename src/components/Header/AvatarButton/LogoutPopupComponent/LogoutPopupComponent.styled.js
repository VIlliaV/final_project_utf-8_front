import { styled } from 'styled-components';
import { media } from "utils/media";
import { ReactComponent as CloseIconSVG } from '../../BurgerMenu/img/x.svg';
import { fadeIn } from '../AvatarButton.styled';



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
export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
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

export const StyledCloseIconSVG = styled(CloseIconSVG)`
  stroke: var(--text_theme_1);
  width: 20px;
  @media ${media.tablet} {
	width: 24px;
  }

  &:hover, &:focus {
	stroke: var(--fix_back);
  }
`;
