import style from 'styled-components';
import { media } from '../../utils/media';
import { Autocomplete, Button, TextField, OutlinedInput, FormControl, InputBase, NativeSelect } from '@mui/material';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ButtonGroup from '@mui/material/ButtonGroup';

export const Fallow = style.div`
// visibility: hidden;
display: none;
@media ${media.desktop} {
    display: flex;
    visibility: visible;
    flex-direction: column;
    flex-wrap: wrap;
    & ul {
        display: flex;
        margin-top: 40px;
        gap: 20px;
    }
}`;

export const StyledSvg = style.svg`
@media ${media.desktop} {
display: flex;
    width: 28px;
    height: 28px;
    fill: rgb(139, 170, 54);
    -webkit-transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`;

export const StyledPopularRecipe = style.ul`
    @media ${media.desktop} {
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
} }
`;

export const StyledNativeSelect = styled(NativeSelect)(({ theme }) => ({
  [theme.breakpoints.down(`${media.tablet}`)]: {
    width: '30px',
    padding: '0',
  },
  [theme.breakpoints.down(`${media.desktop}`)]: {
    width: '400px',
    padding: '0',
  },
}));

export const StyledButtonGroup = styled(ButtonGroup)({
  border: '1px solid rgba(51, 51, 51, 0.30)',
  borderRadius: '18px',
});
export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: '330px',
  display: 'flex',
  flexDirection: 'row',

  [theme.breakpoints.down(`${media.tablet}`)]: {
    border: 'none',
  },

  [theme.breakpoints.down(`${media.desktop}`)]: {
    ':first-of-type': {
      marginRight: '30px',
    },
    border: 'none',
  },
}));

export const StyledTextFieldAutoComplete = styled(TextField)(({ theme }) => ({
  //   height: '20px',
}));

export const StyledInputIngredient = style.input`
    width:50px;
    border:none;
    padding: 3px 0;
    border: 1px solid grey;
    border-radius: 4px;
    display:flex;
`;

export const StyledIngredientList = style.div`
width:345px;
display: flex;
flex-direction: row;
@media ${media.tablet}{
    width:705px;
}
@media ${media.desktop} {
    width: 620px;
    display: flex;
    gap:30px;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
  
}
    `;

export const StyledSection2 = style.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 45px 0 25px 0;
    width: 345px;
    @media ${media.tablet} {
        width:705px;
        margin: 100px 0 30px 0;
        
    }

@media ${media.desktop} {
    width: 620px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin:100px 300px 30px 0
}
    `;

export const StyledSection3 = style.div`
@media ${media.desktop} {
    width: 610px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin:100px 300px 0 0;
    & input {
        margin-top: 30px;
        width: 510px;
        height: 230px;
    }
    & div {
        position: relative;
        width: 160px;
        height: 50px;
        & button {
            cursor: pointer;
            margin-top: 30px;
            display: flex;
            color: white;
            border: none;
            align-items: center;
                & svg {
                    width: 160px;
                    height: 50px;
                    
                
                }
                 & span {
                    color: #FAFAFA; 
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    position: absolute;
                    left: 40%;
                }
    }}}
`;

export const StyledH3 = style.h3`
@media ${media.desktop} {
    color: #3e4462;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: -0.25px;
    margin: 0;}
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

export const StyledInpytImg = style.div`
cursor: pointer,
width: '280px',
  height: '270px',
  display:flex,
  alignItems: 'center',
@media ${media.desktop} {
    width: '360px',
    height: '345px',
}`;

export const StyledButton = styled(Button)(({ theme }) => ({
  cursor: 'pointer',
  width: '280px',
  height: '270px',

  backgroundSize: 'contain',
  [theme.breakpoints.down(`${media.desktop}`)]: {
    width: '360px',
    height: '345px',
    marginRight: '50px',
  },
}));

export const StyledLabel = style.label`
   display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin-top: 70px;
    @media ${media.tablet}{
        display: flex;
        column-count: 2;
         flex-direction: row;
         margin-top: 100px;
            
    };
    @media ${media.desktop} {
        display: flex;
        column-count: 2;
        justify-content: flex-start;
        align-items: center;
            &:hover: {
                border-color: rgba(170, 249, 190, 0.742),
                box-shadow: 3px 3px 6px rgba(170, 249, 190, 0.742),
            },
    }
`;
export const StyledInputGroup = style.div`
            gap:25px;
            display: flex;
            flex-direction: column;
            
`;
export const StyledLabelCategory = style.label`
gap: 25px;
    display: flex;
    align-items: center;
    width: 345px;
    justify-content: space-between;
@media ${media.desktop} {
    justify-content: space-between;
       &:hover: {
          border-color: rgba(170, 249, 190, 0.742),
          box-shadow: 3px 3px 6px rgba(170, 249, 190, 0.742),
        },
    }
`;

export const ImageSrc = style.span`
  cursor: pointer;
  display: flex;
  width: 280px;
  height: 270px;
  border: 1px solid grey;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  @media ${media.desktop}{
    width: 360px;
    height: 345px;
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

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '345px',

  alignContent: 'end',
  [theme.breakpoints.down(`${media.desktop}`)]: {
    width: '395px',
    alignContent: 'end',
    textAlign: 'right',
    borderBottom: '1px solid #6a6c6e',
    '&::after': { borderBottom: '1px solid #6a6c6e' },
  },
}));

export const IngredianceList = style.div`
@media ${media.desktop} {
    display: flex;
    width: 620px;
}
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
