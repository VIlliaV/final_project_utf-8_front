import { media } from '../../utils/media';
import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
import { Checkbox } from '@mui/material';

const CheckboxInput = muiStyled(Checkbox)`
  width: 18px;
  height: 18px;
  margin-right: 19px;
  margin-left: 28px;
  color: rgba(126, 126, 126, 0.5);
  @media ${media.tablet} {
    width: 35px;
    height: 35px;
    margin-right: 58px;
    margin-left: 78px;
  }
  @media ${media.desktop} {
    margin-right: 70px;
    margin-left: 151px;
  }
`;

const ListBox = styled.ul`
  width: 343px;
  padding: 12px 14px;
  margin-top: 32px;
  margin-bottom: 24px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: var(--fix_back);

  @media ${media.tablet} {
    width: 704px;
    padding: 21px 32px;
    margin-top: 50px;
    margin-bottom: 32px;
  }

  @media ${media.desktop} {
    width: 1240px;
    margin-bottom: 50px;
  }
`;

const ListTitle = styled.li`
  color: var(--back_fix);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.3px;
  height: 18px;

  @media ${media.tablet} {
    font-size: 18px;
    letter-spacing: 0.54px;
  }
`;

const FirstListTitle = styled(ListTitle)`
  width: 76px;
  margin-right: auto;
  @media ${media.tablet} {
    width: 115px;
    margin-right: auto;
  }
  @media ${media.desktop} {
    width: 115px;
    margin-right: auto;
  }
`;

const SecondListTitle = styled(ListTitle)`
  width: 45px;
  margin-right: 18px;
  @media ${media.tablet} {
    width: 78px;
    margin-right: 38px;
  }
  @media ${media.desktop} {
    width: 78px;
    margin-right: 109px;
  }
`;

const LastListTitle = styled(ListTitle)`
  width: 54px;
  @media ${media.tablet} {
    width: 97px;
  }
  @media ${media.desktop} {
    width: 97px;
  }
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  @media ${media.tablet} {
    margin-bottom: 96px;
  }
  @media ${media.desktop} {
    margin-bottom: 100px;
  }
`;

const ListItem = styled.li`
  display: flex;
  width: 343px;
  height: 86px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;

  border-radius: 8px;
  background: #2a2c36;
  &[datatype='true'] {
    background: #ebf3d4;
  }
  &:last-child {
    margin-bottom: 0px;
  }
  @media ${media.tablet} {
    width: 704px;
    height: 178px;
    margin-bottom: 24px;

    padding-left: 24px;
    padding-right: 24px;
  }
  @media ${media.desktop} {
    padding-left: 32px;
    padding-right: 32px;
    width: 1240px;
    height: 182px;
  }
`;

const RILImageWrapper = styled.div`
  width: 65px;
  height: 65px;
  padding: 4px;

  @media screen and (min-width: ${media.tablet}) {
    width: 144px;
    height: 146px;
    padding: 17px 16px;
  }
  @media ${media.desktop} {
    width: 180px;
    height: 180px;
    padding: 26px;
  }
`;

const RILImage = styled.img`
  width: 57px;
  height: 57px;
  margin-right: 12px;

  background-image: url(${props => props.src || props.$defaultImgMobile});
  background-repeat: no-repeat;
  background-size: cover;

  @media ${media.tablet} {
    width: 112px;
    height: 112px;
    margin-right: 12px;

    background-image: url(${props => props.src || props.$defaultImgTablet});
  }

  @media ${media.desktop} {
    width: 128px;
    height: 128px;
    margin-right: 40px;

    background-image: url(${props => props.src || props.$defaultImgDesktop});
  }
`;

const Name = styled.p`
  color: #fafafa;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.16;
  letter-spacing: -0.24px;
  margin-right: auto;
  &[datatype='true'] {
    color: #3e4462;
  }
  @media ${media.tablet} {
    font-size: 24px;
  }
`;

const MeasureWrapper = styled.div`
  padding: 4px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background: var(--fix_back);
`;

const Measure = styled.p`
  color: var(--back_fix);
  font-size: 10px;
  font-weight: 600;
  @media ${media.tablet} {
    font-size: 18px;
  }
`;

export {
  ListBox,
  ListTitle,
  FirstListTitle,
  SecondListTitle,
  LastListTitle,
  ListContainer,
  ListItem,
  RILImageWrapper,
  RILImage,
  Name,
  MeasureWrapper,
  Measure,
  CheckboxInput,
};
