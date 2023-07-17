import styles from 'styled-components';
import { media } from '../../utils/media';
import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';

const ListBox = styles.ul`
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

const ListTitle = styles.li`
    color: var(--back_theme_1);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.3px;
    height: 18px;
    @media ${media.tablet} {
        font-size: 18px;
        letter-spacing: 0.54px;
    }
`;

const FirstListTitle = styles(ListTitle)`
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

const SecondListTitle = styles(ListTitle)`
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

const LastListTitle = styles(ListTitle)`
    width: 54px;
    @media ${media.tablet} {
        width: 97px;
    }
    @media ${media.desktop} {
        width: 97px;
    }
`;

const ListContainer = styles.ul`
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

const ListItem = styles.li`
    display: flex;
    width: 343px;
    height: 86px;
    margin-bottom: 16px;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    background: #ebf3d4;
  &[datatype='true'] {
        background: #2A2C36;
    }
    &:last-child {
        margin-bottom: 0px;
    }
    @media ${media.tablet} {
        width: 704px;
        height: 178px;
        margin-bottom: 24px;
    }
    @media ${media.desktop} {
        width: 1240px;
        height: 182px;
    }
`;

const Image = styles.img`
    margin-right: 12px;
    margin-left: 10px;
    width: 57px;
    height: 57px;
    padding: 4px;
    @media ${media.tablet} {
        width: 112px;
        height: 112px;
        padding: 17px 16px;
        margin-right: 24px;
        margin-left: 24px;
    }
    @media ${media.desktop} {
        width: 128px;
        height: 128px;
        padding: 26px;
        margin-right: 40px;
        margin-left: 32px;
    }
`;

const Name = styles.p`
    color: var(--text_second_theme_1);
    font-size: 12px;
    font-weight: 500;
    line-height: 1.16;
    letter-spacing: -0.24px;
    margin-right: auto;
    @media ${media.tablet} {
        font-size: 24px;
    }
`;

const MeasureWrapper = styles.div`
    padding: 4px;
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 4px;
    background: var(--fix_back);
`;

const Measure = styles.p`
    color: var(--back_theme_1);
    font-size: 10px;
    font-weight: 600;
    @media ${media.tablet} {
        font-size: 18px;
    }
`;

const CheckboxInput = styled(Checkbox)`
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

export {
  ListBox,
  ListTitle,
  FirstListTitle,
  SecondListTitle,
  LastListTitle,
  ListContainer,
  ListItem,
  Image,
  Name,
  MeasureWrapper,
  Measure,
  CheckboxInput,
};
