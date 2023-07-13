import { WrapperForDesktop, Wrapper, Title, List, Item, Image } from './RecipePreparation.styled';

const RecipePreparation = ({ instructions, preview, title }) => {
  const instructionsList = instructions.split('\r\n');

  return (
    <>
      <Wrapper>
        <WrapperForDesktop>
          <Title>Recipe Preparation</Title>
          <List>
            {instructionsList.map(instruction => {
              return <Item>{instruction}</Item>;
            })}
          </List>
        </WrapperForDesktop>
        <Image src={preview} alt={title} />
      </Wrapper>
    </>
  );
};

export default RecipePreparation;
