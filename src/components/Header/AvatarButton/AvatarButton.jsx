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
import { fetchCurrentUser, logoutUser } from 'redux/auth/authOperations';
import avatar from './img/Ellipse 3.png';
import avatarIcon from './img/userIcon.svg';
import edit from './img/edit.svg';
import arrow from './img/arrow-right.svg';
import close from '../BurgerMenu/img/x.svg';
import plus from './img/plus.svg';

const AvatarButtonComponent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupConfirm, setShowPopupConfirm] = useState(false);
  const [showPopupEdit, setShowPopupEdit] = useState(false);
  const [name, setName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);


  const dispatch = useDispatch();
  const popupRef = useRef(null);

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

  const handleImageChange = event => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleClickOutside = event => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
      setShowPopupConfirm(false);
      setShowPopupEdit(false);
    }
  };

  const handleAddImageClick = () => {
    const imageInput = document.getElementById('imageInput');
    imageInput.click();
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const testUserFetch = event => {
	dispatch(fetchCurrentUser())
	.then(res => {
	setName(res.payload.name);
	})
	.catch(error => {
	  console.log(error);
	});
  }

  const saveChanges = () => {
    // Отправка картинки на сервер
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);
	  formData.append('name', name);

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

  useEffect(() => {

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(()=> {

  })


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
            <AddNewImgButton onClick={handleAddImageClick}>

            </AddNewImgButton>

            <ImgPlusButton>
              <img src={plus} alt="" width={20} height={20} />
            </ImgPlusButton>
          </AvatarDiv>

          <CloseButton onClick={handleConfirmLogoutNo}>
            <img src={close} alt="" width={20} height={20} />
          </CloseButton>
          <NameInputDiv>
            <AvatarSvg src={avatarIcon} alt="" width={20} />
            <EditButton onClick={testUserFetch}>
              <img src={edit} alt="" width={17} height={17} />
            </EditButton>
            <NameInput type="email" placeholder="Olena" value={name} onChange={handleNameChange} />
          </NameInputDiv>

          <EditConfirmButton onClick={saveChanges}>Save changes</EditConfirmButton>
        </PopupEdit>
      )}
      <AvatarText>Olena</AvatarText>
    </AvatarButton>
  );
};

export default AvatarButtonComponent;
