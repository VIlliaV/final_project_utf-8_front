import { WrapperForDesktop, Wrapper, Title, List, Item, Image } from './RecipePreparation.styled';
import dataRecipe from '../../back/recipes.json';

const RecipePreparation = ({ instructions, preview }) => {
    const recipe = dataRecipe[1];
    const instructionsList = recipe.instructions.split('\r\n');

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
                <Image src={recipe.preview} alt={recipe.name} />
            </Wrapper>
        </>
    );
};

export default RecipePreparation;
