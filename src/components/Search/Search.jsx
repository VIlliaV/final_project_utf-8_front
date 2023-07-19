import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from './Search.styled';
import { useAuth } from '../../utils/hooks/useAuth';

const Search = ({ handleSubmit, buttonStyle = 'origin-button', queryType }) => {
  const [searchParams] = useSearchParams();
  const value = searchParams.get(queryType);
  const [searchValue, setSearchValue] = useState(value ? value : '');
  const { isThemeToggle } = useAuth();

  return (
    <SearchForm onSubmit={handleSubmit} datatype={isThemeToggle.toString()}>
      <input
        type="text"
        name="query"
        onChange={e => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
        placeholder="Enter the text"
        datatype={isThemeToggle.toString()}
      ></input>
      <button type="submit" className={buttonStyle} datatype={isThemeToggle.toString()}>
        Search
      </button>
    </SearchForm>
  );
};

export default Search;
