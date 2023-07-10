import style from 'styled-components';
import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ButtonGroup from '@mui/material/ButtonGroup';
import backgroundUploadImg from '../../img/image.jpg';

export const StyledButtonGroup = styled(ButtonGroup)({
    border: '1px solid rgba(51, 51, 51, 0.30)',
    borderRadius: '18px',
});

export const StyledInputBtn = styled(Button)({
    cursor: 'default',
    '&:first-of-type,&:last-of-type': {
        color: 'rgba(139, 170, 54, 1)',
        fontSize: '16px',
        cursor: 'pointer',
    },
    color: 'black',
    border: 'none',
    '&:hover': {
        border: 'none',
    },
    '&:firstof-type': {
        borderRight: 'none',
    },
});

export const StyledButton = styled(Button)({
    cursor: 'pointer',
    width: '360px',
    height: '345px',
    background: `url(${backgroundUploadImg}) no-repeat center left`,
    marginRight: '50px',
});

export const ImageSrc = styled('span')({
    display: 'flex',
    width: '360px',
    height: '345px',
    marginRight: '50px',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(224, 224, 224,1)',
});

export const StyledLabel = style.label`
    fontsize: 40px;
    display:flex;
    justify-content: space-between;
    &:hover: {
          border-color: rgba(170, 249, 190, 0.742),
          box-shadow: 3px 3px 6px rgba(170, 249, 190, 0.742),
        },
`;

export const StyledMenuItem = styled(MenuItem)({});

export const StyledSelect = styled(Select)({
    width: '150px',
    height: '30px',
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: '-0.32px',
    color: 'black',
});

export const IngredianceList = style.div`
    display: flex;
    width: 610px;
`;

export const IngredientsName = styled(Select)({
    width: '400px',
    height: '30px',
    marginRight: '32px',
});

export const IngrediantsCountWeigth = styled(TextField)({
    width: '100px',
    height: '30px',
    padding: '0px',
    marginRight: '60px',
});
export const IngrediantsWeigth = styled(Select)({
    width: '100px',
    height: '30px',
    border: 'none',
    padding: '0',
    '&:hover': {
        border: 'none',
    },
});
export const IngredientBtn = styled(Button)({
    display: 'flex',
    width: '20px',
    height: '20px',
});
