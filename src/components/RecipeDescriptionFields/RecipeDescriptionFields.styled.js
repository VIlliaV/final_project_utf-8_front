import style from 'styled-components';

import { media } from '../../utils/media';
import { Autocomplete } from '@mui/material';
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

export const StyledAutoCategory = styled(Autocomplete)({
  '& div label': {
    color: 'var(--select_text_1)',
  },
  '& div div': {
    color: 'var(--select_text_1)',
  },
  '& div fieldset': {
    borderColor: 'var( --selectBack_theme_1)',
  },
  width: '160px',
});

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
export const StyledInputIngredient = style.input`
    padding: 10px;
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
      padding: 10px;
      width:100px;
      margin-right: 150px;
    }
      @media ${media.desktop} {
        padding: 10px;
      
      margin-right: 60px;
    }
`;

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

export const ImageSrc = style.span`
  cursor: pointer;
  display: flex;
  width: 280px;
  height: 270px;
  border: 1px solid grey;
  border-radius:10px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  @media ${media.desktop}{
    width: 360px;
    height: 345px;
  },
`;

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
