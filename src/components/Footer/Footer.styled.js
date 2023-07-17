import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from '../../utils/media';
import { ReactComponent as Mail } from './images/mail.svg';
import { ReactComponent as Facebook } from './images/facebook.svg';
import { ReactComponent as Youtube } from './images/youtube.svg';
import { ReactComponent as Twitter } from './images/twiter.svg';
import { ReactComponent as Instagram } from './images/instagram.svg';

export const HideContentMobile = styled.div`
    @media (max-width: 767px) {
        display: none;
    }
`;

export const HideContentTablet = styled.div`
    width: 340px;
    margin-bottom: 30px;

    @media (max-width: 1440px) {
        display: none;
    }
`;

export const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    @media ${media.tablet} {
        align-items: flex-start;
        width: 90px;
        margin-top: 50px;
        margin-left: 175px;
        margin-right: 100px;
    }

    @media ${media.desktop} {
        margin-top: 65px;
        margin-left: 160px;
        margin-right: 235px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    padding-bottom: 15px;
    display: flex;
    justify-content: center;

    @media ${media.tablet} {
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: -0.28px;
        padding-bottom: 20px;
    }
	&:hover, &:focus {
		color: var(--active);
    }
`;

export const FooterContainer = styled.footer`
    text-align: center;
`;

export const ResponsiveFooterContainer = styled.footer`
    display: flex;
	background-color: var(--active_theme_2);
    text-align: center;
    flex-direction: column;
    align-items: center;
    min-height: 435px;

    @media ${media.tablet} {
        min-height: 425px;
    }
`;

export const TextUl = styled.ul`
    padding-left: 10px;
`;

export const TextLi = styled.li`
    display: list-item;
    list-style-type: disc;
    text-align: start;
    flex-direction: row;
    color: #FAFAFA;
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.28px;
    margin-bottom: 10px;
`;

export const TextP = styled.p`
    text-align: left;
    color: #FAFAFA;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.28px;
    overflow-wrap: break-word;
`;

export const TextH3 = styled.h3`
    display: flex;
    margin-bottom: 15px;
    color: #FAFAFA;
    font-size: 18px;
    font-weight: 700;
    line-height: normal;
`;

export const FooterDivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${media.desktop} {
        flex-direction: row;
    }
`;

export const FooterMainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media ${media.tablet} {
        min-width: 768px;
        margin-bottom: 70px;
        align-items: flex-start;
        flex-direction: row;
        justify-content: space-between;
    }
    @media ${media.desktop} {
        margin-bottom: 40px;
        width: 900px;
    }
`;

export const FooterLeftContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;

    @media ${media.tablet} {
        justify-content: space-between;
        margin-left: 30px;
    }
    @media ${media.desktop} {
        margin-left: 0px;
    }
`;
export const SubscribeContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media ${media.desktop} {
        margin-top: 65px;
    }
`;
export const SubscribeForm = styled.div`
    display: flex;
    position: relative;

    justify-content: center;
    align-items: center;
    margin-bottom: 45px;
    flex-direction: column;
    @media ${media.tablet} {
        width: 460px;
        flex-direction: row;
    }
    @media ${media.desktop} {
        display: flex;
        width: 340px;
        flex-direction: column;
    }


`;

export const EmailInput = styled.input`

    padding: 0 0 0 42px;
    width: 205px;
    height: 40px;
    color: #fff;
    background-color: var(--active_theme_2);
    border-color: var(--back_theme_1);
    border-radius: 4px;
    border: 1px solid rgba(250, 250, 250, 0.15);

    font-size: 10px;
    font-weight: 400;
    letter-spacing: -0.2px;
    @media ${media.tablet} {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: -0.28px;
        width: 260px;
    }
    @media ${media.desktop} {
        width: 340px;
        margin-bottom: 15px;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: -0.36px;
    }
`;

export const EmailSvg = styled.img`

    position: absolute;
    left: 15px;
    top: 13px;
`;

export const EmailSvgDiv = styled.div`
  stroke: var(--back_theme_1);
  position: absolute;
    left: 15px;
    top: 13px;
`;

export const SubscribeButton = styled.button`
    cursor: pointer;
    padding: 0px;
    margin-top: 8px;
    border: none;
    border-radius: 4px;
    background-color: var(--active);
    color: #fff;
    width: 205px;
    height: 40px;
    &:hover, &:focus {
		color: var(--active_theme_2);
    }

    @media ${media.tablet} {
        width: 190px;
        margin-top: 0px;
        margin-left: 12px;
    }

    @media ${media.desktop} {
        width: 340px;
        margin-left: 0px;
    }
`;

export const LogoImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 8px;
    margin-right: 8px;
    background-color: #ebf3d4;
    @media ${media.tablet} {
        width: 44px;
        height: 44px;
    }
`;

export const LogoNav = styled(NavLink)`
    color: #FAFAFA;
    text-decoration: none;
    width: 145px;
    height: 35px;
    padding-bottom: 15px;
    margin-bottom: 40px;
    margin-top: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.27px;

    @media ${media.tablet} {
        margin-top: 50px;
        width: 215px;
        font-size: 28px;
        line-height: 28px;
        letter-spacing: 0.42px;
        justify-content: normal;
        padding-bottom: 0;
    }
    @media ${media.desktop} {
    }
`;

export const Copyright = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    background-color: var(--back_theme_1);
    height: 65px;
    min-width: 100%;
    font-size: 14px;
    color: #22252a;
    margin: 0;
    font-size: 10px;
    font-weight: 500;
    line-height: 10px;
    letter-spacing: -0.1px;

    @media ${media.tablet} {
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.28px;
    }
`;

export const TermsLink = styled(NavLink)`
    margin: 0 7px;
    color: var(--back_theme_2);
    text-decoration: none;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: -0.1px;
    opacity: 0.5;
`;

export const Media = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 120px;
    margin-bottom: 20px;
`;

export const StyledInstagram = styled(Instagram)`
fill: var(--active);
width: 20px;

&:hover, &:focus {
	fill: var(--back_fix);
    }
`;

export const StyledFacebook = styled(Facebook)`
fill: var(--active);
width: 20px;

&:hover, &:focus {
	fill: var(--back_fix);
    }
`;

export const StyledYoutube = styled(Youtube)`
fill: var(--active);
width: 20px;

&:hover, &:focus {
	fill: var(--back_fix);
    }
`;

export const StyledTwitter = styled(Twitter)`
	fill: var(--active);
width: 20px;

&:hover, &:focus {
	fill: var(--back_fix);
    }
`;

export const StyledMail = styled(Mail)`
stroke: white;
`;