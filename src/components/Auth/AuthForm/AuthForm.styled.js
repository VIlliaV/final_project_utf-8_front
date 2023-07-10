import styled from 'styled-components';


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 305px;
  width: 335px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  background-color: transparent;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  width: 335px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 28px 40px;
  border-radius: 30px;
  background-color: #2a2c36; 
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);  
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
  width: 100%;
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
`;

export const SubmitButton = styled.button`
  border-radius: 6px;
  background: #8baa36;
  color: #fafafa;
  border: none;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-top: 16px;
`;

export const Link = styled.a`
  display: inline-flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 18px;
  color: #fafafa;
  cursor: pointer;
`;
