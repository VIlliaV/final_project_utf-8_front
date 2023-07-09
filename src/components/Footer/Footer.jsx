import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import youtube from '../../img/youtube.svg';
import twitter from '../../img/twiter.svg';
import facebook from '../../img/facebook.svg';
import instagram from '../../img/instagram.svg';
import logo from './images/logo.svg';
import mail from './images/mail.svg';

import {
  HideContentMobile,
  HideContentTablet,
  ResponsiveFooterContainer,
  Navigation,
  StyledNavLink,
  TermsLink,
  Media,
  SubscribeForm,
  EmailInput,
  EmailSvg,
  SubscribeButton,
  SubscribeContainer,
  LogoNav,
  LogoImg,
  Copyright,
  FooterMainContainer,
  FooterLeftContainer,
  TextUl,
  TextLi,
  TextH3,
  TextP,
  FooterDivContainer,
} from './Footer.styled';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Добавьте здесь код для обработки подписки на email
    console.log('Subscribed email:', email);
    setEmail('');
  };

  return (
    <ResponsiveFooterContainer>
	<FooterDivContainer>
	<FooterMainContainer>
      <FooterLeftContainer>
        <LogoNav to="/" activeClassName="active">
          <LogoImg src={logo} alt="" />
          So Yummy
        </LogoNav>
		<HideContentMobile>
			<TextUl>
				<TextLi>Database of recipes that can be replenished </TextLi>
				<TextLi>Flexible search for desired and unwanted ingredients</TextLi>
				<TextLi>Ability to add your own recipes with photos</TextLi>
				<TextLi>Convenient and easy to use</TextLi>
			</TextUl>
		</HideContentMobile>
		</FooterLeftContainer>
        <Navigation>
          <StyledNavLink to="/">
            Ingredients
          </StyledNavLink>
          <StyledNavLink to="/add">
            Add recipes
          </StyledNavLink>
          <StyledNavLink to="/my">
            My recipes
          </StyledNavLink>
          <StyledNavLink to="/favorite">
            Favorite
          </StyledNavLink>
          <StyledNavLink to="/shopping-list">
            Shopping list
          </StyledNavLink>
        </Navigation>
		</FooterMainContainer>
		<SubscribeContainer>
		<HideContentTablet>
		<TextH3>Subscribe to our Newsletter</TextH3>
		<TextP>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</TextP>
		</HideContentTablet>
	  <SubscribeForm>
        <EmailSvg src={mail} alt="" width={20} />
        <EmailInput type="email" placeholder="Enter your email address" value={email} onChange={handleEmailChange} />
        <SubscribeButton onClick={handleSubmit}>Subscribe</SubscribeButton>
      </SubscribeForm>
		</SubscribeContainer>

	  </FooterDivContainer>
      <Media>
        <NavLink to="/">
          <img src={youtube} alt="" width={20} />
        </NavLink>
        <NavLink to="/">
          <img src={twitter} alt="" width={20} />
        </NavLink>
        <NavLink to="/">
          <img src={facebook} alt="" width={20} />
        </NavLink>
        <NavLink to="/">
          <img src={instagram} alt="" width={20} />
        </NavLink>
      </Media>
      <Copyright>
        <TermsLink>© 2023 All Rights Reserved.</TermsLink>
        <TermsLink to="/" activeClassName="active">
          Terms of Service
        </TermsLink>
      </Copyright>
    </ResponsiveFooterContainer>
  );
};

export default Footer;