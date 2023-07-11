import style from 'styled-components';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

import BasicButtonGroup from '../../components/AddRecipeForm/buttonGroup';

export const IngredientBtn = styled(BasicButtonGroup)({});

export const StyledTextField = styled(TextField)({
    width: '395px',
    alignContent: 'end',
    textAlign: 'right',
    borderBottom: '1px solid #6a6c6e',
    '&::after': { borderBottom: '1px solid #6a6c6e' },
});

export const StyledLabel = style.label`
    fontsize: 40px;
    &:hover: {
          border-color: rgba(170, 249, 190, 0.742),
          box-shadow: 3px 3px 6px rgba(170, 249, 190, 0.742),
        },
`;

export const StyledH3 = style.h3`
    color: #3e4462;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: -0.25px;
    margin: 0;
    `;
