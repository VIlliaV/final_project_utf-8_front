import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import avatar from './img/Ellipse 3.png';
import edit from './img/edit.svg';
import { AvatarButton, AvatarText, ButtonDiv, ButtonIconEdit, ButtonNo, ButtonRadius, ButtonYes, ConfirmTitle, EditDiv, EditText, LogoutButton, Popup, PopupConfirm, PopupEdit } from './AvatarButton.styled';

const logout = () => {
    return {
        type: 'LOGOUT',
    };
};

const AvatarButtonComponent = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showPopupConfirm, setShowPopupConfirm] = useState(false);
    const [showPopupEdit, setShowPopupEdit] = useState(false);

    const dispatch = useDispatch();
    const popupRef = useRef(null);

    const handleLogout = () => {
        setShowPopup(false);
        setShowPopupConfirm(true);
    };

    const handleConfirm = () => {
        dispatch(logout());
        setShowPopupConfirm(false);
        setShowPopup(false);
    };

    const handleConfirmNo = () => {
        setShowPopupConfirm(false);
    };

    const handlePopupEdit = () => {
        setShowPopupEdit(true);
    };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setShowPopup(false);
			setShowPopupConfirm(false);
            setShowPopupEdit(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <AvatarButton>
            <ButtonRadius onClick={() => setShowPopup(!showPopup)}>
                <img src={avatar} alt="Avatar" />
            </ButtonRadius>
            {showPopup && (
                <Popup ref={popupRef}>
					<EditDiv>
					<EditText>Edit profile</EditText>
                    <ButtonIconEdit onClick={handlePopupEdit}><img src={edit} alt="Avatar" /></ButtonIconEdit>
					</EditDiv>

                    <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
                </Popup>
            )}
            {showPopupConfirm && (
                <PopupConfirm ref={popupRef}>
                    <ConfirmTitle>Are you sure you want to log out?</ConfirmTitle>
                    <ButtonDiv>
                        <ButtonYes onClick={handleConfirm}>Yes</ButtonYes>
                        <ButtonNo onClick={handleConfirmNo}>Now</ButtonNo>
                    </ButtonDiv>
                </PopupConfirm>
            )}
            {showPopupEdit && (
                <PopupEdit ref={popupRef}>
                    <ButtonYes onClick={handleConfirm}>Yes</ButtonYes>
                </PopupEdit>
            )}
            <AvatarText>Olena</AvatarText>
        </AvatarButton>
    );
};

export default AvatarButtonComponent;
