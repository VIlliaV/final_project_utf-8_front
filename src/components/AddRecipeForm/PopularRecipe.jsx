import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import Loader from '../Loader/Loader';
import { StyledH3, StyledPopularRecipe, StyledList } from './AddRecipeForm.styled';
import { getPopular } from './redux/AddRecipreOperation';

export default function Popular() {
  const [popular, setPopular] = useState([]);
  let i = 0;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular())
      .then(res => {
        res.payload.map(el => {
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
    toast.error(`${error.message}`);
  }

  return (
    <StyledPopularRecipe>
      <StyledH3>Popular recipe</StyledH3>
      <ul>
        {popular.length > 0 ? (
          popular.map(el => {
            return (
              <StyledList key={nanoid()} id={el._id}>
                <a href={el.youtube} alt={el.title}>
                  <img src={el.thumb} alt={el.title} />
                  <div>
                    <h4>{el.title}</h4>
                    <p>{el.description}</p>
                  </div>
                </a>
              </StyledList>
            );
          })
        ) : (
          <Loader />
        )}
      </ul>
    </StyledPopularRecipe>
  );
}
