export const currentRecipe = store => store.shoppingList.currentRecipeSliceState;
export const currentRecipeLoading = store => store.currentRecipe.isLoading;
export const currentRecipeError = store => store.currentRecipe.error;
