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

export const StyledH1 = style.h1`
    margin: 0;
    color: #001833;
    font-size: 44px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.88px;
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

export const StyledSection2 = style.div`
width: 610px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin:100px 300px 0 0
    
    `;
