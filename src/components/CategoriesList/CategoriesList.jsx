import { useRef, useState } from 'react';

import { CategoriesWrapper, CategoriesContainer, CategoryLink, CategoriesItem } from './CategoriesList.styled';

const categories = require('../../back/categories.json');

// console.log(categories);

export const CategoriesList = () => {
  const tabListRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

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
        {categories.map(({ _id: { $oid: id }, name }) => {
          const linkName = name.toLowerCase();
          return (
            <CategoriesItem key={id}>
              <CategoryLink to={`/categories/${linkName}`}>{name}</CategoryLink>
            </CategoriesItem>
          );
        })}
      </CategoriesContainer>
    </CategoriesWrapper>
  );
};
