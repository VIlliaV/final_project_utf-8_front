import { useRef, useEffect, useCallback } from "react";
import { ButtonIconEdit, EditDiv, EditText, LogoutButton, Popup, StyledArrowIconSVG, StyledEditIconSVG } from "./MainPopup.styled";

const MainPopup = ({ showPopup, showPopupConfirm, showPopupEdit, onPopupMainChange, onPopupConfirmChange, onPopupEditChange }) => {
  const popupRef = useRef(null);

  const handleLogoutButton = () => {
    onPopupMainChange(false);
    onPopupConfirmChange(!showPopupConfirm);
  };

  const handlePopupEdit = () => {
    onPopupMainChange(false);
    onPopupEditChange(!showPopupEdit);
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onPopupMainChange(false);
      }
    },
    [onPopupMainChange]
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        onPopupMainChange(false);
      }
    },
    [onPopupMainChange]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]);

  return (
    <>
      {showPopup && (
        <Popup ref={popupRef}>
          <EditDiv onClick={handlePopupEdit}>
            <EditText>Edit profile</EditText>

            <ButtonIconEdit >
              <StyledEditIconSVG />
            </ButtonIconEdit>
          </EditDiv>

          <LogoutButton onClick={handleLogoutButton}>
            Log out
            <StyledArrowIconSVG />
          </LogoutButton>
        </Popup>
      )}
    </>
  );
};

export default MainPopup;
