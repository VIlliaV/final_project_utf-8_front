import style from 'styled-components';
import { media } from '../../utils/media';

export const StyledBody = style.div`
font-family: 'Poppins', sans-serif;
display: flex;
flex-direction: column;
@media ${media.desktop} {
    display: flex;
    flex-direction: row;
`;
