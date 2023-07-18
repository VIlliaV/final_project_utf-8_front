import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.svg';
import axios from 'axios';
import { axiosInstance } from 'redux/auth/authOperations';

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
  EmailSvgDiv,
  StyledYoutube,
  StyledTwitter,
  StyledFacebook,
  StyledInstagram,
  StyledMail,
} from './Footer.styled';
import { useSelector } from 'react-redux';
// import { createSelector } from '@reduxjs/toolkit';

const Footer = () => {
	const [email, setEmail] = useState('');
	const auth = useSelector(state => state.auth);
	const token = auth.accessToken;
  
	const handleEmailChange = event => {
	  setEmail(event.target.value);
	};
  
	const handleSubmit = event => {
	  event.preventDefault();


	  axiosInstance
		.post('/subscribe',{email})
		.then(response => {
		  console.log(response);

		})
		.catch(error => {
		  console.log(error);
		});
	  setEmail('');
  };

  return (
    <ResponsiveFooterContainer>
      <FooterDivContainer>
        <FooterMainContainer>
          <FooterLeftContainer>
            <LogoNav to="/">
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
            <StyledNavLink to="/">Ingredients</StyledNavLink>
            <StyledNavLink to="/add">Add recipes</StyledNavLink>
            <StyledNavLink to="/my">My recipes</StyledNavLink>
            <StyledNavLink to="/favorite">Favorite</StyledNavLink>
            <StyledNavLink to="/shopping-list">Shopping list</StyledNavLink>
          </Navigation>
        </FooterMainContainer>
        <SubscribeContainer>
          <HideContentTablet>
            <TextH3>Subscribe to our Newsletter</TextH3>
            <TextP>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</TextP>
          </HideContentTablet>
          <SubscribeForm>
            <EmailSvgDiv>
              <StyledMail className={navData => (navData.isActive ? 'active-style' : 'none')} />
            </EmailSvgDiv>
            <EmailInput
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmailChange}
            />
            <SubscribeButton type="submit" onClick={handleSubmit}>
              Subscribe
            </SubscribeButton>
          </SubscribeForm>
        </SubscribeContainer>
      </FooterDivContainer>
      <Media>
        <NavLink to="/">
          <StyledYoutube />
        </NavLink>
        <NavLink to="/">
          <StyledTwitter />
        </NavLink>
        <NavLink to="/">
          <StyledFacebook />
        </NavLink>
        <NavLink to="/">
          <StyledInstagram />
        </NavLink>
      </Media>

      <Copyright>

        <TermsLink>© 2023 All Rights Reserved.</TermsLink>
        <TermsLink to="/">Terms of Service</TermsLink>

      </Copyright>

    </ResponsiveFooterContainer>
  );
};

export default Footer;