import style from 'styled-components';
import { media } from '../../utils/media';
import { Button, TextField, FormControl, InputBase, NativeSelect } from '@mui/material';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ButtonGroup from '@mui/material/ButtonGroup';


export const Fallow = style.div`
visibility: hidden;
display: none;
opacity: 0;
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
          margin-top:20px;
          width:160px;
          height: 45px;
          background-color:#22252A;
          color: white;
          border-radius: 24px 44px;
          border: 1px solid #22252A;;
        }
                 & span {
                    color: #FAFAFA; 
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    color: #FAFAFA;
                }
    @media ${media.tablet}{
      & button{
        margin-top:32px;
      }
    }
`;

export const StyledInputRecipe = style.textarea`
margin-top: 25px;
    width: 345px;
    height: 270px;
  @media ${media.tablet}{
    margin-top: 35px;
      width: 505px;
      height: 225px;
  }
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
export const StyledList = style.li`
display: flex;
border-bottom: 1px solid rgba(112,112,112,0.4);
margin-bottom: 25px;
& img{
  width: 100px;
  height: 85px;
  margin-bottom:15px;
}
& div{
  margin-left: 15px;
  margin-bottom: 0;
  & h4 {
    color:rgba(62, 68, 98, 1);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; 
    letter-spacing: -0.24px;
  }
  & p {
    margin-top:5px;
    color:rgba(126, 126, 126, 1);
    width: 210px;
    height: 55px;
    text-overflow: ellipsis;
    whitespace: nowrap;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.24px;
  }
}`


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
            width: 100%;
            
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
      width :195px;
    }
@media ${media.tablet} {
       display: flex;
       & div {
        width :400px;
        margin-right:30px;
      }
}
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

export const StyledSelectIngredient = styled(Select)(({theme})=>({
  width: '100%',
  height: '30px',
  marginRight: '15px',
  display: 'flex',
  color: 'black',

}));
export const StyledSelectWegth = styled(Select)({
  width: '85px',
  height: '30px',
  display: 'flex',
  color: 'black',
});

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',

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


export const StyledIngredientBtn = styled(Button)(({theme})=>({
  padding: '0',
  display: 'flex',
  width: '20px',
  height: '20px',
  [theme.breakpoints.up(`${media.tablet}`)]:
  {
   width: '40px',
 }
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
