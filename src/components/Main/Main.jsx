import { useNavigate } from 'react-router-dom';
import Search from '../../components/Search/Search';

const Main = () => {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const searchQuery = event.target.elements.query.value.trim();
    if (!searchQuery) {
      console.log('Search query should not be empty');
      return;
    }
    navigate({
      pathname: '/search',
      search: `?query=${searchQuery}`,
    });
  };

  return (
    <>
      <Search handleSubmit={handleSubmit} />
    </>
  );
};

export default Main;
