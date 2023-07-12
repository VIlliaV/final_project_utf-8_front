import styled from 'styled-components';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -32px;
    max-width: 335px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);

    @media screen and (min-width: 768px) {
        margin-top: -12px;
        max-width: 500px;
    }

    @media screen and (min-width: 1440px) {
        margin-top: auto;
        margin-left: 0;
        margin-right: auto;
        margin-bottom: 0;
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

     @media screen and (min-width: 768px) {
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
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`;

export const Input = styled.input`
    height: 45px;
    background: transparent;
    border: 1px solid #57575e;
    border-radius: 6px;
    padding: 13.5px 14px;
    margin-bottom: 12px;
    color: #fafafa;
    box-sizing: border-box;

    @media screen and (min-width: 768px) {
        height: 59px;
        margin-bottom: 24px;
        padding: 16px 18px;
    }

    @media screen and (min-width: 1440px) {
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

    &:hover {
        color: #22252a;
        cursor: pointer;
    }

    @media screen and (min-width: 768px) {
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
`;
