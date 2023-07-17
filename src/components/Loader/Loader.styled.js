import { keyframes } from 'styled-components';
import styled from 'styled-components';

const jump = keyframes`
0% {
        top: 24%;
        transform: rotateX(85deg);
    }

    25% {
        top: 10%;
        transform: rotateX(0deg);
    }

    50% {
        top: 30%;
        transform: rotateX(85deg);
    }

    75% {
        transform: rotateX(0deg);
    }

    100% {
        transform: rotateX(85deg);
    }
`;

const flip = keyframes`
0% {
        transform: rotate(0deg);
    }

    5% {
        transform: rotate(-27deg);
    }

    30%,
    50% {
        transform: rotate(0deg);
    }

    55% {
        transform: rotate(27deg);
    }

    83.3% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(0deg);
    }
`;

const switchSide = keyframes`
0% {
        transform: rotateY(0deg);
    }

    50% {
        transform: rotateY(180deg);
    }

    100% {
        transform: rotateY(0deg);
    }
`;

const fly = keyframes`
0% {
        bottom: 26%;
        transform: rotate(0deg);
    }

    10% {
        bottom: 40%;
    }

    50% {
        bottom: 26%;
        transform: rotate(-190deg);
    }

    80% {
        bottom: 40%;
    }

    100% {
        bottom: 26%;
        transform: rotate(0deg);
    }`;

const bubble = keyframes`
0% {
        transform: scale(.15, .15);
        top: 50%;
        opacity: 0;
    }

    50% {
        transform: scale(1.1, 1.1);
        opacity: 1;
    }

    100% {
        transform: scale(.33, .33);
        top: 20%;
        opacity: 0;
    }
`;

export const Cooking = styled.div`
  position: relative;
  margin: 0 auto;
  top: 0;
  width: 50vh;
  height: 50vh;
  overflow: hidden;

  .bubble {
    position: absolute;
    border-radius: 100%;
    box-shadow: 0 0 0.25vh lighten(var(--primary), 10%);
    opacity: 0;
  }
  > :nth-child(1) {
    margin-top: 2vh;
    left: 58%;
    width: 2.5vh;
    height: 2.5vh;
    background-color: var(--primary);
    filter: brightness(7%);
    animation: ${bubble} 2s cubic-bezier(0.53, 0.16, 0.39, 0.96) infinite;
  }

  > :nth-child(2) {
    margin-top: 2.5vh;
    left: 52%;
    width: 2vh;
    height: 2vh;
    background-color: var(--primary);
    filter: brightness(4%);
    animation: ${bubble} 2s ease-in-out 0.35s infinite;
  }

  > :nth-child(3) {
    margin-top: 1.3vh;
    left: 50%;
    width: 1.5vh;
    height: 1.5vh;
    background-color: var(--primary);
    animation: ${bubble} 1.5s cubic-bezier(0.53, 0.16, 0.39, 0.96) 0.55s infinite;
  }

  > :nth-child(4) {
    margin-top: 2.2vh;
    left: 56%;
    width: 1.2vh;
    height: 1.2vh;
    background-color: var(--primary);
    filter: brightness(30%);
    animation: ${bubble} 1.8s cubic-bezier(0.53, 0.16, 0.39, 0.96) 0.9s infinite;
  }

  > :nth-child(5) {
    margin-top: 2.2vh;
    left: 63%;
    width: 1.1vh;
    height: 1.1vh;
    background-color: var(--primary);
    filter: brightness(60%);
    animation: ${bubble} 1.6s ease-in-out 1s infinite;
  }
  #area {
    position: absolute;
    width: 50%;
    height: 50%;
    bottom: 30%;
    right: 30px;
    background-color: transparent;
    transform-origin: 15% 60%;
    animation: ${flip} 2.1s ease-in-out infinite;

    #sides {
      position: absolute;
      width: 100%;
      height: 100%;
      transform-origin: 15% 60%;
      animation: ${switchSide} 2.1s ease-in-out infinite;

      #handle {
        position: absolute;
        bottom: 18%;
        right: 80%;
        width: 35%;
        height: 20%;
        background-color: transparent;
        border-top: 1vh solid var(--primary);
        border-left: 1vh solid transparent;
        border-radius: 100%;
        transform: rotate(20deg) rotateX(0deg) scale(1.3, 0.9);
      }

      #pan {
        position: absolute;
        bottom: 20%;
        right: 30%;
        width: 50%;
        height: 8%;
        background-color: var(--primary);
        border-radius: 0 0 1.4em 1.4em;
        transform-origin: -15% 0;
      }
    }

    #pancake {
      position: absolute;
      top: 24%;
      width: 100%;
      height: 100%;
      transform: rotateX(85deg);
      animation: ${jump} 2.1s ease-in-out infinite;

      #pastry {
        position: absolute;
        bottom: 26%;
        right: 37%;
        width: 40%;
        height: 45%;
        background-color: var(--primary);
        box-shadow: 0 0 3px 0 var(--primary);
        border-radius: 100%;
        transform-origin: -20% 0;
        animation: ${fly} 2.1s ease-in-out infinite;
      }
    }
  }
`;
