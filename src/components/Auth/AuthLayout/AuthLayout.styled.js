import styled from 'styled-components';
import authContainerBckgrnd from 'img/authContainerBckgrnd.svg'
import authContainerBckgrndTablet from 'img/authContainerBckgrndTablet.svg'
import authContainerBckgrndDesktop from 'img/authContainerBckgrndDesktop.svg';
import authorizationPageImage from 'img/authorizationPageImage.svg';
import authorizationPageImageTablet from 'img/authorizationPageImageTablet.svg';
import authorizationPageImageDesktop from 'img/authorizationPageImageDesktop.svg';
import { media } from 'utils/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  min-height: 100vh;

  padding-top: 87px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: ${props => (props.path === '/register' ? '118px' : '153px')};

  background-color: #fafafa;
  background-image: url(${authContainerBckgrnd});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 290px;

  box-sizing: border-box;

  @media ${media.tablet} {
    background-image: url(${authContainerBckgrndTablet});
    padding-top: 96px;
    padding-bottom: ${props => (props.path === '/register' ? '59px' : '120px')};
    background-position-y: 330px;
  }

  @media ${media.desktop} {
    background-image: url(${authContainerBckgrndDesktop});
    background-position-y: 350px;
    flex-direction: row;
    padding: 0;
    padding-top: 115px;
    padding-left: 113px;
    padding-right: 180px;
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
  box-sizing: border-box;

  @media screen and (min-width: 375px) {
    background-size: cover;
    width: 285px;
    height: 250px;
  }

  @media ${media.tablet} {
    background-image: url(${authorizationPageImageTablet});
    width: 409px;
    height: 359px;
    background-size: cover;
  }

  @media ${media.desktop} {
    width: 532px;
    height: 468px;
    margin-right: 115px;
    background-image: url(${authorizationPageImageDesktop});
  }
`;
