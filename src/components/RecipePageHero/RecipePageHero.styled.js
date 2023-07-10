import styled from 'styled-components';

const TitleRecipe = styled.h1`
  margin-top: 80px;
  margin-bottom: 18px;
  color: #8baa36;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.48px;
`;

const Description = styled.p`
  margin-bottom: 24px;
  display: flex;
  width: 299px;
  flex-direction: column;
  color: #22252a;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.24px;
`;
const Button = styled.button`
  width: 150px;
  margin-bottom:42px;
  display: block;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  background-color: transparent;
  padding: 10px 18px;
  border: 1px solid #8baa36;
  color: #22252a;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  border-radius: 24px 44px;
`;

const Time = styled.p`
margin-bottom:90px;
  color: #23262a;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.24px;
`;

export { TitleRecipe, Description, Button, Time };
