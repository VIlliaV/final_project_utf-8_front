import style from 'styled-components';
import { media } from '../../utils/media';

export const StyledH3 = style.h3`
color: var( --text_second_theme_1);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: -0.25px;
    margin: 0;
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
