import styled from 'styled-components';
import { media } from '../../utils/media';
import imageMobile from '../../img/assortment-vegetables-mobile.png';
import imageTablet from '../../img/assortment-vegetables-tab.png';
import imageDesktop from '../../img/assortment-vegetables-desk.png';

const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 375px;
  background-image: url(${imageMobile});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  padding: 144px 49.5px 90px 49.5px;

  @media ${media.tablet} {
    max-width: 768px;
    background-image: url(${imageTablet});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 136px 131.5px 32px 131.5px;
  }
  @media ${media.desktop} {
    max-width: 1440px;
    background-image: url(${imageDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 164px 467.5px 32px 467.5px;
  }
`;

const TitleRecipe = styled.h1`
    /* margin-top: 144px; */
    margin-bottom: 18px;
    color: var(--active);
    font-size: 24px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.48px;

    @media ${media.tablet} {
        /* margin-top: 136px; */
        margin-bottom: 24px;
        font-size: 44px;
        letter-spacing: -0.88px;
    }
`;

const Description = styled.p`
    margin-bottom: 24px;
    display: flex;
    width: 299px;
    flex-direction: column;
    color: #22252a;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: -0.24px;
    @media ${media.tablet} {
        width: 506px;
        color: var(--text_theme_1);
        font-size: 18px;
        letter-spacing: -0.36px;
    }
    @media ${media.desktop} {
        width: 656px;
        margin-bottom: 30px;
    }
`;
const Button = styled.button`
  width: 150px;
  margin-bottom: 42px;
  display: block;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  background-color: transparent;
  padding: 10px 18px;
  border: 1px solid #8baa36;
  color: #22252a;
  font-size: 10px;
  font-weight: 400;
  border-radius: 24px 44px;
  &:hover {
    background-color: rgba(139, 170, 54, 1);
    color: var(--back_theme_1);
  }
  @media ${media.tablet} {
    width: 278px;
    padding: 18px 44px;
    font-size: 16px;
    border: 2px solid var(--active);
    margin-bottom: 60px;
  }
  @media ${media.desktop} {
    width: 270px;
    margin-bottom: 48px;
  }
`;

const ClockWrapper = styled.div`
    width: 14px;
    height: 14px;
    margin-right: 4px;
    color: transparent;
    @media ${media.tablet} {
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }
`;

const Time = styled.p`
    /* margin-bottom: 90px; */
    color: var(--text_theme_1);
    font-size: 10px;
    font-weight: 500;
    line-height: 1.42;
    letter-spacing: -0.24px;
    @media ${media.tablet} {
        font-size: 14px;
        /* margin-bottom: 32px; */
    }
`;

const TimeWrapper = styled.div`
    display: flex;
`;

export { BackgroundWrapper, TitleRecipe, Description, Button, ClockWrapper, Time, TimeWrapper };
