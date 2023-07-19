import { styled } from "styled-components";
import { fadeIn } from "../AvatarButton.styled";
import { media } from "utils/media";
import { ReactComponent as EditIconSVG } from '../img/edit.svg';
import { ReactComponent as ArrowIconSVG } from '../img/arrow-right.svg';
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

export const EditDiv = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 125px;
  margin-bottom: 25px;
  @media ${media.tablet} {
    width: 140px;
  }
`;

export const EditText = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px;
  ${EditDiv}:hover & {
	color: var(--fix_back);
  }
`;

export const ButtonIconEdit = styled.button`
cursor: pointer;
  border: 0;
  background-color: transparent;
`;

export const StyledEditIconSVG = styled(EditIconSVG)`
  stroke: var(--text_theme_1);
  width: 17px;
  height: 17px;

  @media ${media.tablet} {
    width: 19px;
    height: 19px;
  }

  &:hover, &:focus {
		stroke: var(--fix_back);
	}

	${EditDiv}:hover & {
		stroke: var(--fix_back);
  }
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  background-color: #8baa36;
  color: #fafafa;
  stroke: #fafafa;
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
  &:hover, &:focus {
	color: var(--fix_back_2);
	stroke: var(--fix_back_2);
  }
`;

export const StyledArrowIconSVG = styled(ArrowIconSVG)`
  padding-left: 4px;
  width: 20px;

  &:hover, &:focus {
	stroke: var(--fix_back_2);
  }

`;
