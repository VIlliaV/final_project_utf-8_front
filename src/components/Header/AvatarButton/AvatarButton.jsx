import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import avatar from './img/Ellipse 3.png';
import { AvatarButton, AvatarText, ButtonDiv, ButtonIconEdit, ButtonNo, ButtonRadius, ButtonYes, ConfirmTitle, LogoutButton, Popup, PopupConfirm, PopupEdit } from './AvatarButton.styled';

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

    return (
        <AvatarButton>
            <ButtonRadius onClick={() => setShowPopup(!showPopup)}>
                <img src={avatar} alt="Avatar" />
            </ButtonRadius>
            {showPopup && (
                <Popup>
                    <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
                    <ButtonIconEdit onClick={handlePopupEdit}>Edit</ButtonIconEdit>
                </Popup>
            )}
            {showPopupConfirm && (
                <PopupConfirm>
                    <ConfirmTitle>Are you sure you want to log out?</ConfirmTitle>
                    <ButtonDiv>
                        <ButtonYes onClick={handleConfirm}>Yes</ButtonYes>
                        <ButtonNo onClick={handleConfirmNo}>Now</ButtonNo>
                    </ButtonDiv>
                </PopupConfirm>
            )}
            {showPopupEdit && (
                <PopupEdit>
                    <ButtonYes onClick={handleConfirm}>Yes</ButtonYes>
                </PopupEdit>
            )}
            <AvatarText>Olena</AvatarText>
        </AvatarButton>
    );
};

export default AvatarButtonComponent;
