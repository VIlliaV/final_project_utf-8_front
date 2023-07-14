import { useState, useEffect } from 'react';
import { StyledH3, StyledPopularRecipe, StyledList } from './AddRecipeForm.styled';
import axios from 'axios';
const BASE_URL = 'https://final-project-utf-8-backend.onrender.com';

export default function Popular() {
  const [popular, setPopular] = useState([]);
  let i = 0;
  const getPopular = async () => {
    try {
      const config = {
        method: 'GET',
        url: BASE_URL + '/popular-recipe',
      };

      const res = await axios(config);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  };
  useEffect(() => {
    getPopular()
      .then(res => {
        res.map(el => {
          if (i === 4) {
            return i;
          }
          i++;
          return setPopular(prevState => [...prevState, el]);
        });
      })
      // getPopular()
      //   .then(res => {
      //     setPopular(res);
      //   })
      .catch(error => {
        handleError(error);
      });
  }, []);

  function handleError(error) {
    console.error(error);
    alert(`${error.message}`);
  }

  console.log(popular);
  // popular.map(el => console.log(el.preview, el.title, el.description));

  return (
    <StyledPopularRecipe>
      <StyledH3>Popular recipe</StyledH3>
      <ul>
        {popular.map(el => {
          return (
            <StyledList key={el._id} id={el._id}>
              <a href={el.youtube} alt={el.title}>
                <img src={el.thumb} alt={el.title} />
                <div>
                  <h4>{el.title}</h4>
                  <p>{el.description}</p>
                </div>
              </a>
            </StyledList>
          );
        })}
      </ul>
    </StyledPopularRecipe>
  );
}
