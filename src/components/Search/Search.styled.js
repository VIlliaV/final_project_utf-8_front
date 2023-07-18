import styled from 'styled-components';
import { media } from '../../utils/media';

export const SearchForm = styled.form`
  text-align: center;

  input {
    box-sizing: border-box;
    height: 52px;
    font-size: 12px;
    outline: none;
    background-color: #fff;
    background-color &[datatype='true'] {
      background-color: var(--fix-transparent);
    }
    border-width: 1px;
    border-style: solid;
    border-color: #f0f0f0;
    border-color &[datatype='true'] {
      border-color: rgba(250, 250, 250, 0.5);
    }
    border-radius: 24px 44px;

    @media ${media.mini} {
      max-width: 90%;
      padding: 0 70px 0 10px;
    }

    @media ${media.mobile} {
      width: 295px;
      padding: 0 145px 0 32px;
    }

    &::placeholder {
      color: #bdbdbd;
      color &[datatype='true'] {
        color: rgba(250, 250, 250, 0.5);
      }
    }

    &:focus {
      border-color: rgba(35, 38, 42, 0.2);
      color: var(--text_theme_1);
    }
  }

  button {
    height: 52px;
    color: var(--back_fix);
    border-radius: 24px 44px;
    outline: none;
    font-size: 14px;
    cursor: pointer;

    @media ${media.mini} {
      width: 60px;
      margin-left: -60px;
    }

    @media ${media.mobile} {
      width: 113px;
      margin-left: -113px;
    }
  }

  .origin-button {
    background-color: var(--active_theme_2);
    border: 1px solid var(--active_theme_2);

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus,
    &:hover {
      background-color: var(--fix_back);
      background-color &[datatype='true'] {
        background-color: var(--fix-transparent);
      }
      border-color: var(--fix_back);
    }
  }

  .inversion-button {
    background-color: var(--fix_back);
    border: 1px solid var(--fix_back);

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus,
    &:hover {
      background-color: var(--fix_back_2);
      background-color &[datatype='true'] {
        background-color: var(--fix-transparent);
      }
      border-color: var(--active_theme_2);
    }
  }

  @media ${media.tablet} {
    text-align: left;

    input {
      width: 362px;
      height: 59px;
      padding: 0 199px 0 38px;
      font-size: 16px;
    }

    button {
      margin-left: -161px;
      width: 161px;
      height: 59px;
      font-size: 16px;
    }
  }

  @media ${media.desktop} {
    input {
      width: 510px;
      height: 70px;
      padding: 0 209px 0 48px;
    }

    button {
      height: 70px;
    }
  }
`;
