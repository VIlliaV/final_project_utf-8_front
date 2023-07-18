import React, { useState, useRef, useEffect } from 'react';
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
import { useFormik } from 'formik';
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

  const handleEditButtonClick = e => {
    e.preventDefault();

    nameInputRef.current.focus();
  };

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
  };

  const handleCancelUserChanges = () => {
    setShowPopupEdit(false);
    setImageUrl(svgDefault);
    setNewUserName(userName);
  };

  const handlePopupEdit = () => {
    setShowPopupEdit(true);
    setShowPopup(false);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      setShowPopup(false);
      setShowPopupConfirm(false);
      setShowPopupEdit(false);
    }
  };

  const handleClickOutside = event => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target) &&
      event.target !== buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setShowPopup(false);
	  setShowPopupEdit(false);
	  setShowPopupConfirm(false);
    }
  };

  const handleAddImageClick = () => {
    const imageInput = document.getElementById('imageInput');
    imageInput.click();
  };

  const handleNameChange = event => {
    event.preventDefault();
    setNewUserName(event.target.value);
  };

  const handleImageChange = event => {
    const file = event.target.files[0];
    setNewUserAvatar(file);
  };

  const formik = useFormik({
    initialValues: {
      imageUrl: null,
      username: userName,
    },
    onSubmit: values => {
      console.log('Form submitted:', values);
      handleCancelUserChanges();
      setShowPopupEdit(false);
    },
    validate: values => {
      const errors = {};
      if (!values.username) {
        errors.username = 'Please enter your name';
      }
      return errors;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
	console.log(newUserAvatar);
	console.log(e.target[0]);
    const formData = new FormData();
    formData.append('file', newUserAvatar);
    formData.append('name', e.target[4].value);
    dispatch(updateUser(formData));

	setShowPopupEdit(false);
  }

  useEffect(() => {

    if (newUserAvatar) {
      setImageUrl(URL.createObjectURL(newUserAvatar));
    } else {
      setImageUrl(svgDefault);
    }
  }, [newUserAvatar, userAvatar]);

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
  }, []);

  return (
    <AvatarButton>
      <ButtonRadius onClick={() => setShowPopup(prevState => !prevState)} ref={buttonRef}>
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

//         <PopupEdit onSubmit={formik.handleSubmit} ref={popupRef}>

        <PopupEdit onSubmit={handleSubmit} ref={popupRef}>

          <input
            type="file"
            name="useravatar"
            accept="image/*"
            id="imageInput"
            onChange={handleImageChange}

//             style={{ display: 'none' }}

            style={{ visibility: 'hidden' }}

          />
          <AvatarDiv>
            <AddNewImgButton
              onClick={handleAddImageClick}
              type="button"
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></AddNewImgButton>
            <ImgPlusButton onClick={handleAddImageClick}>
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
              onChange={formik.handleChange}
              value={formik.values.username}
              onFocus={handleNameChange}
              ref={nameInputRef}
            />
            {formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>}
          </NameInputDiv>
          <EditConfirmButton type="submit">Save changes</EditConfirmButton>
        </PopupEdit>
      )}
      <AvatarText>{userName}</AvatarText>
    </AvatarButton>
  );
};

export default AvatarButtonComponent;