import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import { ButtonNo, ButtonYes } from '../AvatarButton.styled';
import { ButtonDiv, ConfirmTitle, PopupConfirm, StyledCloseIconSVG } from './LogoutPopupComponent.styled';
import { CloseButton } from '../EditPopup/EditPopup.styled';

const LogoutPopupComponent = ({ showPopupConfirm, onPopupConfirmChange }) => {
  const popupRef = useRef(null);
  const dispatch = useDispatch();

  const handleConfirmLogout = useCallback(() => {
    dispatch(logoutUser());
    onPopupConfirmChange(false);
  }, [dispatch, onPopupConfirmChange]);

  const handleConfirmLogoutNo = useCallback(() => {
    onPopupConfirmChange(false);
  }, [onPopupConfirmChange]);

  const handleKeyDown = useCallback(
    event => {
      if (event.keyCode === 27) {
        onPopupConfirmChange(false);
      }
    },
    [onPopupConfirmChange]
  );

  useEffect(() => {
    const handleClickOutside = event => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleConfirmLogoutNo();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleConfirmLogoutNo, handleKeyDown]);

  return (
    <>
      {showPopupConfirm && (
        <PopupConfirm ref={popupRef}>
          <CloseButton onClick={handleConfirmLogoutNo}>
            <StyledCloseIconSVG />
          </CloseButton>
          <ConfirmTitle>Are you sure you want to log out?</ConfirmTitle>
          <ButtonDiv>
            <ButtonYes onClick={handleConfirmLogout}>Log out</ButtonYes>
            <ButtonNo onClick={handleConfirmLogoutNo}>Cancel</ButtonNo>
          </ButtonDiv>
        </PopupConfirm>
      )}
    </>
  );
};

export default LogoutPopupComponent;
