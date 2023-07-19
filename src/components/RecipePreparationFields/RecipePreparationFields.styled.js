import style from 'styled-components';

import { media } from '../../utils/media';

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

export const StyledInputRecipe = style.textarea`
margin-top: 25px;
color: var( --select_text_1);
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
