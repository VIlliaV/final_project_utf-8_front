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
} from './AvatarButton.styled';
import { logoutUser } from 'redux/auth/authOperations';
import avatarIcon from './img/userIcon.svg';
import edit from './img/edit.svg';
import arrow from './img/arrow-right.svg';
import close from '../BurgerMenu/img/x.svg';
import plus from './img/plus.svg';
import userSvgDefault from './img/userSvgDefault.svg'
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

  const saveChanges = () => {
    // Отправка картинки на сервер
    if (newUserAvatar) {
      const formData = new FormData();
      formData.append('image', newUserAvatar);
      formData.append('name', userName);

      // Добавьте код для отправки formData на сервер
      // Используйте fetch или axios для отправки запроса
      // Например:
      // fetch('/upload', {
      //   method: 'POST',
      //   body: formData,
      // })
      //   .then(response => {
      //     // Обработка успешного ответа
      //   })
      //   .catch(error => {
      //     // Обработка ошибки
      //   });
    }

    setShowPopupEdit(false);
  };

  const handleImageChange = event => {
    const file = event.target.files[0];
    setNewUserAvatar(file);
  };

  useEffect(() => {
    if (newUserAvatar) {
      	setImageUrl(URL.createObjectURL(newUserAvatar));
        } else if(userAvatar){
		setImageUrl(userAvatar)
		} else setImageUrl(userSvgDefault);
  }, [newUserAvatar, userAvatar]);

  useEffect(() => {
    if (!newUserName) {
		setNewUserName(userName)
	  }
  }, [newUserName, userName]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <AvatarButton >
<ButtonRadius onClick={() => setShowPopup(!showPopup)} ref={buttonRef}>
        <img src={userAvatar} alt="Avatar" style={{ borderRadius: '50%' }} />
      </ButtonRadius>
      {showPopup && (
        <Popup ref={popupRef}>
          <EditDiv>
            <EditText>Edit profile</EditText>
            <ButtonIconEdit onClick={handlePopupEdit}>
              <img src={edit} alt="edit" />
            </ButtonIconEdit>
          </EditDiv>

          <LogoutButton onClick={handleLogoutButton}>
            Log out
            <img src={arrow} alt="arrow" />
          </LogoutButton>
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
              <img src={plus} alt="" width={20} height={20} />
            </ImgPlusButton>
          </AvatarDiv>

          <CloseButton onClick={handleConfirmLogoutNo}>
            <img src={close} alt="" width={20} height={20} />
          </CloseButton>
          <NameInputDiv>
            <AvatarSvg src={avatarIcon} alt="" width={20} />
            <EditButton onClick={handleClickOutside}>
              <img src={edit} alt="" width={17} height={17} />
            </EditButton>
            <NameInput type="email" placeholder={userName} onChange={handleNameChange} />
          </NameInputDiv>

          <EditConfirmButton onClick={saveChanges}>Save changes</EditConfirmButton>
        </PopupEdit>
      )}
      <AvatarText>{newUserName}</AvatarText>
    </AvatarButton>
  );
};

export default AvatarButtonComponent;
