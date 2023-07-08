import styled from 'styled-components';

// font-family: 'Inter', sans-serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Poppins', sans-serif;

const SLMainTitle = styled.h2`
  margin-top: 112px;

  color: #001833;
  font-family: 'Poppins', sans-serif;
  font-size: 44px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.88px;
`;

const SLHeader = styled.div`
  width: 1240px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 40px;
  margin-top: 72px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;

  background-color: #8baa36;

  *:nth-last-child(2) {
    margin-left: auto;
    margin-right: 142px;
  }
`;

const SLHeaderText = styled.p`
  display: flex;

  color: #fafafa;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
`;

const SLList = styled.ul`
  margin-top: 50px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 238px;

  display: flex;
  flex-direction: column;
  gap: 88px;
`;

const SLItem = styled.li`
  display: flex;
`;

const SLItemImage = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  width: 93px;
  height: 97px;
  padding: 8px 6px;

  border-radius: 8px;
  background: #ebf3d4;
`;
const SLItemImageName = styled.p`
  width: 140px;
  height: 97px;

  margin-left: 16px;

  align-items: flex-start;

  color: #3e4462;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
const SlItemAmount = styled.p`
  width: 68px;
  height: 35px;

  margin-left: 620px;
  padding: 4px 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background: #8baa36;

  color: #fafafa;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const SLItemRemove = styled.button`
  width: 20px;
  height: 20px;

  margin-left: 174px;
  margin-right: 28px;

  /* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M15.625 4.375L4.375 15.625" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.625 15.625L4.375 4.375" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg> */
`;

export { SLMainTitle, SLHeader, SLHeaderText, SLList, SLItem, SLItemRemove, SlItemAmount, SLItemImageName, SLItemImage };
