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
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left 0px top 322px;
    box-sizing: border-box;

    @media screen and (min-width: 570px) {
        background-image: url(${authContainerBckgrndTablet});
        /* background-size: cover; */
    }

    @media screen and (min-width: 768px) {
        /* background-image: url(${authContainerBckgrndTablet}); */
        background-position: top 419px right 0;
        padding: 96px 134px 59px;
        /* background-size: cover; */
    }

    @media screen and (min-width: 1150px) {
        background-size: cover;
        /* background-position: top 419px; */
    }

    @media screen and (min-width: 1440px) {
        background-image: url(${authContainerBckgrndDesktop});
        background-size: contain;
        background-position: top 444px right 0;
        flex-direction: row;
        padding: 115px 180px 122px 113px;
    }
`;



export const Image = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 285px;
    height: 250px;
    background-image: url(${authorizationPageImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;


    @media screen and (min-width: 768px) and (max-width: 1439px) {
        width: 409px;
        height: 359px;
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
