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
import { deleteMyRecipes, fetchMyRecipes } from 'redux/myRecipes/myRecipesOperations';
import { myRecipesSelector } from 'redux/myRecipes/myRecipesSelector';
import NoResult from 'components/NoResult/NoResult';
import { useAuth } from 'utils/hooks/useAuth';

export const MyRecipesList = ({ page }) => {
  const { isThemeToggle } = useAuth();
  const { favorites } = useSelector(favoritesSelector);
  const { myRecipes } = useSelector(myRecipesSelector);
  const [isDeleting, setIsDeleting] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDeleting && page === 'Favorites') {
      dispatch(deleteFavorite(isDeleting));
    } else if (isDeleting && page === 'My recipes') {
      dispatch(deleteMyRecipes);
    }

    if (page === 'Favorites') {
      dispatch(fetchFavorites());
    } else if (page === 'My recipes') {
      dispatch(fetchMyRecipes());
    }
  }, [dispatch, page, isDeleting]);

  const onDeleteBtnClick = id => {
    setIsDeleting(id);
  };
  let backgroundColor = '';
  let buttonsColor = '';

  if (page === 'Favorites' && isThemeToggle) {
    backgroundColor = '#EBF3D4';
    buttonsColor = '#22252A';
  } else if (page === 'My recipes' && isThemeToggle) {
    backgroundColor = '#8BAA36';
    buttonsColor = '#8BAA36';
  } else {
    backgroundColor = '#1E1F28';
    buttonsColor = '#8BAA36';
  }

  return (
    <HeadContainer>
      <MainPageTitle title={page} />
      <List>
        {(page === 'Favorites' && favorites?.favorites?.length === 0) ||
        (page === 'My recipes' && myRecipes.length === 0) ? (
          <NoResult />
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
                        <TrashIcon src={page === 'Favorites' && isThemeToggle ? trashIconBlack : trashIconWhite} />
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
