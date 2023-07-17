import recipes from '../../back/recipes.json';
import trashIconWhite from '../../img/trashWhite.svg';
import trashIconBlack from '../../img/trashBlack.svg';
import {
  ImgWrapper,
  MyRecipesImg,
  MyRecipesItem,
  MyRecipesItemTitle,
  TitleIconWrapper,
  TrashIcon,
  MyRecipeInfo,
  MyRecipesDescription,
  SvgWrapper,
  MyRecipeTime,
  MyRecipeBtn,
  TimeBtnWrapper,
  PageTitle,
  List,
} from './MyRecipesList.styled';
import HeadContainer from 'components/HeadContainer/HeadContainer';

export const MyRecipesList = ({ page }) => {
  let backgroundColor = '';
  let buttonsColor = '';

  if (page === 'Favorites') {
    backgroundColor = '#EBF3D4';
    buttonsColor = '#22252A';
  } else {
    backgroundColor = '#8BAA36';
    buttonsColor = '#8BAA36';
  }

  const newArr = [];
  for (let i = 0; i < 4; i += 1) {
    newArr.push(recipes[i]);
  }
  return (
    <HeadContainer>
      <PageTitle>{page}</PageTitle>
      <List>
        {newArr.map(({ preview, title, description, time, _id }) => {
          return (
            <MyRecipesItem key={_id.$oid}>
              <ImgWrapper>
                <MyRecipesImg src={preview} alt={title} />
              </ImgWrapper>
              <MyRecipeInfo>
                <div>
                  <TitleIconWrapper>
                    <MyRecipesItemTitle>{title}</MyRecipesItemTitle>
                    <SvgWrapper style={{ backgroundColor: backgroundColor }}>
                      <TrashIcon src={page === 'Favorites' ? trashIconBlack : trashIconWhite} />
                    </SvgWrapper>
                  </TitleIconWrapper>
                  <MyRecipesDescription>{description}</MyRecipesDescription>
                </div>
                <TimeBtnWrapper>
                  <MyRecipeTime>{time} min</MyRecipeTime>
                  <MyRecipeBtn to={`/recipe/${_id}`} style={{ backgroundColor: buttonsColor }}>
                    See recipe
                  </MyRecipeBtn>
                </TimeBtnWrapper>
              </MyRecipeInfo>
            </MyRecipesItem>
          );
        })}
      </List>
    </HeadContainer>
  );
};
