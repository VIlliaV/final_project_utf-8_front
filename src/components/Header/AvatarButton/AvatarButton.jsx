import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  AvatarButton,
  AvatarSvg,
  AvatarText,
  ButtonDiv,
  ButtonIconEdit,
  ButtonNo,
  ButtonRadius,
  ButtonYes,
  CloseButton,
  ConfirmTitle,
  AvatarDiv,
  EditButton,
  EditConfirmButton,
  EditDiv,
  EditText,
  LogoutButton,
  NameInput,
  NameInputDiv,
  Popup,
  PopupConfirm,
  PopupEdit,
  ImgPlusButton,
  AddNewImgButton,
  StyledUserIcon,
  StyledCloseIconSVG,
  StyledArrowIconSVG,
  StyledEditIconSVG,
  StyledUserSvgDefault,
  StyledPlusIconSVG,
} from './AvatarButton.styled';
import { logoutUser } from 'redux/auth/authOperations';
import { useAuth } from 'utils/hooks/useAuth';

const AvatarButtonComponent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupConfirm, setShowPopupConfirm] = useState(false);
  const [showPopupEdit, setShowPopupEdit] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [newUserAvatar, setNewUserAvatar] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { userName, userAvatar } = useAuth();

  const dispatch = useDispatch();
  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  const handleLogoutButton = () => {
    setShowPopup(false);
    setShowPopupConfirm(true);
  };

  const handleConfirmLogout = () => {
    dispatch(logoutUser());
    setShowPopupConfirm(false);
  };

  const handleConfirmLogoutNo = () => {
    setShowPopupConfirm(false);
    setShowPopupEdit(false);
  };

  const handlePopupEdit = () => {
    setShowPopupEdit(true);
    setShowPopup(false);
  };

  const handleClickOutside = event => {
    if (
		popupRef.current &&
		!popupRef.current.contains(event.target) &&
		event.target !== buttonRef.current &&
		!buttonRef.current.contains(event.target)
    ) {
      setShowPopup(false);
    }
  };

  const handleAddImageClick = () => {
    const imageInput = document.getElementById('imageInput');
    imageInput.click();
  };

  const handleNameChange = event => {
    setNewUserName(event.target.value);
  };

  const submitChanges = (e) => {
	e.preventDefault();
	console.log('Selected file:', e.target[0].value);
	console.log('Text value:', e.target[4].value);

	setShowPopupEdit(false);
  };

  const handleImageChange = event => {
    const file = event.target.files[0];
    setNewUserAvatar(file);
  };

  const handleButtonRadiusClick = () => {
    if (!showPopupEdit && !showPopupConfirm) {
      setShowPopup(prevState => !prevState);
    }
  };

  useEffect(() => {
    if (newUserAvatar) {
      setImageUrl(URL.createObjectURL(newUserAvatar));
    } else if (userAvatar) {
      setImageUrl(userAvatar);
    } else setImageUrl(StyledUserSvgDefault);
  }, [newUserAvatar, userAvatar]);

  useEffect(() => {
    if (!newUserName) {
      setNewUserName(userName);
    }
  }, [newUserName, userName]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <AvatarButton>
      <ButtonRadius onClick={handleButtonRadiusClick} ref={buttonRef}>
        <img src={userAvatar} alt="Avatar" style={{ borderRadius: '50%' }} />
      </ButtonRadius>
      {showPopup && (
        <Popup ref={popupRef}>
          <EditDiv>
            <EditText>Edit profile</EditText>
            <ButtonIconEdit onClick={handlePopupEdit}>
              <StyledEditIconSVG/>
            </ButtonIconEdit>
          </EditDiv>

          <LogoutButton onClick={handleLogoutButton}>
            Log out
            <StyledArrowIconSVG/>
          </LogoutButton>
        </Popup>
      )}
      {showPopupConfirm && (
        <PopupConfirm ref={popupRef}>
          <CloseButton onClick={handleConfirmLogoutNo}>
            <StyledCloseIconSVG/>
          </CloseButton>
          <ConfirmTitle>Are you sure you want to log out?</ConfirmTitle>
          <ButtonDiv>
            <ButtonYes onClick={handleConfirmLogout}>Yes</ButtonYes>
            <ButtonNo onClick={handleConfirmLogoutNo}>Now</ButtonNo>
          </ButtonDiv>
        </PopupConfirm>
      )}
      {showPopupEdit && (
        <PopupEdit onSubmit={submitChanges} ref={popupRef}>
          <input
            type="file"
            accept="image/*"
            id="imageInput"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <AvatarDiv>
            <AddNewImgButton
              onClick={handleAddImageClick}
              style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'contain' }}
            ></AddNewImgButton>
            <ImgPlusButton onClick={handleAddImageClick}>
              <StyledPlusIconSVG/>
            </ImgPlusButton>
          </AvatarDiv>

          <CloseButton onClick={handleConfirmLogoutNo}>
		  <StyledCloseIconSVG/>
          </CloseButton>
          <NameInputDiv>
            <AvatarSvg>
              <StyledUserIcon stroke={`var(--text_theme_1)`} width={18} />
            </AvatarSvg>

            <EditButton onClick={handleClickOutside}>
              <StyledEditIconSVG  />
            </EditButton>
            <NameInput type="text" placeholder={userName} onChange={handleNameChange} />
          </NameInputDiv>

		  <EditConfirmButton type="submit">Save changes</EditConfirmButton>

        </PopupEdit>
      )}
      <AvatarText>{newUserName}</AvatarText>
    </AvatarButton>
  );
};

export default AvatarButtonComponent;
