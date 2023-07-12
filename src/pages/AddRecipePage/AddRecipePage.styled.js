import style from 'styled-components';
import { media } from '../../utils/media';
import { styled } from '@mui/material/styles';

import BasicButtonGroup from '../../components/AddRecipeForm/buttonGroup';

export const StyledBody = style.div`
display: flex;
flex-direction: column;
@media ${media.desktop} {
    display: flex;
    column-count: 2;
    margin-top: 100px;
}
`;

export const IngredientBtn = styled(BasicButtonGroup)({});

export const StyledH3 = style.h3`
    color: #3e4462;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: -0.25px;
    margin: 0;
    `;
