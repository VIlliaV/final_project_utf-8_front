import styled from 'styled-components';
import { media } from '../../utils/media';
import kissingdesktop from './images/kisspng-pasta.desktop.png';
import kissingdesktop2 from './images/kisspng-pasta.desktop@2x.png';

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
        background: url(${kissingdesktop});
        background-position: left 0px bottom -500px;
        background-repeat: no-repeat;
        padding: 102px 100px 200px;
    }
    @media ${media.desktop} and (min-resolution: 192dpi) {
        background: url(${kissingdesktop2});
        background-position: left 0px bottom -500px;
        background-repeat: no-repeat;
        background-size: 50%;
        padding: 102px 100px 200px;
    }
`;
