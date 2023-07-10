import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MyRecipesItem = styled.li`
    display: flex;
    justify-content: center;

    padding: 14px 9px;

    background-color: #ffffff;
`;

export const MyRecipesImg = styled.img`
    width: 124px;
    height: 124px;
`;

export const TrashIcon = styled.img`
    width: 14px;
    height: 14px;
`;

export const TitleIconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 10px;
`;

export const ImgWrapper = styled.div`
    margin-right: 14px;
`;

export const MyRecipesItemTitle = styled.h2`
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: -0.24px;
    text-align: left;

    color: #3e4462;
`;

export const MyRecipeInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 187px;
`;

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 16px;
`;

export const MyRecipesDescription = styled.p`
    font-size: 8px;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: -0.02em;
    text-align: left;
`;

export const SvgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;

    border-radius: 4px;
    background-color: #8baa36;
`;

export const MyRecipeTime = styled.p`
    font-size: 10px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: -0.24px;
    text-align: left;
`;

export const MyRecipeBtn = styled(NavLink)`
    display: inline-block;
    padding: 6px 14px;

    background-color: #8baa36;
    color: #fafafa;
    border-radius: 24px 44px;
    border: transparent;
    text-decoration: none;

    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
`;

export const TimeBtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
`;
