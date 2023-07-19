import { useDispatch } from 'react-redux';
import { StyledPlusIconSVG } from '../AvatarButton.styled';
import { StyledCloseIconSVG } from '../LogoutPopupComponent/LogoutPopupComponent.styled';
import { StyledEditIconSVG } from '../MainPopup/MainPopup.styled';
import {
  AddNewImgButton,
  AvatarDiv,
  AvatarSvg,
  CloseButton,
  EditButton,
  EditConfirmButton,
  ImgPlusButton,
  NameInput,
  NameInputDiv,
  PopupEdit,
  StyledUserIcon,
} from './EditPopup.styled';
import { useCallback, useEffect, useRef, useState } from 'react';
import svgDefault from '../img/userSvgDefault.svg';
import { useAuth } from 'utils/hooks/useAuth';
import { updateUser } from 'redux/auth/authOperations';

const EditPopup = ({ showPopupEdit, onPopupEditChange }) => {
  const popupRef = useRef(null);
  const { userName } = useAuth();
  const [newUserName, setNewUserName] = useState('');
  const [newUserAvatar, setNewUserAvatar] = useState(null);
  const nameInputRef = useRef(null);
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState(null);

  const handleCancelUserChanges = useCallback(() => {
    setNewUserAvatar(null);
    setImageUrl(svgDefault);
    setNewUserName(userName);
    onPopupEditChange(!showPopupEdit);
  }, [onPopupEditChange, showPopupEdit, userName]);

  const handleEditButtonClick = useCallback(e => {
    e.preventDefault();
    nameInputRef.current.focus();
  }, []);

  const handleNameChange = useCallback(
    event => {
      event.preventDefault();
      const { value } = event.target;
      const newName = value.trim();
      if (newName === '') {
        setNewUserName(userName);
      } else {
        setNewUserName(newName);
      }
    },
    [userName]
  );

  const handleAddNewImgButtonClick = useCallback(() => {
    const inputElement = document.getElementById('imageInput');
    inputElement.click();
  }, []);

  const handleImageChange = useCallback(event => {
    setNewUserAvatar(event.target.files[0]);
  }, []);

  const handleKeyDown = useCallback(
    event => {
      if (event.keyCode === 27) {
        onPopupEditChange(false);
      }
    },
    [onPopupEditChange]
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('avatar', newUserAvatar);
      formData.append('name', newUserName);
      dispatch(updateUser(formData));
      onPopupEditChange(!showPopupEdit);
    },
    [dispatch, newUserAvatar, newUserName, onPopupEditChange, showPopupEdit]
  );

  useEffect(() => {
    const handleClick = event => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleCancelUserChanges();
        onPopupEditChange(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleCancelUserChanges, handleKeyDown, onPopupEditChange]);

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

  return (
    <>
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
              onClick={handleAddNewImgButtonClick}
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: newUserAvatar ? '100%' : '60%',
              }}
            ></AddNewImgButton>
            <ImgPlusButton type="button" onClick={handleAddNewImgButtonClick}>
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
    </>
  );
};

export default EditPopup;
