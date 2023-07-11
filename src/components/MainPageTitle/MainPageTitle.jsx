import React from 'react';
import { HeadText } from './MainPageTitle.styled';

function MainPageTitle({ title }) {
    return (
        <HeadText>
            {title}
            <span className="first-square"></span>
            <span className="second-square"></span>
            <span className="third-square"></span>
        </HeadText>
    );
}

export default MainPageTitle;
