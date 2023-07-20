import React, { useEffect, useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitch';
import {
  HideContentDesktop,
  MainDiv,
  ResponsiveHeaderContainer,
  ShowContentTablet,
  UserDiv,
} from './Header.styled';

import AvatarButtonComponent from './AvatarButton/AvatarButton';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { useLocation } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';

const Header = () => {
  const [shouldChangeStyle, setShouldChangeStyle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/main') {
      setShouldChangeStyle(true);
    } else {
      setShouldChangeStyle(false);
    }
  }, [location]);

  return (
    <ResponsiveHeaderContainer>
      <MainDiv>
	  <Logo />
        <HideContentDesktop>
		<Navigation shouldChangeStyle={shouldChangeStyle ? 'active-link' : ''} />
        </HideContentDesktop>
        <UserDiv>
          <AvatarButtonComponent shouldChangeStyle={shouldChangeStyle ? 'active-link' : ''} />
          <ShowContentTablet>
            <BurgerMenu shouldChangeStyle={shouldChangeStyle}/>
          </ShowContentTablet>
          <HideContentDesktop>
            <ThemeSwitcher />
          </HideContentDesktop>
        </UserDiv>
      </MainDiv>
    </ResponsiveHeaderContainer>
  );
};

export default Header;
