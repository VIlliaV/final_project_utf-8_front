import styled from 'styled-components';
import { media } from '../../utils/media';

export const SearchForm = styled.form`
  text-align: center;

  input {
    box-sizing: border-box;
    width: 295px;
    height: 52px;
    padding: 0 145px 0 32px;
    font-size: 12px;
    outline: none;
    border: 1px solid #f0f0f0;
    border-radius: 24px 44px;

    &::placeholder {
      color: #bdbdbd;
    }

    &:focus {
      border-color: rgba(35, 38, 42, 0.2);
      color: #23262a;
    }
  }

  button {
    margin-left: -113px;
    width: 113px;
    height: 52px;
    color: #fafafa;
    border-radius: 24px 44px;
    outline: none;
    font-size: 14px;
    cursor: pointer;
  }

  .origin-button {
    background-color: #22252a;
    border: 1px solid #22252a;

    &:focus,
    &:hover {
      background-color: #8baa36;
      border-color: #8baa36;
    }
  }

  .inversion-button {
    background-color: #8baa36;
    border: 1px solid #8baa36;

    &:focus,
    &:hover {
      background-color: #22252a;
      border-color: #22252a;
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
