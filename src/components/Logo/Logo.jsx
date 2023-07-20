import React from 'react';
import logo from 'img/icon.svg';
import { LogoImg, LogoNav } from './Logo.styled';


const Logo = () => {
  return (
    <LogoNav to="/">
      <LogoImg src={logo} alt="" />
    </LogoNav>
  );
};

export default Logo;