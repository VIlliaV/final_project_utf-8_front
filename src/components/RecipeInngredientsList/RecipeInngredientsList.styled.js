import styled from 'styled-components';

const ListBox = styled.div`
  padding: 12px 14px;
  margin-top: 32px;
  margin-bottom: 24px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: #8baa36;
`;

const ListTitle = styled.p`
  color: #fafafa;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.3px;
  height: 18px;
`;

const FirstListTitle = styled(ListTitle)`
  width: 76px;
  margin-right: 122px;
`;

const SecondListTitle = styled(ListTitle)`
  width: 45px;
  margin-right: 18px;
`;

const LastListTitle = styled(ListTitle)`
  width: 54px;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  display: flex;
  width: 343px;
  height: 86px;
  /* padding: 0px 10px; */
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background: #ebf3d4;
`;

const Image = styled.img`
  margin-right: 12px;
  margin-left: 10px;
  width: 57px;
  height: 57px;
  flex-shrink: 0;
`;

const Name = styled.p`
  color: #3e4462;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.24px;
  margin-right: auto;
`;

const MeasureWrapper = styled.div`
  width: 62px;
  height: 23px;
  padding: 4px;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  background: #8baa36;
`;

const Measure = styled.p`
  color: #fafafa;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 19px;
  margin-left: 28px;
`;
export {
  ListBox,
  ListTitle,
  FirstListTitle,
  SecondListTitle,
  LastListTitle,
  ListContainer,
  ListItem,
  Image,
  Name,
  MeasureWrapper,
  Measure,
  Checkbox,
};
