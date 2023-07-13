import styled from 'styled-components';
import { media } from 'utils/media';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -32px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  background-color: transparent ;

  @media ${media.mobile} {
    width: 335px;
  }

  @media ${media.tablet} {
    margin-top: -12px;
    width: 500px;
  }

  @media ${media.desktop} {
    margin: 0;
    margin-top: ${prop => (prop.isRegisterPage ? '7px' : '40px')};
    margin-bottom: auto;
    margin-right: auto;
  }
`;


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 30px;
    box-sizing: border-box;
    padding: 32px 28px 40px;
    background-color: #2a2c36;

     @media ${media.tablet} {
        padding: 44px 50px;
    }
`;



export const Header = styled.h1`
  color: #fafafa;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.48px;

  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.16;
  letter-spacing: -0.48px;

  @media ${media.tablet} {
    font-size: 28px;
    line-height: 1.07; 
    letter-spacing: -0.56px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  background: transparent;
  border: 1px solid #57575e;
  border-radius: 6px;
  padding: 13.5px 14px;
  color: #fafafa;
  box-sizing: border-box;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  @media ${media.tablet} {
    height: 59px;
    padding: 16px 18px;

    font-size: 18px;
    letter-spacing: -0.36px;
  }
`;

export const SubmitButton = styled.button`
  height: 45px;
  border-radius: 6px;
  background-color: #8baa36;
  color: #fafafa;
  border: none;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-top: 16px;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.12;

  &:hover {
    color: #22252a;
    cursor: pointer;
  }

  @media ${media.tablet} {
    margin-top: 26px;
    height: 59px;
  }
`;

export const Link = styled.a`
  display: inline-flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 18px;
  color: #fafafa;
  cursor: pointer;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media ${media.tablet} {
    font-size: 16px;
  }
`;


export const InputContainer = styled.div`
  margin-bottom: 12px;
  min-width: 100%;

  @media ${media.tablet} {
    margin-bottom: 24px;
  }
`;

export const InputErrorContainer = styled.div`
  margin-top: 8px;
  color: red;
`;