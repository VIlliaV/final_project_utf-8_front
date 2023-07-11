import styled from 'styled-components';
import { media } from '../../utils/media';
import kissingdesktop from './images/kisspng-pasta.desktop.png';
import kissingdesktop2 from './images/kisspng-pasta.desktop@2x.png';

export const Section = styled.section`
    max-width: 374px;
    @media ${media.mobile} {
        max-width: 767px;
    }

    @media ${media.tablet} {
        max-width: 1439px;
    }
    @media ${media.desktop} {
        max-width: none;
        background: url(${kissingdesktop});
        background-position: left 0px bottom -400px;
        background-repeat: no-repeat;
        background-size: 558px auto;
    }
    @media ${media.desktop} /* ${media.retina} */ {
        max-width: none;
        background: url(${kissingdesktop2});
        background-position: left 0px bottom -400px;
        background-repeat: no-repeat;
        background-size: 558px auto;
    }
`;

export const Container = styled.div`
    margin: 0 auto;
    @media ${media.mobile} {
        width: 375px;
        padding: 50px 16px 100px;
    }

    @media ${media.tablet} {
        width: 768px;
        padding: 72px 32px 200px;
    }
    @media ${media.desktop} {
        width: 1440px;
        padding: 102px 100px 200px;
    }
`;
