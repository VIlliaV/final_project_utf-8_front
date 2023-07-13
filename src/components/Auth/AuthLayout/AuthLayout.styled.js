import styled from 'styled-components';
import authContainerBckgrnd from 'img/authContainerBckgrnd.svg'
import authContainerBckgrndTablet from 'img/authContainerBckgrndTablet.svg'
import authContainerBckgrndDesktop from 'img/authContainerBckgrndDesktop.svg';
import authorizationPageImage from 'img/authorizationPageImage.svg';
import authorizationPageImageTablet from 'img/authorizationPageImageTablet.svg';
import authorizationPageImageDesktop from 'img/authorizationPageImageDesktop.svg';


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: ${props => (props.path === '/register' ? '118px' : '153px')};

  background-color: #fafafa;
  background-image: url(${authContainerBckgrnd});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 300px;

  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    background-image: url(${authContainerBckgrndTablet});
    padding-bottom: ${props => (props.path === '/register' ? '59px' : '120px')};
    background-position-y: 350px;
    /* padding: 96px 134px 59px; */
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${authContainerBckgrndDesktop});
    /* padding-bottom: ${props => (props.path === '/register' ? '122px' : '153px')}; */
    /* background-size: 100vw 45vh; */
    /* background-position-y: 350px; */
    /* background-position-y: 444px; */
    flex-direction: row;
    padding: 0;
    /* padding-left: 0;
    padding-right: 0; */
    /* padding: 115px 180px 122px 113px; */
  }
`;



export const Image = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 87px;
  width: 100%;
  height: 250px;
  background-image: url(${authorizationPageImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;

  @media screen and (min-width: 375px) {
    background-size: cover;
    width: 285px;
    height: 250px;
  }

  @media screen and (min-width: 768px) {
    background-image: url(${authorizationPageImageTablet});
    margin-top: 96px;
    width: 409px;
    height: 359px;
    background-size: cover;
  }

  @media screen and (min-width: 1440px) {
    width: 532px;
    height: 468px;
    margin-top: 115px;
    margin-left: 113px;
    /* margin-bottom: auto; */
    margin-right: 115px;
    background-image: url(${authorizationPageImageDesktop});
  }
`;
