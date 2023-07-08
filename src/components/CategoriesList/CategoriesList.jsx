import { CategoriesContainer, CategoryLink } from './CategoriesList.styled';

const categories = require('../../back/categories.json');

// console.log(categories);

export const CategoriesList = () => {
  return (
    <CategoriesContainer>
      {categories.map(({ _id: { $oid: id }, name }) => {
        const linkName = name.toLowerCase();
        return (
          <CategoryLink key={id} to={`/categories/${linkName}`}>
            {name}
          </CategoryLink>
        );
      })}
    </CategoriesContainer>
  );
};
