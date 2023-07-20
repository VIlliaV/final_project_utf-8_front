import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from './images/logo.svg';
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
import { toast } from 'react-hot-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    axiosInstance
      .post('/subscribe', { email })
      .then(response => {
        toast.success("Subscription successfully processed");
      })
      .catch(error => {
        toast.error("subscribe email send failed");
      });
    setEmail('');
  };

  const footerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const footer = footerRef.current;
      if (footer) {
        const isFooterVisible = footer.getBoundingClientRect().top + footer.offsetHeight >= window.innerHeight;
        footer.style.position = isFooterVisible ? 'relative' : 'fixed';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const redirectToSearch = event => {
    event.preventDefault();
    navigate({
		pathname: '/search',
		search: `?type=ingridients`,
  
    });
  };

  return (
    <ResponsiveFooterContainer>
      <FooterDivContainer>
        <FooterMainContainer ref={footerRef}>
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
            <StyledNavLink onClick={redirectToSearch}>Ingredients</StyledNavLink>
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
        <NavLink to="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <StyledYoutube />
        </NavLink>
        <NavLink to="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <StyledTwitter />
        </NavLink>
        <NavLink to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <StyledFacebook />
        </NavLink>
        <NavLink to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
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
