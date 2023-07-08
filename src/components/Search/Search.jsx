import { SearchForm } from './Search.styled';

const Search = ({ handleSubmit, buttonStyle = 'origin-button' }) => {
  return (
    <SearchForm onSubmit={handleSubmit}>
      <input type="text" name="query" placeholder="Enter the text"></input>
      <button type="submit" className={buttonStyle}>
        Search
      </button>
    </SearchForm>
  );
};

export default Search;
