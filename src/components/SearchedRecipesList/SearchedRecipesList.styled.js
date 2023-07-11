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
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

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
        padding-bottom: 0;
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
