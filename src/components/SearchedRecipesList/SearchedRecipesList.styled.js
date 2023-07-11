import { styled } from 'styled-components';
import { media } from '../../utils/media';

export const ListContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 28px;

    margin-bottom: 100px;

    @media ${media.tablet} {
        grid-template-columns: 1fr 1fr;
        gap: 32px;
    }
    @media ${media.desktop} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 14px;
    }
`;

export const NoResultWrapper = styled.div`
    margin-bottom: 100px;
    img {
        width: 208px;
        height: 133px;
        margin-bottom: 24px;
    }

    p {
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        letter-spacing: -0.28px;
        opacity: 0.5;
    }

    @media ${media.tablet} {
        margin-bottom: 200px;
        img {
            width: 350px;
            height: 225px;
            margin-bottom: 32px;
        }
        p {
            font-size: 24px;
            letter-spacing: -0.48px;
        }
    }
`;
