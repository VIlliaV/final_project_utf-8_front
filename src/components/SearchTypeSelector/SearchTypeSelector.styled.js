import { styled } from 'styled-components';
import { media } from '../../utils/media';

export const Form = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;

  label {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: -0.24px;
    color: rgba(0, 24, 51, 1);
    margin-right: 15px;
  }

  @media ${media.tablet} {
    label {
      font-size: 14px;
      line-height: 1.28;
      margin-right: 18px;
    }
  }

  @media ${media.desktop} {
    label {
      font-size: 18px;
      line-height: 1.33;
    }
  }
`;

export const selectStyles = {
  indicatorSeparator: styles => ({ display: 'none' }),
  option: (styles, state) => ({
    ...styles,
    color: 'rgba(0, 0, 0, 1)',
    opacity: '0.5',
    fontSize: '12px',
    lineHeight: 'normal',
    letterSpacing: '-0.24px',
    border: 'none',

    backgroundColor: state.isFocused ? 'rgba(217, 217, 217, 1)' : 'rgba(250, 250, 250, 1)',
    '&:hover': {
      backgroundColor: 'rgba(217, 217, 217, 1)',
    },
    '@media screen and (min-width: 768px)': {
      ...styles['@media screen and (min-width: 768px)'],
      fontSize: '14px',
      letterSpacing: '-0.28px',
    },
  }),
  menu: styles => ({
    ...styles,
    border: 'none',
    boxShadow: 'none',
    '@media screen and (min-width: 768px)': {
      ...styles['@media screen and (min-width: 768px)'],
      width: '175px',
    },
    '@media screen and (min-width: 1440px)': {
      ...styles['@media screen and (min-width: 1440px)'],
      width: '198px',
    },
  }),
  menuList: styles => ({
    ...styles,
    padding: 0,
  }),
  control: (styles, state) => ({
    ...styles,
    backgroundColor: 'rgba(217, 217, 217, 1)',
    color: 'rgba(0, 0, 0, 1)',
    opacity: '0.5',
    outline: 'none',
    border: 'none',
    boxShadow: 'none',

    '&:hover': {
      border: 'none',
    },
    '@media screen and (min-width: 768px)': {
      ...styles['@media screen and (min-width: 768px)'],
      width: '175px',
      height: '41px',
    },
    '@media screen and (min-width: 1440px)': {
      ...styles['@media screen and (min-width: 1440px)'],
      width: '198px',
      height: '49px',
    },
  }),
  placeholder: styles => ({
    ...styles,
    fontSize: '12px',
    lineHeight: 'normal',
    letterSpacing: '-0.24px',
  }),
  container: styles => ({
    ...styles,
    width: '146px',
    height: '34px',
    '@media screen and (min-width: 768px)': {
      ...styles['@media screen and (min-width: 768px)'],
      width: '175px',
      height: '41px',
    },
    '@media screen and (min-width: 1440px)': {
      ...styles['@media screen and (min-width: 1440px)'],
      width: '198px',
      height: '49px',
    },
  }),
};