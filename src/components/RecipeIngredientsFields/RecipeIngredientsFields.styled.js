import style from 'styled-components';
import { media } from '../../utils/media';
import { Button, ButtonGroup, Autocomplete } from '@mui/material';
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
    components: {},
  },
});

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

export const StyledInputIngredient = style.input`
&:focus {
  border-color:green;
}
// &:hover {
//   border-color:red;
// }
// &:active {
//   border-color:yellow;
// }
background-color:transparent; 
color: var(--select_text_1);
text-align: center;
    padding: 10px;
    width:85px;
    height: 50px;
    border:none;
    padding: 5px 0;
    border: 1px solid var( --selectBack_theme_1);
    border-radius: 4px;
    margin-right: 35px;
    display:flex;
    justify-content: center;
    @media ${media.tablet}{
      padding: 10px;
      width:100px;
      margin-right: 150px;
    }
      @media ${media.desktop} {
        padding: 10px;
      
      margin-right: 60px;
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

export const StyledH3 = style.h3`
color: var( --text_second_theme_1);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: -0.25px;
    margin: 0;
    `;
export const StyledButtonGroup = styled(ButtonGroup)({
  color: 'var(--back_theme_2)',
  border: '1px solid var(--select_text_1)',
  borderRadius: '18px',
});
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
export const StyledAutoComplete = styled(Autocomplete)({
  '& div label': {
    color: 'var(--select_text_1)',
  },
  '& div div': {
    color: 'var(--select_text_1)',
  },
  '& div fieldset': {
    borderColor: 'var( --selectBack_theme_1)',
  },

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
export const StyledIngredientBtn = style.button`
color: var(--select_text_1);
background-color:transparent;
  padding: 0;,
  display: flex;
  minWidth: 30px;
  height: 30px;
  border:none;
  cursor: pointer;
`;
