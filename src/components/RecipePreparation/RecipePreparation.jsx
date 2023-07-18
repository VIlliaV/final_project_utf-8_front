import { WrapperForDesktop, Wrapper, Title, List, Item, Image } from './RecipePreparation.styled';
import { nanoid } from 'nanoid';
import { useAuth } from 'utils/hooks/useAuth';

const RecipePreparation = ({ instructions, preview, title }) => {
  const { isThemeToggle } = useAuth();
  const instructionsList = instructions.split('\r\n');

  return (
    <>
      <Wrapper>
        <WrapperForDesktop>
          <Title datatype={isThemeToggle.toString()}>Recipe Preparation</Title>
          <List>
            {instructionsList.map(instruction => {
              return (
                <Item key={nanoid()} datatype={isThemeToggle.toString()}>
                  {instruction}
                </Item>
              );
            })}
          </List>
        </WrapperForDesktop>
        <Image src={preview} alt={title} />
      </Wrapper>
    </>
  );
};

export default RecipePreparation;
