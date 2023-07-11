import styled from 'styled-components';
import { media } from '../../utils/media';
import kissingmob from './images/kisspng-pasta.mob.png';
import kissingmob2 from './images/kisspng-pasta.mob@2x.png';
import kissingtab from './images/kisspng-pasta.tablet.png';
import kissingtab2 from './images/kisspng-pasta.tablet@2x.png';
import kissingdesktop from './images/kisspng-pasta.desktop.png';
import kissingdesktop2 from './images/kisspng-pasta.desktop@2x.png';

export const Section = styled.section`
    max-width: 374px;
    background: url(${kissingmob});
    background-position: left 0px bottom -200px;
    background-repeat: no-repeat;
    background-size: 256px auto;
    @media ${media.mobile} {
        max-width: 767px;
        /* background: url(${kissingmob});
        background-position: left 0px bottom -200px;
        background-repeat: no-repeat;
        background-size: 256px auto; */
    }

    @media ${media.mobile + media.retina} {
        max-width: 767px;
        background: url(${kissingmob2});
        /* background-position: left 0px bottom -200px; */
        /* background-repeat: no-repeat;
        background-size: 256px auto; */
    }

    @media ${media.tablet} {
        max-width: 1439px;
        background: url(${kissingtab});
        background-position: left 0px bottom -300px;
        background-repeat: no-repeat;
        background-size: 423px auto;
    }

    @media ${media.tablet + media.retina} {
        max-width: 1439px;
        background: url(${kissingtab});
        background-position: left 0px bottom -300px;
        background-repeat: no-repeat;
        background-size: 423px auto;
    }

    @media ${media.desktop} {
        max-width: none;
        background: url(${kissingdesktop});
        background-position: left 0px bottom -400px;
        background-repeat: no-repeat;
        background-size: 558px auto;
    }
    @media ${media.desktop + media.retina} {
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
