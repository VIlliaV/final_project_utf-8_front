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
  List,
} from './MyRecipesList.styled';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import HeadContainer from 'components/HeadContainer/HeadContainer';
import { useEffect } from 'react';
import { deleteFavorite, fetchFavorites } from 'redux/favorites/favoritesOperations';
import { useDispatch, useSelector } from 'react-redux';
import Paginator from 'components/Paginator/Paginator';
import { favoritesSelector } from 'redux/favorites/favoritesSelector';

export const MyRecipesList = ({ page }) => {
  const { favorites } = useSelector(favoritesSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  let backgroundColor = '';
  let buttonsColor = '';

  if (page === 'Favorites') {
    backgroundColor = '#EBF3D4';
    buttonsColor = '#22252A';
  } else {
    backgroundColor = '#8BAA36';
    buttonsColor = '#8BAA36';
  }

  const onDeleteBtnClick = id => {
    dispatch(deleteFavorite(id));
  };

  const newArr = [];
  for (let i = 0; i < 4; i += 1) {
    newArr.push(recipes[i]);
  }
  return (
    <HeadContainer>
      <MainPageTitle title={page} />
      <List>
        {favorites.favorites &&
          page === 'Favorites' &&
          favorites.favorites.map(({ preview, title, description, time, _id }) => {
            return (
              <MyRecipesItem key={_id}>
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
      <Paginator totalPage={favorites.totalPages} page={1} setCurrentPage={1} />
    </HeadContainer>
  );
};
