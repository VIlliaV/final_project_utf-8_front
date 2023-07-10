import styled from 'styled-components';

// font-family: 'Inter', sans-serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Poppins', sans-serif;

// const mobile = '375px';
const tablet = '768px';
const desktop = '1440px';

const SLList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 32px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 100px;

  @media screen and (min-width: ${tablet}) {
    gap: 88px;
    margin-top: 50px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 200px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 196px;
  }
`;

const SLItem = styled.li`
  position: relative;
  display: flex;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -24px;

    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
  }

  @media screen and (min-width: ${tablet}) {
    width: 704px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 1160px;
  }
`;

const SLItemImage = styled.div`
  width: 60px;
  height: 60px;
  padding: 6px;

  border-radius: 6px;
  background: #ebf3d4;

  @media screen and (min-width: ${tablet}) {
    width: 93px;
    height: 97px;
    padding: 8px 6px;
    border-radius: 8px;
  }
`;
const SLItemImageName = styled.p`
  margin-left: 10px;

  color: #3e4462;
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;

  @media screen and (min-width: ${tablet}) {
    margin-left: 16px;

    font-size: 16px;
    line-height: 24px;
  }
`;

const SlItemAmount = styled.p`
  min-width: 38px;
  height: 23px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 46px;
  padding: 4px;

  border-radius: 4px;
  background: #8baa36;

  color: #fafafa;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: ${tablet}) {
    min-width: 68px;
    height: 35px;

    margin-right: 110px;
    padding: 4px 8px;

    font-size: 18px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-right: 174px;
  }
`;

const SLItemRemove = styled.button`
  width: 14px;
  height: 14px;

  margin-right: 18px;

  @media screen and (min-width: ${tablet}) {
    width: 20px;
    height: 20px;
    margin-right: 44px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-right: 28px;
  }

  /* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M15.625 4.375L4.375 15.625" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.625 15.625L4.375 4.375" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg> */
`;

export { SLList, SLItem, SLItemRemove, SlItemAmount, SLItemImageName, SLItemImage };
