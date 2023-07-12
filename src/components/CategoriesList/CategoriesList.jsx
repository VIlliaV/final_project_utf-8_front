import { useRef, useState, useEffect } from 'react';
import axios from 'axios';

import { CategoriesWrapper, CategoriesContainer, CategoryLink, CategoriesItem } from './CategoriesList.styled';

const BASE_URL = 'https://final-project-utf-8-backend.onrender.com';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

export const CategoriesList = () => {
  const tabListRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const [categories, setCategories] = useState([]);
  // const [status, setStatus] = useState(Status.IDLE);

  const getCategories = async () => {
    try {
      const config = {
        method: 'GET',
        url: BASE_URL + '/recipes/category-list',
      };
      const res = await axios(config);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    // setStatus(Status.PENDING);
    getCategories()
      .then(res => {
        setCategories(res);
        // setStatus(Status.RESOLVED);
      })
      .catch(error => {
        // setStatus(Status.REJECTED);
        handleError(error);
      });
  }, []);

  function handleError(error) {
    console.error(error);
    alert(`${error.message}`);
  }

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
        {categories.map(el => {
          const linkName = el.toLowerCase();
          return (
            <CategoriesItem key={el}>
              <CategoryLink to={`/categories/${linkName}`}>{el}</CategoryLink>
            </CategoriesItem>
          );
        })}
      </CategoriesContainer>
    </CategoriesWrapper>
  );
};
