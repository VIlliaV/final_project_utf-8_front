import { SearchForm } from './Search.styled';
import { useAuth } from '../../utils/hooks/useAuth';

const Search = ({ handleSubmit, buttonStyle = 'origin-button' }) => {
  const { isThemeToggle } = useAuth();

  return (
    <SearchForm onSubmit={handleSubmit} datatype={isThemeToggle.toString()}>
      <input type="text" name="query" placeholder="Enter the text"></input>
      <button type="submit" className={buttonStyle}>
        Search
      </button>
    </SearchForm>
  );
};

export default Search;
