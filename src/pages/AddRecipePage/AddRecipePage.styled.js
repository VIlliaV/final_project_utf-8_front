import style from 'styled-components';
import { media } from '../../utils/media';



export const StyledBody = style.div`
display: flex;
flex-direction: column;
@media ${media.desktop} {
    display: flex;
    column-count: 2;
    margin-top: 100px;
}
`;



