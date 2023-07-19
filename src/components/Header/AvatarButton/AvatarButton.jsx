import React, { useEffect, useRef, useState } from 'react';
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
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

  useEffect(() => {   // for checking width info and changing styles at avatar text
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AvatarButton>
      <ButtonRadius onClick={() => setShowPopup(true)} ref={buttonRef}>
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
			color: shouldChangeStyle && screenWidth > 1440 ? 'var(--fix_back_2)' : 'var(--text_third)',
        }}
      >
        {userName}
      </AvatarText>
    </AvatarButton>
  );
};

export default AvatarButtonComponent;
