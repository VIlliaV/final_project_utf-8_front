import { styled } from 'styled-components';
import { media } from '../../utils/media';

export const Form = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 50px;
  label {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: -0.24px;
    color: var(--head_theme_1);
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
    color: state.isFocused ? 'var(--select_text_1)' : 'var(--primary)',
    opacity: '0.5',
    fontSize: '12px',
    lineHeight: 'normal',
    letterSpacing: '-0.24px',
    border: 'none',
    cursor: 'pointer',
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      display: 'inline-block',
      height: '1em',
      width: '100%',
      borderBottom: '1px solid',
      color: 'var(--active)',
      marginTop: '10px',
      opacity: 0,
      transition: 'opacity 0.35s, transform 0.35s',
      transform: 'scale(0,1)',
    },

    '&:hover:after': {
      opacity: 1,
      transform: 'scale(1)',
    },
    backgroundColor: state.isFocused ? 'var(--active_select_1)' : 'var(--active_select_1)',

    '@media screen and (min-width: 768px)': {
      ...styles['@media screen and (min-width: 768px)'],
      fontSize: '14px',
      letterSpacing: '-0.28px',
    },
  }),
  menu: styles => ({
    ...styles,
    border: 'none',
    marginTop: 0,
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
    backgroundColor: 'var(--active_select_1)',
    padding: 0,
  }),
  control: (styles, state) => ({
    ...styles,
    backgroundColor: 'var(--selectBack_theme_1)',
    color: 'var(--select_text_1)',
    opacity: '0.5',
    outline: 'none',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer',

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
