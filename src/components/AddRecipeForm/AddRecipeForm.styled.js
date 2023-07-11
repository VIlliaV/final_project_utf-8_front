import style from 'styled-components';
import { Button, TextField, FormControl, InputBase, NativeSelect } from '@mui/material';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ButtonGroup from '@mui/material/ButtonGroup';
import backgroundUploadImg from '../../img/image.jpg';

export const Fallow = style.div`
    flex-direction: column;
    flex-wrap: wrap;
    & ul {
        display: flex;
        margin-top: 40px;
        gap: 20px;
    }`;

export const StyledSvg = style.svg`
display: flex;
    width: 28px;
    height: 28px;
    fill: rgb(139, 170, 54);
    -webkit-transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`;

export const StyledPopularRecipe = style.ul`
    margin-top: 100px;
    & ul {
        display: flex;
        flex-direction: column;
        & li {
            display: flex;
            border-bottom: 1px solid rgba(224, 224, 224, 1);
            margin-top: 40px;
            & img {
                width: 100px;
                height: 87px;
                margin-right: 10px;
                margin-bottom: 15px;
                & p {
                    width: 200px;
                    margin-top: 5px;
                    overflow: hidden;
                    color: var(--color-text-secondary, #7e7e7e);
                    text-overflow: ellipsis;      
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 16px;
                    letter-spacing: -0.24px;
    }
    }
    }
} 
`;

export const StyledNativeSelect = styled(NativeSelect)({
    width: '400px',
    padding: '0',
});

export const StyledButtonGroup = styled(ButtonGroup)({
    border: '1px solid rgba(51, 51, 51, 0.30)',
    borderRadius: '18px',
});
export const StyledFormControl = styled(FormControl)({
    border: 'none',
    height: '30px',
});
export const StyledIngredientList = style.div`
    width: 620px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
    `;

export const StyledSection2 = style.div`
    width: 610px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin:100px 300px 0 0
    
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
    width: 620px;
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

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(78, 238, 126, 0.777)',
        },
    },
}));
