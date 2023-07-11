import styled from 'styled-components';
import authContainerBckgrnd from 'img/authContainerBckgrnd.svg'
import authContainerBckgrndTablet from 'img/authContainerBckgrndTablet.svg'
import authContainerBckgrndDesktop from 'img/authContainerBckgrndDesktop.svg';
import authorizationPageImage from 'img/authorizationPageImage.svg';
import authorizationPageImageDesktop from 'img/authorizationPageImageDesktop.svg';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fafafa;
    padding: 87px 20px 118px;
    background-image: url(${authContainerBckgrnd});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 300px;
    box-sizing: border-box;

    @media screen and (min-width: 768px) {
        background-image: url(${authContainerBckgrndTablet});
        background-position-y: 350px;
        padding: 96px 134px 59px;
    }

    @media screen and (min-width: 1440px) {
        background-image: url(${authContainerBckgrndDesktop});
        background-size: 100vw 50vh;
        background-position-y: 450px;
        flex-direction: row;
        padding: 115px 180px 122px 113px;
    }
`;



export const Image = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 250px;
    background-image: url(${authorizationPageImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        min-width: 409px;
        min-height: 359px;
        background-size: contain;
    }

    @media screen and (min-width: 1440px) {
        width: 532px;
        height: 468px;
        margin-left: auto;
        margin-bottom: auto;
        margin-right: 115px;
        background-image: url(${authorizationPageImageDesktop});
    }
`;
