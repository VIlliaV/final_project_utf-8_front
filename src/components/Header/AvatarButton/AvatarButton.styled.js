import { styled } from "styled-components";
import { media } from "utils/media";

export const AvatarButton = styled.div`
    position: relative;
    width: 100px;
    display: flex;
    align-items: center;
    border-radius: 20px;

`;

export const Popup = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50px;
    right: 0;
    border: 1px solid #8baa36;
    width: 180px;
    height: 135px;
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const PopupConfirm = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50px;
    right: 0;
    border: 1px solid #8baa36;
    width: 330px;
    height: 180px;
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
`;

export const PopupEdit = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50px;
    right: 0;
    border: 1px solid #8baa36;
    width: 330px;
    height: 180px;
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const LogoutButton = styled.button`
    background-color: #8baa36;
    border: none;
	border-radius: 8px;
	color: #fafafa;
    cursor: pointer;
    width: 125px;
    height: 43px;
`;

export const ButtonRadius = styled.button`
    border: 0;
    width: 34px;
    border-radius: 50px;
	cursor: pointer;
	
	@media ${media.tablet} {
        width: 44px;

    }
`;

export const EditDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 125px;
margin-bottom: 25px;
`

export const ButtonIconEdit = styled.button`
    cursor: pointer;
	border: 0;
	background-color: transparent;
`;

export const EditText = styled.p`
color: #23262A;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 22.4px; 
`

export const AvatarText = styled.p`
    margin-left: 15px;
    color: #22252a;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 170%;
`;

export const ButtonYes = styled.button`
	cursor: pointer;
    width: 140px;
    height: 50px;
    background-color: #8baa36;
    border: 0;
    border-radius: 6px;
    margin-right: 10px;
`;

export const ButtonNo = styled.button`
	cursor: pointer;
    width: 140px;
    height: 50px;
    background-color: #d9d9d9;
    border: 0;
    border-radius: 6px;
`;

export const ConfirmTitle = styled.p`
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.28px;
    margin-bottom: 25px;
`;

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
`;