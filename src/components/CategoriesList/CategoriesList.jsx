import { useRef, useState, useEffect } from 'react';
import { useAuth } from 'utils/hooks/useAuth';
import { axiosInstance } from 'redux/auth/authOperations';
import { toast } from 'react-hot-toast';

import { CategoriesWrapper, CategoriesContainer, CategoryLink, CategoriesItem } from './CategoriesList.styled';

export const CategoriesList = ({ dataCategoriesError, updateDataCategoriesError }) => {
  const tabListRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const [categories, setCategories] = useState([]);

  const { isThemeToggle } = useAuth();

  const getCategories = async () => {
    try {
      const res = await axiosInstance.get('/recipes/category-list');
      return res.data;
    } catch (error) {
      toast.error(`${error.message}`, {
        position: 'top-right',
        duration: 5000,
      });
      return null;
    }
  };

  useEffect(() => {
    getCategories()
      .then(res => {
        if (res === null) {
          updateDataCategoriesError(true);
          return;
        }
        updateDataCategoriesError(false);
        setCategories(res);
      })
      .catch(error => {
        updateDataCategoriesError(true);
        console.log(error.message);
      });
  }, [updateDataCategoriesError]);

  const handleMouseDown = event => {
    setIsScrolling(true);
    setStartX(event.pageX - tabListRef.current.offsetLeft);
    setScrollLeft(tabListRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsScrolling(false);
  };

  const handleMouseUp = () => {
    setIsScrolling(false);
  };

  const handleMouseMove = event => {
    if (!isScrolling) return;
    event.preventDefault();
    const x = event.pageX - tabListRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    tabListRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = event => {
    setIsScrolling(true);
    const touch = event.touches[0];
    setStartX(touch.pageX - tabListRef.current.offsetLeft);
    setScrollLeft(tabListRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsScrolling(false);
  };

  const handleTouchMove = event => {
    if (!isScrolling) return;
    event.preventDefault();
    const touch = event.touches[0];
    const x = touch.pageX - tabListRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    tabListRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <CategoriesWrapper>
      <CategoriesContainer
        ref={tabListRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {!dataCategoriesError &&
          categories.map(el => {
            const linkName = el.toLowerCase();
            return (
              <CategoriesItem key={el}>
                <CategoryLink datatype={isThemeToggle.toString()} to={`/categories/${linkName}`}>
                  {el}
                </CategoryLink>
              </CategoriesItem>
            );
          })}
      </CategoriesContainer>
    </CategoriesWrapper>
  );
};
