import styled from 'styled-components';
import { media } from 'utils/media';
import { FiUser } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { CgLock } from 'react-icons/cg';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export const OpenedEye = styled(AiOutlineEye)`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 13.5px;
  right: 40px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  @media ${media.tablet} {
    top: 17.5px;
    right: 50px;
    width: 20px;
    height: 20px;
  }
`;

export const ClosedEye = styled(AiOutlineEyeInvisible)`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 13.5px;
  right: 40px;
  opacity: 0.7;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;

  &:hover {
    opacity: 1;
  }

  @media ${media.tablet} {
    top: 17.5px;
    right: 50px;
    width: 20px;
    height: 20px;
  }
`;

export const SuccessStatusIcon = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 13.5px;
  right: 14px;
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;

  @media ${media.tablet} {
    top: 17.5px;
    right: 18px;
    width: 20px;
    height: 20px;
  }
`;

export const NameIcon = styled(FiUser)`
  width: 18px;
  height: 18px;
  color: #fff;
  position: absolute;
  top: 13.5px;
  left: 14px;
  opacity: 0.7;

  color: ${prop => {
    if (prop.$haserror) {
      return 'red';
    } else if (prop.$correct) {
      return 'green';
    }
  }};

  @media ${media.tablet} {
    top: 17.5px;
    left: 18px;
    width: 24px;
    height: 24px;
  }
`;

export const EmailIcon = styled(HiOutlineMail)`
  width: 18px;
  height: 18px;
  color: #fff;
  position: absolute;
  top: 13.5px;
  left: 14px;
  opacity: 0.7;

  color: ${prop => {
    if (prop.$haserror) {
      return 'red';
    } else if (prop.$correct) {
      return 'green';
    }
  }};

  @media ${media.tablet} {
    top: 17.5px;
    left: 18px;
    width: 24px;
    height: 24px;
  }
`;

export const PasswordIcon = styled(CgLock)`
  width: 18px;
  height: 18px;
  color: #fff;
  position: absolute;
  top: 13.5px;
  left: 14px;
  opacity: 0.7;

  color: ${prop => {
    if (prop.$haserror) {
      return 'red';
    } else if (prop.$correct) {
      return 'green';
    }
  }};

  @media ${media.tablet} {
    top: 17.5px;
    left: 18px;
    width: 24px;
    height: 24px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -32px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  background-color: transparent;

  @media ${media.mobile} {
    width: 335px;
  }

  @media ${media.tablet} {
    margin-top: -12px;
    width: 500px;
  }

  @media ${media.desktop} {
    margin: 0;
    margin-top: auto;
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
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);

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
  padding: 13.5px 40px;
  color: #fafafa;
  box-sizing: border-box;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  @media ${media.tablet} {
    height: 59px;
    padding: 16px 50px;

    font-size: 18px;
    letter-spacing: -0.36px;
  }

  &:hover {
    transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
    border-color: #fafafa;
    &::placeholder {
      transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
      color: #fafafa;
      opacity: 1;
    }
  }

  &::placeholder {
    color: #fff;
    opacity: 0.5;
  }
`;

export const NameInput = styled(Input)`
  border-color: ${prop => {
    if (prop.$haserror) {
      return 'red';
    } else if (prop.$correct) {
      return 'green';
    }
  }};
`;

export const EmailInput = styled(Input)`
  border-color: ${prop => {
    if (prop.$haserror) {
      return 'red';
    } else if (prop.$correct) {
      return 'green';
    }
  }};
`;

export const PasswordInput = styled(Input)`
  padding-left: 40px;
  padding-right: 58px;
  border-color: ${prop => {
    if (prop.$haserror) {
      return 'red';
    } else if (prop.$correct) {
      return 'green';
    }
  }};

  @media ${media.tablet} {
    padding-left: 50px;
    padding-right: 70px;
  }

  &:focus {
    transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
    outline: none !important;
    border-color: ${prop => {
      if (prop.$tooshort.length > 0 && prop.$tooshort.length < 6 && prop.$path === '/register') {
        return 'yellow';
      }
    }};
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
    transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
    color: #22252a;
    cursor: pointer;
  }

  @media ${media.tablet} {
    margin-top: 26px;
    height: 59px;
  }
`;

export const GoogleButton = styled.a`
  height: 45px;
  border-radius: 6px;
  background-color: #fafafa;
  color: #23262a;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-top: 16px;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.12;

  @media ${media.tablet} {
    margin-top: 26px;
    height: 59px;
  }

  &:hover {
    opacity: 1;
    transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
  }
`;

export const Link = styled.a`
  display: inline-flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 18px;
  color: #fafafa;
  cursor: pointer;
  text-decoration: underline;
  opacity: 0.7;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media ${media.tablet} {
    font-size: 16px;
  }

  &:hover {
    opacity: 1;
    transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
  }
`;

const InputContainer = styled.div`
  margin-bottom: 12px;
  min-width: 100%;
  position: relative;
  color: #fff;

  @media ${media.tablet} {
    margin-bottom: 24px;
  }
`;

export const NameInputContainer = styled(InputContainer)`
  &:hover ${NameIcon} {
    color: #fafafa;
    opacity: 1;
    transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
  }
`;

export const EmailInputContainer = styled(InputContainer)`
  &:hover ${EmailIcon} {
    color: #fafafa;
    opacity: 1;
    transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
  }
`;

export const PasswordInputContainer = styled(InputContainer)`
  &:hover ${PasswordIcon} {
    color: #fafafa;
    opacity: 1;
    transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
  }
`;

export const InputErrorContainer = styled.div`
  margin-top: 8px;
  color: red;
`;

export const InputWarningContainer = styled.div`
  margin-top: 8px;
  color: yellow;
`;

export const ErrorMessage = styled.div`
  color: red;
  /* margin-top: 8px; */
  margin-left: auto;
  margin-right: auto;
`;

export const EmailMessage = styled(ErrorMessage)`
  color: #fafafa;
  text-align: center;
`;

export const ResendButton = styled.a`
  border-radius: 6px;
  background-color: #fafafa;
  color: #23262a;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding-top: 7px;
  padding-bottom: 7px;
  margin-top: 16px;
  cursor: pointer;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.12;

  &:hover {
    opacity: 1;
    transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
  }
`;