import style from 'styled-components';
import { media } from '../../utils/media';
import {
  Button,
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputBase,
  ButtonGroup,
  NativeSelect,
  Autocomplete,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    keys: {
      0: 'start',
      1: 'mini',
      2: 'mobile',
      3: 'tablet',
      4: 'desktop',
    },
    values: {
      start: 0,
      mini: 374,
      mobile: 375,
      tablet: 768,
      desktop: 1440,
    },
  },
});

export const Fallow = style.div`
display: none;
@media ${media.desktop} {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top:100px;
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
    fill: var(--active_select_2);
    -webkit-transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`;

export const StyledPopularRecipe = style.ul`

margin-top: 70px;
& h3 {
  margin-bottom:30px;
}
@media ${media.tablet} {
      margin-top: 100px;
    & ul {
        display: flex;
        justify-content: space-between;
        & li {
            &:nth-child(-n + 2) {
                display: none;
            }
          }
        }
      }
@media ${media.desktop} {
  width:320px;
& ul {
  display: flex;
  flex-direction:column;
  & li {
    display: flex;
     &:nth-child(-n + 2) {
                display: flex;
            }
  }
}
}
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
  border: '1px solid var(--select_text_1)',

  borderRadius: '18px',
});
export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: '330px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  [theme.breakpoints.down(`${media.tablet}`)]: {
    width: '705px',
  },

  [theme.breakpoints.down(`${media.desktop}`)]: {
    ':first-of-type': {
      marginRight: '30px',
    },
    border: 'none',
  },
}));

export const StyledInputIngredient = style.input`
    width:85px;
    height: 50px;
    border:none;
    padding: 5px 0;
    border: 1px solid grey;
    border-radius: 4px;
    margin-right: 35px;
    display:flex;
    justify-content: center;
    @media ${media.tablet}{
      width:100px;
      margin-right: 150px;
    }
      @media ${media.desktop} {
      
      margin-right: 60px;
    }
`;

export const StyledIngredientList = style.div`

width:345px;
display: flex;
flex-direction: row;
margin-bottom:20px;
@media ${media.tablet}{
    width:705px;
    margin-bottom:25px;
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
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 45px 0 25px 0;
    width: 345px;
    & ul {
      margin-top: 25px;
    }
    @media ${media.tablet} {
        width:705px;
        margin: 100px 0 30px 0;
        & ul {
          margin-top: 35px;
          }
        
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
    width:230px;
    margin: 100px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
        & button {
          cursor: pointer;
          margin-top:20px;
          width:160px;
          height: 45px;
          background-color:var(--active_theme_2);
          color: white;
          border-radius: 24px 44px;
          border: 1px solid var(--active_theme_2);
        }
                 & span {
                    color: var(--back_fix) 
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    
                }
    @media ${media.tablet}{
      & button{
        margin-top:32px;
      }
    }
`;

export const StyledInputRecipe = style.textarea`
margin-top: 25px;
background-color: transparent;
    width: 345px;
    height: 270px;
    padding: 20px;
  @media ${media.tablet}{
    margin-top: 35px;
      width: 505px;
      height: 225px;
  }
`;

export const StyledH3 = style.h3`
color: var( --text_second_theme_1);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: -0.25px;
    margin: 0;
    `;

export const StyledList = style.li`
display: flex;
border-bottom: 1px solid rgba(112,112,112,0.4);
margin-bottom: 25px;
& a {
  display: flex;
  width: 320px;
  height:100px;
  & img{
    width: 100px;
    height: 85px;
    margin-bottom:15px;
    }
  & div{
    margin-left: 15px;
    margin-bottom: 0;
      & h4 {
        color:var(--text_second_theme_1);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; 
        letter-spacing: -0.24px;
        }
       & p {
        margin-top:5px;
         color: rgba(126, 126, 126, 1);
          color &[datatype='true'] {
          color: rgba(250, 250, 250, 1);
        }

        width: 210px;
        height: 55px;
        text-overflow: ellipsis;
        whitespace: nowrap;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: -0.24px;
        }
  }
}`;

export const StyledInputBtn = styled(Button)({
  cursor: 'default',
  '&:first-of-type,&:last-of-type': {
    cursor: 'pointer',
    stroke: 'black',
    fontSize: '16px',
  },
  color: 'black',
  border: 'none',
  '&:hover': {
    border: 'none',
  },
  '&:first-of-type': {
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
  [theme.breakpoints.down('desktop')]: {
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
      margin-right: 120px;
        display: flex;
        column-count: 2;
        height:345px;
        align-items:flex-start;
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
            width: 100%;
            height:auto;
            color: var(--select_text_1);
            &  div label {
              position:absolute;
            }

        
            
`;
export const StyledLabelCategory = style.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
@media ${media.desktop} {
    justify-content: space-between;
       &:hover: {
          border-color: rgba(170, 249, 190, 0.742),
          box-shadow: 3px 3px 6px rgba(170, 249, 190, 0.742),
        },
    }
`;

export const StyledInputIngredients = style.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    & div {
      border-radius:10px;
      width :195px;
      height: 50px;
      margin-right:15px;
    }
@media ${media.tablet} {
       display: flex;
       & div {
        width:400px;
        margin-right:30px;
      }
}
@media ${media.desktop} {
   justify-content: space-between;
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
export const StyledAutoCategory = styled(Autocomplete)({
  width: '160px',
});

export const StyledAutoComplete = styled(Autocomplete)({
  padding: theme.spacing(1),
  [theme.breakpoints.up('start')]: {
    width: '195px',
    cursor: 'pointer',
  },
  [theme.breakpoints.up('tablet')]: {
    width: '400px',
  },
  [theme.breakpoints.up('desktop')]: {},
});

export const StyledMenuItem = styled(MenuItem)({
  maxHeight: '30px',
});

export const StyledSelect = styled(Select)({
  width: '150px',
  display: 'flex',
  justifyContent: 'space-around',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '400',
  letterSpacing: '-0.32px',
  color: 'black',
});

export const StyledInput = style.input`

  border: transparent;
color:var(--select_text_1);
background-color:transparent;
position: relative;
  width: ;
  height: 50px;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  align-content: end;
  & hover {
    border:none;
  }
 @media ${media.desktop}{
    width: 100%;
    text-align: right;
  },
`;

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

export const StyledIngredientBtn = styled(Button)(({ theme }) => ({
  padding: '0',
  display: 'flex',
  minWidth: '20px',
  height: '20px',
}));

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
