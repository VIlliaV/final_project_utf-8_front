import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import svgDefault from './img/userSvgDefault.svg';
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
  StyledPlusIconSVG,
} from './AvatarButton.styled';
import { logoutUser } from 'redux/auth/authOperations';
import { useAuth } from 'utils/hooks/useAuth';
import { updateUser } from 'redux/auth/authOperations';

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
  const nameInputRef = useRef(null);

  const handleCancelUserChanges = useCallback(() => {
    setShowPopupEdit(false);
    setImageUrl(svgDefault);
    setNewUserName(userName);
  }, [userName]);

    const handleKeyDown = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        setShowPopup(false);
        setShowPopupConfirm(false);
        setShowPopupEdit(false);
      }
    },
    []
  );

  const handleClickOutside = useCallback(
    (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        event.target !== buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        handleCancelUserChanges();
        setShowPopup(false);
        setShowPopupEdit(false);
        setShowPopupConfirm(false);
      }
    },
    [handleCancelUserChanges]
  );

  const handleEditButtonClick = useCallback((e) => {
    e.preventDefault();
    nameInputRef.current.focus();
  }, []);

  const handleLogoutButton = useCallback(() => {
    setShowPopup(false);
    setShowPopupConfirm(true);
  }, []);

  const handleConfirmLogout = useCallback(() => {
    dispatch(logoutUser());
    setShowPopupConfirm(false);
  }, [dispatch]);

  const handleConfirmLogoutNo = useCallback(() => {
    setShowPopupConfirm(false);
  }, []);

  const handlePopupEdit = useCallback(() => {
    setShowPopupEdit(true);
    setShowPopup(false);
  }, []);



  const handleNameChange = useCallback((event) => {
	console.log(event.target.value);
    event.preventDefault();
    setNewUserName(event.target.value);
  }, []);

  const handleAddNewImgButtonClick = useCallback(() => {
    const inputElement = document.getElementById('imageInput');
    inputElement.click();
  }, []);

  const handleImageChange = useCallback((event) => {
    setNewUserAvatar(event.target.files[0]);
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', newUserAvatar);
      formData.append('name', newUserName);
      dispatch(updateUser(formData));
      setShowPopupEdit(false);
    },
    [dispatch, newUserAvatar, newUserName]
  );



  useEffect(() => {
    if (newUserAvatar) {
      setImageUrl(URL.createObjectURL(newUserAvatar));
    } else {
      setImageUrl(svgDefault);
    }
  }, [newUserAvatar]);

  useEffect(() => {
    if (!newUserName) {
      setNewUserName(userName);
    }
  }, [newUserName, userName]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]);

  return (
    <AvatarButton>
      <ButtonRadius onClick={() => setShowPopup((prevState) => !prevState)} ref={buttonRef}>
        <img src={userAvatar} alt="Avatar" style={{ borderRadius: '50%' }} />
      </ButtonRadius>
      {showPopup && (
        <Popup ref={popupRef}>
          <EditDiv>
            <EditText>Edit profile</EditText>
            <ButtonIconEdit onClick={handlePopupEdit}>
              <StyledEditIconSVG />
            </ButtonIconEdit>
          </EditDiv>

          <LogoutButton onClick={handleLogoutButton}>
            Log out
            <StyledArrowIconSVG />
          </LogoutButton>
        </Popup>
      )}
      {showPopupConfirm && (
        <PopupConfirm ref={popupRef}>
          <CloseButton onClick={handleConfirmLogoutNo}>
            <StyledCloseIconSVG />
          </CloseButton>
          <ConfirmTitle>Are you sure you want to log out?</ConfirmTitle>
          <ButtonDiv>
            <ButtonYes onClick={handleConfirmLogout}>Yes</ButtonYes>
            <ButtonNo onClick={handleConfirmLogoutNo}>No</ButtonNo>
          </ButtonDiv>
        </PopupConfirm>
      )}
      {showPopupEdit && (
        <PopupEdit onSubmit={handleSubmit} ref={popupRef}>
          <input
            type="file"
            name="useravatar"
            accept="image/*"
            id="imageInput"
            onChange={handleImageChange}
            style={{ visibility: 'hidden' }}
          />
          <AvatarDiv>
            <AddNewImgButton
              htmlFor="imageInput"
              type="button"
              style={{ backgroundImage: `url(${imageUrl})` }}
              onClick={handleAddNewImgButtonClick}
            ></AddNewImgButton>
            <ImgPlusButton>
              <StyledPlusIconSVG />
            </ImgPlusButton>
          </AvatarDiv>

          <CloseButton onClick={handleCancelUserChanges}>
            <StyledCloseIconSVG />
          </CloseButton>
          <NameInputDiv>
            <AvatarSvg>
              <StyledUserIcon stroke={`var(--text_theme_1)`} width={18} />
            </AvatarSvg>

            <EditButton onClick={handleEditButtonClick}>
              <StyledEditIconSVG />
            </EditButton>
            <NameInput
              type="text"
              placeholder={userName}
              name="username"
              onChange={handleNameChange}
              ref={nameInputRef}
            />
          </NameInputDiv>
          <EditConfirmButton type="submit">Save changes</EditConfirmButton>
        </PopupEdit>
      )}
      <AvatarText>{userName}</AvatarText>
    </AvatarButton>
  );
};

export default AvatarButtonComponent;
