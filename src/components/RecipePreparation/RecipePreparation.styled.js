import styled from 'styled-components';
import { media } from '../../utils/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 28px;
  color: var(--text_second_theme_1);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.48px;
  @media ${media.mobTab} {
    margin-bottom: 32px;
    letter-spacing: -0.24px;
  }
`;

const List = styled.ol`
  display: flex;
  counter-reset: item;
  width: 343px;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: flex-start;
  @media ${media.mobTab} {
    width: 704px;
    margin-bottom: 50px;
  }
`;

const Item = styled.li`
  margin-bottom: 14px;
  color: #000000cc;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;
  letter-spacing: -0.24px;

  &:last-child {
    margin-bottom: 0px;
  }
  &::before {
    counter-increment: item;
    content: counter(item) '';
    margin-right: 14px;
    color: #ffffff;
    font-weight: bold;
    display: inline-flex;
    width: 21px;
    height: 21px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--active);
    border-radius: 50%;
    @media ${media.mobTab} {
      font-size: 14px;
      margin-bottom: 18px;
      line-height: 1.28;
    }
  }
`;

const Image = styled.img`
  margin-bottom: 100px;
  width: 343px;
  height: 250px;
  border-radius: 8px;
  @media ${media.mobTab} {
    width: 433px;
    height: 332px;
    margin-bottom: 200px;
  }
`;

export { Wrapper, Title, List, Item, Image };
