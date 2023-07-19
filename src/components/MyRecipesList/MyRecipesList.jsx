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
import { useEffect, useState } from 'react';
import { deleteFavorite, fetchFavorites } from 'redux/favorites/favoritesOperations';
import { useDispatch, useSelector } from 'react-redux';
import Paginator from 'components/Paginator/Paginator';
import { favoritesSelector } from 'redux/favorites/favoritesSelector';
import { fetchMyRecipes } from 'redux/myRecipes/myRecipesOperations';
import { myRecipesSelector } from 'redux/myRecipes/myRecipesSelector';

export const MyRecipesList = ({ page }) => {
  const { favorites } = useSelector(favoritesSelector);
  const { myRecipes } = useSelector(myRecipesSelector);
  const [isDeleting, setIsDeleting] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (page === 'Favorites' && !isDeleting) {
      dispatch(fetchFavorites());
    } else if (page === 'My recipes' && !isDeleting) {
      dispatch(fetchMyRecipes());
    }

    if (isDeleting) {
      dispatch(deleteFavorite(isDeleting));
    }
  }, [dispatch, page, isDeleting]);

  const onDeleteBtnClick = id => {
    setIsDeleting(id);
  };
  let backgroundColor = '';
  let buttonsColor = '';

  if (page === 'Favorites') {
    backgroundColor = '#EBF3D4';
    buttonsColor = '#22252A';
  } else {
    backgroundColor = '#8BAA36';
    buttonsColor = '#8BAA36';
  }

  return (
    <HeadContainer>
      <MainPageTitle title={page} />
      <List>
        {favorites.favorites?.length === 0 && myRecipes?.myRecipes.length === 0 ? (
          <h2>You dont have anything on this page</h2>
        ) : page === 'Favorites' && favorites.favorites ? (
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
                      <SvgWrapper
                        $backgroundColor={backgroundColor}
                        onClick={() => {
                          onDeleteBtnClick(_id);
                        }}
                      >
                        <TrashIcon src={page === 'Favorites' ? trashIconBlack : trashIconWhite} />
                      </SvgWrapper>
                    </TitleIconWrapper>
                    <MyRecipesDescription>{description}</MyRecipesDescription>
                  </div>
                  <TimeBtnWrapper>
                    <MyRecipeTime>{time} min</MyRecipeTime>
                    <MyRecipeBtn to={`/recipe/${_id}`} $buttonColor={buttonsColor}>
                      See recipe
                    </MyRecipeBtn>
                  </TimeBtnWrapper>
                </MyRecipeInfo>
              </MyRecipesItem>
            );
          })
        ) : (
          myRecipes.myRecipes &&
          myRecipes.myRecipes.map(({ preview, title, description, time, _id }) => {
            return (
              <MyRecipesItem key={_id}>
                <ImgWrapper>
                  <MyRecipesImg src={preview} alt={title} />
                </ImgWrapper>
                <MyRecipeInfo>
                  <div>
                    <TitleIconWrapper>
                      <MyRecipesItemTitle>{title}</MyRecipesItemTitle>
                      <SvgWrapper $backgroundColor={backgroundColor}>
                        <TrashIcon src={page === 'Favorites' ? trashIconBlack : trashIconWhite} />
                      </SvgWrapper>
                    </TitleIconWrapper>
                    <MyRecipesDescription>{description}</MyRecipesDescription>
                  </div>
                  <TimeBtnWrapper>
                    <MyRecipeTime>{time} min</MyRecipeTime>
                    <MyRecipeBtn to={`/recipe/${_id}`} $buttonColor={buttonsColor}>
                      See recipe
                    </MyRecipeBtn>
                  </TimeBtnWrapper>
                </MyRecipeInfo>
              </MyRecipesItem>
            );
          })
        )}
      </List>
      <Paginator totalPage={favorites.totalPages} page={1} setCurrentPage={1} />
    </HeadContainer>
  );
};
