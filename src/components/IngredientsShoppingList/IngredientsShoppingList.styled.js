import styled from 'styled-components';
import { media } from 'utils/media';

const SLList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 32px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 100px;

  @media ${media.tablet} {
    gap: 88px;
    margin-top: 50px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 200px;
  }

  @media ${media.desktop} {
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

  @media ${media.tablet} {
    width: 704px;
  }

  @media ${media.desktop} {
    width: 1160px;
  }
`;

const SLImageWrapper = styled.div`
  width: 60px;
  height: 60px;
  padding: 6px;
  border-radius: 6px;
  background-color: #ebf3d4;
  @media ${media.tablet} {
    width: 93px;
    height: 97px;
    padding: 8px 6px;
    border-radius: 8px;
  }
`;

const SLItemImage = styled.img`
  width: 48px;
  height: 48px;

  @media ${media.tablet} {
    width: 81px;
    height: 81px;
  }
`;

const SLItemImageName = styled.p`
  margin-left: 10px;

  color: var(--text_second_theme_1);
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;

  @media ${media.tablet} {
    margin-left: 16px;

    font-size: 16px;
    line-height: 24px;
  }
`;

const SlItemAmount = styled.p`
  max-width: 140px;
  min-height: 23px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 46px;
  padding: 4px;

  border-radius: 4px;
  background: var(--fix_back);
  word-break: break-word;

  color: var(--back_fix);
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media ${media.tablet} {
    min-height: 35px;

    margin-right: 110px;
    padding: 4px 8px;

    font-size: 18px;
  }

  @media ${media.desktop} {
    margin-right: 174px;
  }
`;

const SLItemRemove = styled.button`
  width: 14px;
  height: 14px;

  margin-right: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;

  @media ${media.tablet} {
    width: 20px;
    height: 20px;
    margin-right: 44px;
  }

  @media ${media.desktop} {
    margin-right: 28px;
  }
`;

export { SLList, SLItem, SLItemRemove, SlItemAmount, SLItemImageName, SLItemImage, SLImageWrapper };
