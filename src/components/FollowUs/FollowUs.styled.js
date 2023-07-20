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
&:hover {
  fill:var(--active_theme_2);
}

@media ${media.desktop} {
display: flex;
    width: 28px;
    height: 28px;
    fill: var(--active_select_2);
    -webkit-transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
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
