import recipes from '../../back/recipes.json';
import trashIcon from '../../img/trash.svg';
import {
    ImgWrapper,
    MyRecipesImg,
    MyRecipesItem,
    MyRecipesItemTitle,
    TitleIconWrapper,
    TrashIcon,
    MyRecipeInfo,
    Container,
    MyRecipesDescription,
    SvgWrapper,
    MyRecipeTime,
    MyRecipeBtn,
    TimeBtnWrapper,
} from './MyRecipesList.styled';

export const MyRecipesList = () => {
    const newArr = [];
    for (let i = 0; i < 4; i += 1) {
        newArr.push(recipes[i]);
    }
    return (
        <Container>
            <ul>
                {newArr.map(({ preview, title, description, time, _id }) => {
                    return (
                        <MyRecipesItem key={_id.$oid}>
                            <ImgWrapper>
                                <MyRecipesImg src={preview} alt={title} />
                            </ImgWrapper>
                            <MyRecipeInfo>
                                <div>
                                    <TitleIconWrapper>
                                        <MyRecipesItemTitle>{title}</MyRecipesItemTitle>
                                        <SvgWrapper>
                                            <TrashIcon src={trashIcon} width={14} height={14} />
                                        </SvgWrapper>
                                    </TitleIconWrapper>
                                    <MyRecipesDescription>{description}</MyRecipesDescription>
                                </div>
                                <TimeBtnWrapper>
                                    <MyRecipeTime>{time} min</MyRecipeTime>
                                    <MyRecipeBtn to={`/recipe/${_id}`}>See reecipe</MyRecipeBtn>
                                </TimeBtnWrapper>
                            </MyRecipeInfo>
                        </MyRecipesItem>
                    );
                })}
            </ul>
        </Container>
    );
};
