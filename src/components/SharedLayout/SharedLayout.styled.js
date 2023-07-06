import styled from 'styled-components';
import leaf from '../../images/leaf.jpg';

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  background-image: url(${leaf});
  background-size: cover;
  background-position: center 50%;
`;
