import { styled } from 'styled-components';
import { media } from 'utils/media';

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
  width: 160px;
  height: 130px;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media ${media.tablet} {
    width: 180px;
    height: 135px;
  }
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
  width: 330px;
  height: 180px;
  background-color: #fff;
  padding: 10px;
  border-radius: 30px;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.10);

  @media ${media.tablet} {
    width: 480px;
    height: 215px;
  }

  @media ${media.desktop} {
    width: 500px;
  }
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
  width: 330px;
  height: 180px;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  background-color: #8baa36;
  color: #fafafa;
  border-radius: 24px 44px;
  width: 125px;
    height: 45px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${media.tablet} {
    width: 140px;
    height: 45px;
  }
  img {
    margin-left: 5px;
  }

`;

export const ButtonRadius = styled.button`
    border: 0;
    width: 34px;
    border-radius: 50px;

	@media ${media.tablet} {
        width: 44px;
    }
`;

export const EditDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
;
  width: 125px;
  margin-bottom: 25px;
  @media ${media.tablet} {
        width: 140px;
    }
`;

export const CloseButton = styled.div`
    position: absolute;
	width: 20px;
	height: 20px;
    top: 10px;
    right: 10px;
    cursor: pointer;

	@media ${media.tablet} {
        width: 24px;
		height: 24px;
		top: 20px;
    right: 20px;
    }
`;

export const ButtonIconEdit = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;
`;

export const EditText = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px;
`;

export const AvatarText = styled.p`
  margin-left: 15px;
  color: #22252a;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 170%;
`;

export const ButtonYes = styled.button`
    width: 140px;
    height: 50px;
    background-color: #8baa36;
    border: 0;
    border-radius: 6px;
    margin-right: 10px;

	@media ${media.tablet} {
        width: 195px;
		height: 60px;
    }
`;

export const ButtonNo = styled.button`
    width: 140px;
    height: 50px;
    background-color: #d9d9d9;
    border: 0;
    border-radius: 6px;

	@media ${media.tablet} {
        width: 195px;
		height: 60px;
    }
`;

export const ConfirmTitle = styled.p`
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  margin-bottom: 25px;

  @media ${media.tablet} {
	font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.36px;
    }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
