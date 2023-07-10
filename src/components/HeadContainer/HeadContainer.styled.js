import styled from 'styled-components';
import { media } from '../../utils/media';

export const Container = styled.div`
    margin: 0 auto;
    @media ${media.mobile} {
        max-width: 768px;
        padding: 50px 16px 100px;
    }

    @media ${media.tablet} {
        max-width: 1440px;

        padding: 72px 32px 200px;
    }
    @media ${media.desktop} {
        padding: 102px 100px 200px;
    }
`;
