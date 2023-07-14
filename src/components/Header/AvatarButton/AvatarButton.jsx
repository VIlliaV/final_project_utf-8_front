import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AvatarButton, AvatarText, ButtonDiv, ButtonIconEdit, ButtonNo, ButtonRadius, ButtonYes, CloseButton, ConfirmTitle, EditDiv, EditText, LogoutButton, Popup, PopupConfirm, PopupEdit } from './AvatarButton.styled';
import { logoutUser } from 'redux/auth/authOperations';
import avatar from './img/Ellipse 3.png';
import edit from './img/edit.svg';
import arrow from './img/arrow-right.svg'
import close from '../BurgerMenu/img/x.svg';

const AvatarButtonComponent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupConfirm, setShowPopupConfirm] = useState(false);
  const [showPopupEdit, setShowPopupEdit] = useState(false);

  const dispatch = useDispatch();
  const popupRef = useRef(null);

  const handleLogoutButton = () => {
    setShowPopup(false);
	setShowPopupConfirm(true);
  };

  const handleConfirmEdit = () => {
    setShowPopupEdit(false);
  };

 const handleConfirmLogout = () => {
	dispatch(logoutUser());
    setShowPopupConfirm(false);
 }

  const handleConfirmLogoutNo = () => {
    setShowPopupConfirm(false);
  };

  const handlePopupEdit = () => {
    setShowPopupEdit(true);
  };

  const handleClickOutside = event => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
      setShowPopupConfirm(false);
      setShowPopupEdit(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <AvatarButton>
      <ButtonRadius onClick={() => setShowPopup(!showPopup)}>
        <img src={avatar} alt="Avatar" />
      </ButtonRadius>
      {showPopup && (
        <Popup ref={popupRef}>
          <EditDiv>
            <EditText>Edit profile</EditText>
            <ButtonIconEdit onClick={handlePopupEdit}>
              <img src={edit} alt="Avatar" />
            </ButtonIconEdit>
          </EditDiv>

                    <LogoutButton onClick={handleLogoutButton}>Log out<img src={arrow} alt="arrow" /></LogoutButton>
                </Popup>
            )}
            {showPopupConfirm && (
                <PopupConfirm ref={popupRef}>
				<CloseButton onClick={handleConfirmLogoutNo}>
                    <img src={close} alt="" />
                </CloseButton>
                    <ConfirmTitle>Are you sure you want to log out?</ConfirmTitle>
                    <ButtonDiv>
                        <ButtonYes onClick={handleConfirmLogout}>Yes</ButtonYes>
                        <ButtonNo onClick={handleConfirmLogoutNo}>Now</ButtonNo>
                    </ButtonDiv>
                </PopupConfirm>
            )}
            {showPopupEdit && (
                <PopupEdit ref={popupRef}>
                    <ButtonYes onClick={handleConfirmEdit}>Yes</ButtonYes>
                </PopupEdit>
            )}
            <AvatarText>Olena</AvatarText>
        </AvatarButton>
    );
};

export default AvatarButtonComponent;
