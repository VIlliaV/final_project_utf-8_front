import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from 'utils/media';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 50px
    margin-bottom: 40px;

    gap: 18px;

    @media ${media.tablet} {
        gap: 40px;
        margin-top: 100px;
        margin-bottom: 50px;
    }

    @media ${media.desktop} {
        gap: 50px;
    }
`;
export const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-align: left;

  @media ${media.tablet} {
    font-size: 32px;
    line-height: 32px;
  }

  @media ${media.desktop} {
    font-size: 44px;
    line-height: 44px;
  }
`;

export const MyRecipesItem = styled.li`
  background-color: ${prop => {
    if (prop.$backgroundColor === true) {
      return '#ffffff';
    } else {
      return '#2A2C36';
    }
  }};

  display: flex;
  justify-content: center;

  padding: 14px 9px;

  @media ${media.tablet} {
    padding: 28px 24px;
  }

  @media ${media.desktop} {
    padding: 40px;
  }
`;

export const MyRecipesImg = styled.img`
  min-width: 124px;
  min-height: 124px;

  border-radius: 8px;

  @media ${media.tablet} {
    min-width: 228px;
    min-height: 232px;
  }

  @media ${media.desktop} {
    min-width: 318px;
    min-height: 324px;
  }
`;

export const TrashIcon = styled.img`
  width: 14px;
  height: 14px;

  @media ${media.tablet} {
    width: 22px;
    height: 22px;
  }

  @media ${media.desktop} {
    width: 24px;
    height: 24px;
  }
`;

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 24px;
  height: 24px;

  border-radius: 4px;
  background-color: ${prop => {
    if (prop.$backgroundColor === '#EBF3D4') {
      return '#EBF3D4';
    } else {
      return '#8BAA36';
    }
  }};

  @media ${media.tablet} {
    width: 38px;
    height: 38px;
  }

  @media ${media.desktop} {
    width: 44px;
    height: 44px;
  }

  &:hover {
    scale: 1.03;
  }
`;

export const TitleIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;

  @media ${media.tablet} {
    margin-bottom: 14px;
  }

  @media ${media.desktop} {
    margin-bottom: 20px;
  }
`;

export const ImgWrapper = styled.div`
  margin-right: 14px;

  @media ${media.tablet} {
    margin-right: 24px;
  }

  @media ${media.desktop} {
    margin-right: 54px;
  }
`;

export const MyRecipesItemTitle = styled.h2`
  color: ${prop => {
    if (prop.$color === true) {
      return '#3e4462';
    } else {
      return '#FAFAFA';
    }
  }};

  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.24px;
  text-align: left;

  @media ${media.tablet} {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const MyRecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  @media ${media.tablet} {
    padding: 0 32px;
  }

  @media ${media.desktop} {
    padding: 0 100px;
  }
`;

export const MyRecipesDescription = styled.p`
  color: ${prop => {
    if (prop.$descColor === true) {
      return '#23262A';
    } else {
      return 'rgba(250, 250, 250, 0.60)';
    }
  }};
  font-size: 8px;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: -0.02em;
  text-align: left;

  @media ${media.tablet} {
    font-size: 14px;
    line-height: 18px;
  }

  @media ${media.desktop} {
    min-width: 758px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const MyRecipeTime = styled.p`
  color: ${prop => {
    if (prop.$timeColor === true) {
      return '#3E4462';
    } else {
      return '#FAFAFA;';
    }
  }};
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.24px;
  text-align: left;

  @media ${media.tablet} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const MyRecipeBtn = styled(NavLink)`
  display: inline-block;
  padding: 6px 14px;

  background-color: ${prop => {
    if (prop.$buttonColor === '#8BAA36') {
      return '#8BAA36';
    } else {
      return '#22252A';
    }
  }};

  &:hover {
    background-color: ${prop => {
      if (prop.$buttonColor === '#8BAA36') {
        return '#22252A';
      } else {
        return '#8BAA36';
      }
    }};
  }
  color: #fafafa;
  border-radius: 24px 44px;
  border: transparent;
  text-decoration: none;

  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;

  @media ${media.tablet} {
    padding: 12px 32px;

    font-size: 14px;
    line-height: 21px;
  }

  @media ${media.desktop} {
    padding: 18px 44px;

    font-size: 16px;
    line-height: 24px;
  }
`;

export const TimeBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
