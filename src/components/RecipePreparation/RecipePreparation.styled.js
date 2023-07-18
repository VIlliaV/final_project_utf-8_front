import styled from 'styled-components';
import { media } from '../../utils/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${media.desktop} {
    flex-direction: row;
  }
`;

const WrapperForDesktop = styled.div`
  @media ${media.desktop} {
    display: block;
    margin-right: 50px;
  }
`;

const Title = styled.h2`
  margin-bottom: 28px;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.48px;
  color: #fafafa;
  color &[datatype='true'] {
    color: #3e4462;
  }

  @media ${media.tablet} {
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
  @media ${media.tablet} {
    width: 704px;
    margin-bottom: 50px;
  }
  @media ${media.desktop} {
    width: 757px;
    margin-bottom: 0;
  }
`;

const Item = styled.li`
  margin-bottom: 14px;
  display: flex;
  color: #fafafa;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;
  letter-spacing: -0.24px;
  &[datatype='true'] {
    color: rgba(0, 0, 0, 0.8);
  }
  @media ${media.tablet} {
    font-size: 14px;
    margin-bottom: 18px;
    line-height: 1.28;
  }
  @media ${media.desktop} {
    letter-spacing: -0.28px;
  }

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
    padding: 12px 10px 12px 12px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: var(--fix_back);
    border-radius: 50%;
  }
`;

const Image = styled.img`
  margin-bottom: 100px;
  width: 343px;
  height: 250px;
  border-radius: 8px;
  @media ${media.tablet} {
    width: 433px;
    height: 332px;
    margin-bottom: 200px;
  }
`;

export { Wrapper, WrapperForDesktop, Title, List, Item, Image };
