import styled from 'styled-components';
import { media } from 'utils/media';

export const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 44px;
  width: 100%;
  height: 45px;

  @media ${media.mobile} {
    width: 239px;
  }

  @media ${media.tablet} {
    width: 344px;
    margin-top: 40px;
    height: 67px;
    /* margin-bottom: 342px; */
  }
`;
export const RegisterButton = styled.button`
  background-color: #8baa36;
  color: #fafafa;
  border-radius: 24px 44px;
  margin-right: 12px;
  width: 50%;
  height: 100%;
  border: none;

  @media ${media.mobile} {
    width: 132px;
    height: 45px;
  }

  @media ${media.tablet} {
    width: 184px;
    height: 67px;
    margin-right: 18px;
  }

  &:hover {
    background-color: #22252a;
    color: #fafafa;
    cursor: pointer;
  }
`;

export const LoginButton = styled.button`
  display: block;
  background-color: transparent;
  color: #fafafa;
  border-radius: 24px 44px;
  width: 40%;
  height: 100%;
  border: 2px solid #fafafa;

  @media ${media.mobile} {
    width: 95px;
    height: 45px;
  }

  @media ${media.tablet} {
    width: 141px;
    height: 67px;
  }

  &:hover {
    background-color: #8baa36;
    color: #fafafa;
    border: none;
    cursor: pointer;
  }
`;