import React, { useState } from 'react';
import close from './img/x.svg';
import menu from './img/menu.svg';
import { BurgerIcon, BurgerMenuContainer, CloseButton, Menu, StyledNavLink, Switcher } from './BurgerMenu.styled';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitch';

const BurgerMenu = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const handleToggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleLinkClick = () => {
        setMenuVisible(false);
    };

    return (
        <BurgerMenuContainer>
            <BurgerIcon onClick={handleToggleMenu}>
                <img src={menu} alt="" />
            </BurgerIcon>
            <Menu className={menuVisible ? 'visible' : ''}>
                <CloseButton onClick={handleToggleMenu}>
                    <img src={close} alt="" />
                </CloseButton>

                <StyledNavLink
                    to="/categories/:categoryName"
                    onClick={handleLinkClick}
                    className={navData => (navData.isActive ? 'active-style' : 'none')}
                >
                    Categories
                </StyledNavLink>

                <StyledNavLink
                    to="/add"
                    onClick={handleLinkClick}
                    className={navData => (navData.isActive ? 'active-style' : 'none')}
                >
                    Add recipes
                </StyledNavLink>
                <StyledNavLink
                    to="/my"
                    onClick={handleLinkClick}
                    className={navData => (navData.isActive ? 'active-style' : 'none')}
                >
                    My recipes
                </StyledNavLink>
                <StyledNavLink
                    to="/favorite"
                    onClick={handleLinkClick}
                    className={navData => (navData.isActive ? 'active-style' : 'none')}
                >
                    Favorites
                </StyledNavLink>
                <StyledNavLink
                    to="/shopping-list"
                    onClick={handleLinkClick}
                    className={navData => (navData.isActive ? 'active-style' : 'none')}
                >
                    Shopping list
                </StyledNavLink>
                <StyledNavLink
                    to="/search"
                    onClick={handleLinkClick}
                    className={navData => (navData.isActive ? 'active-style' : 'none')}
                >
                    Search
                </StyledNavLink>
				<Switcher>
				<ThemeSwitcher />
				</Switcher>

            </Menu>
        </BurgerMenuContainer>
    );
};

export default BurgerMenu;
