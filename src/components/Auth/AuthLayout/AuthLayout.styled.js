import styled from 'styled-components';
import bottomAuthContainerBckgrnd from 'img/bottomAuthContainerBckgrnd.svg'
// import bottomAuthContainerBckgrndTablet from 'img/bottomAuthContainerBckgrndTablet.svg'
// import bottomAuthContainerBckgrndDesktop from 'img/bottomAuthContainerBckgrndDesktop.svg';


export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 812px;
  background-color: #fafafa;
  padding: 87px 20px 118px;
  background-image: url(${bottomAuthContainerBckgrnd});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  box-sizing: border-box;
`;



export const Image = styled.img`
margin-left: auto;
margin-right: auto;
  width: 285px;
  height: 250px;
`;
