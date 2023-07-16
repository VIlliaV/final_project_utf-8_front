import React from 'react';
import { HeadText } from './MainPageTitle.styled';
import { useAuth } from 'utils/hooks/useAuth';

function MainPageTitle({ title }) {
  const { isThemeToggle } = useAuth();
  return (
    <HeadText datatype={isThemeToggle.toString()}>
      {title}
      <span className="first-square"></span>
      <span className="second-square"></span>
      <span className="third-square"></span>
    </HeadText>
  );
}

export default MainPageTitle;
