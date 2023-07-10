import styled from 'styled-components';

export const HeadText = styled.h1`
  position: relative;
  color: #001833;
  font-family: Poppins;
  font-size: 44px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.88px;

  & .first-square {
    position: absolute;
    top: -29.4px;
    left: 235px;
    display: block;
    width: 14px;
    height: 14px;
    transform: rotate(-25deg);
    flex-shrink: 0;
    border-radius: 3px;
    background: var(--active);
  }

  & .second-square {
    position: absolute;
    bottom: 0;
    left: 710px;
    display: block;
    width: 12px;
    height: 12px;
    transform: rotate(-25deg);
    flex-shrink: 0;
    border-radius: 3px;
    background: rgb(34, 37, 42);
  }
  & .third-square {
    position: absolute;
    top: -16.4px;
    left: 1150px;
    display: block;
    width: 14px;
    height: 14px;
    transform: rotate(-25deg);
    flex-shrink: 0;
    border-radius: 3px;
    background: var(--active);
  }
`;
