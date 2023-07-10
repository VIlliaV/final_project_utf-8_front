import styled from 'styled-components';

// font-family: 'Inter', sans-serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Poppins', sans-serif;

// const mobile = '375px';
const tablet = '768px';
const desktop = '1440px';

const SLContainer = styled.div`
  max-width: 375px;
  margin: 0 auto;

  padding-left: 8px;
  padding-right: 8px;

  @media screen and (min-width: ${tablet}) {
    min-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${desktop}) {
    min-width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

const SLMainTitle = styled.h2`
  margin-left: 8px;

  color: #001833;
  font-family: 'Poppins', sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.56px;

  @media screen and (min-width: ${tablet}) {
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.64px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-top: 112px;
    font-size: 44px;
    line-height: 44px;
    letter-spacing: -0.88px;
  }
`;

const SLHeader = styled.div`
  max-width: 359px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: 50px;

  border-radius: 8px;
  background-color: #8baa36;

  *:nth-last-child(2) {
    margin-left: auto;
    margin-right: 24px;
  }

  @media screen and (min-width: ${tablet}) {
    min-width: 704px;
    height: 58px;

    padding: 20px;
    margin-top: 72px;

    *:nth-last-child(2) {
      margin-left: auto;
      margin-right: 78px;
    }
  }

  @media screen and (min-width: ${desktop}) {
    min-width: 1240px;
    height: 60px;

    padding: 20px 40px;

    *:nth-last-child(2) {
      margin-left: auto;
      margin-right: 142px;
    }
  }
`;

const SLHeaderText = styled.p`
  color: #fafafa;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  @media screen and (min-width: ${tablet}) {
    font-size: 18px;
    line-height: 26px;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export { SLMainTitle, SLHeader, SLHeaderText, SLContainer };
