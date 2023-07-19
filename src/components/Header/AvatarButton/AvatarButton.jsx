import React, { useRef, useState } from 'react';
import { AvatarButton, AvatarText, ButtonRadius } from './AvatarButton.styled';
import LogoutPopupComponent from './LogoutPopupComponent/LogoutPopupComponent';
import MainPopup from './MainPopup/MainPopup';
import EditPopup from './EditPopup/EditPopup';
import { useAuth } from 'utils/hooks/useAuth';

const AvatarButtonComponent = ({ shouldChangeStyle }) => {
  const { userName, userAvatar } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupConfirm, setShowPopupConfirm] = useState(false);
  const [showPopupEdit, setShowPopupEdit] = useState(false);
  const buttonRef = useRef(null);

  const handlePopupConfirmChange = newState => {
    setShowPopupConfirm(newState);
  };

  const handleMainPopupChange = newState => {
    setShowPopup(newState);
  };

  const handlePopupEditChange = newState => {
    setShowPopupEdit(newState);
  };

  return (
    <AvatarButton>
      <ButtonRadius onClick={() => setShowPopup(prevState => !prevState)} ref={buttonRef}>
        <img src={userAvatar} alt="Avatar" style={{ borderRadius: '50%' }} />
      </ButtonRadius>
      <MainPopup
        showPopup={showPopup}
        showPopupConfirm={showPopupConfirm}
        onPopupMainChange={handleMainPopupChange}
        onPopupConfirmChange={handlePopupConfirmChange}
		showPopupEdit={showPopupEdit} 
		onPopupEditChange={handlePopupEditChange}
      />
      <LogoutPopupComponent showPopupConfirm={showPopupConfirm} onPopupConfirmChange={handlePopupConfirmChange} />
      <EditPopup showPopupEdit={showPopupEdit} onPopupEditChange={handlePopupEditChange} />
      <AvatarText
        style={{
          color: shouldChangeStyle ? `var(--fix_back_2)` : 'var(--text_third)',
        }}
      >
        {userName}
      </AvatarText>
    </AvatarButton>
  );
};

export default AvatarButtonComponent;
