import style from 'styled-components';

import { media } from '../../utils/media';
import { Button, TextField, Select, FormControl, MenuItem, InputBase, NativeSelect } from '@mui/material';
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

export const StyledH3 = style.h3`
color: var( --text_second_theme_1);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: -0.25px;
    margin: 0;
    `;

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
