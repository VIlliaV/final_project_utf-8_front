import { styled } from 'styled-components';
import { media } from '../../utils/media';

export const SearchBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    @media ${media.tablet} {
        margin-top: 40px;
    }
    @media ${media.desktop} {
        margin-top: 50px;
    }
`;
