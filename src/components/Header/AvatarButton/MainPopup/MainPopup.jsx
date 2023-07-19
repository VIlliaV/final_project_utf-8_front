import { useRef, useEffect, useCallback, useState } from "react";
import { ButtonIconEdit, EditDiv, EditText, LogoutButton, Popup, StyledArrowIconSVG, StyledEditIconSVG } from "./MainPopup.styled";

const MainPopup = ({ showPopup, showPopupConfirm, showPopupEdit, onPopupMainChange, onPopupConfirmChange, onPopupEditChange }) => {
  const popupRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

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

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

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
          <EditDiv onFocus={handleFocus} onBlur={handleBlur} onClick={handlePopupEdit}>
            <EditText isFocused={isFocused}>Edit profile</EditText>

            <ButtonIconEdit>
              <StyledEditIconSVG isFocused={isFocused} />
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
