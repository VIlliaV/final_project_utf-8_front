import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';
import Search from 'components/Search/Search';

const SearchBar = props => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('click');
  };
  return (
    <>
      <Search buttonStyle="inversion-button" handleSubmit={handleSubmit} />
      <SearchTypeSelector />
    </>
  );
};

export default SearchBar;
