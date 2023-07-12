import { NavLink } from 'react-router-dom';
import { media } from 'utils/media';

const { styled } = require('styled-components');

export const BurgerMenuContainer = styled.div`
    position: relative;
    z-index: 10;
`;

export const BurgerIcon = styled.div`
    font-size: 24px;
    cursor: pointer;
`;

export const Menu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ebf3d4;
    padding: 20px;
    display: none;

    &.visible {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const CloseButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 18px;
    cursor: pointer;
`;

export const StyledNavLink = styled(NavLink)`
    display: block;
    padding: 10px;
    color: #333;
    text-decoration: none;
    transition: background-color 0.3s;
    margin-bottom: 32px;

    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.36px;

    &:hover {
        background-color: #ddd;
    }

    &.active {
        color: #8baa36;
        font-weight: bold;
    }

    @media ${media.tablet} {
        margin-bottom: 32px;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: -0.48px;
    }
`;

export const Switcher = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 18px;
    cursor: pointer;
`;
