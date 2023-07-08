import styled from 'styled-components';


export const Container = styled.div`
  padding: 32px 28px 40px;
  border-radius: 30px;
  background-color: #2a2c36;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.h1`
  color: #fafafa;
  /* font-family: Poppins; */
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
  width: 100%;
  gap: 12px;
`;

export const Input = styled.input`
  background: transparent;
  border: 1px solid #57575e;
  border-radius: 6px;
  padding: 13.5px 14px;
  color: #fafafa;
`;

export const SubmitButton = styled.button`
  border-radius: 6px;
  background: #8baa36;
  color: #fafafa;
  border: none;
  padding-top: 14px;
  padding-bottom: 14px;
`;