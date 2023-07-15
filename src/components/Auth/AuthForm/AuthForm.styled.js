import styled from 'styled-components';
import { media } from 'utils/media';
import { FiUser } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { CgLock } from 'react-icons/cg';


 export const SuccessStatusIcon = styled.img`
   width: 18px;
   height: 18px;
   position: absolute;
   top: 13.5px;
   right: 14px;

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
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
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
    margin-top: ${prop => (prop.$isregisterpage === "true" ? '7px' : '40px')};
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
    border-color: #fafafa;
    &::placeholder {
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
  border-color: ${prop => {
    if (prop.$haserror) {
      return 'red';
    } else if (prop.$correct) {
      return 'green';
    }
  }};
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
  text-decoration: underline;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media ${media.tablet} {
    font-size: 16px;
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
  }
`;

export const EmailInputContainer = styled(InputContainer)`
  &:hover ${EmailIcon} {
    color: #fafafa;
    opacity: 1;
  }
`;

export const PasswordInputContainer = styled(InputContainer)`
  &:hover ${PasswordIcon} {
    color: #fafafa;
    opacity: 1;
  }
`;

export const InputErrorContainer = styled.div`
  margin-top: 8px;
  color: red; 
`;

