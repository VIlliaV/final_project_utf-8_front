import styled from 'styled-components';
import { media } from 'utils/media';

export const HeadText = styled.h1`
    position: relative;
    color: #001833;

    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.56px;
    @media ${media.tablet} {
        font-size: 32px;
        letter-spacing: -0.64px;
    }
    @media ${media.desktop} {
        font-size: 44px;

        line-height: 1.1;

        letter-spacing: -0.88px;
    }

    & .first-square {
        position: absolute;
        top: -26.83px;
        left: 104px;
        display: block;
        width: 8px;
        height: 8px;
        transform: rotate(-25deg);
        flex-shrink: 0;
        border-radius: 3px;
        background: var(--active);
        @media ${media.tablet} {
            top: -32.4px;
            left: 187px;
            width: 14px;
            height: 14px;
        }
        @media ${media.desktop} {
            top: -29.4px;
            left: 228px;
        }
    }

    & .second-square {
        position: absolute;
        bottom: 7.5px;
        left: 231px;
        display: block;
        width: 6px;
        height: 6px;
        transform: rotate(-25deg);
        flex-shrink: 0;
        border-radius: 3px;
        background: rgb(34, 37, 42);
        @media ${media.tablet} {
            bottom: -3px;
            left: 405px;
            width: 12px;
            height: 12px;
        }
        @media ${media.desktop} {
            bottom: 8px;
            left: 707px;
        }
    }
    & .third-square {
        position: absolute;
        bottom: 22.9px;
        left: 333px;
        display: block;
        width: 8px;
        height: 8px;
        transform: rotate(-25deg);
        flex-shrink: 0;
        border-radius: 3px;
        background: var(--active);
        @media ${media.tablet} {
            bottom: 51.4px;
            left: 694px;
            width: 14px;
            height: 14px;
        }
        @media ${media.desktop} {
            bottom: 60.4px;
            left: 1150px;
        }
    }
`;
