import { useNavigate } from 'react-router-dom';
import Search from '../../components/Search/Search';
import СhooseYourBreakfast from '../../components/СhooseYourBreakfast/СhooseYourBreakfast';
import { HeroSection, HeroSectionText } from './Main.styled';

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
      <HeroSection>
        <h1>
          <span>So</span>Yummy
        </h1>
        <HeroSectionText>
          "What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.
        </HeroSectionText>
        <СhooseYourBreakfast />
        <Search handleSubmit={handleSubmit} />
      </HeroSection>
    </>
  );
};

export default Main;
