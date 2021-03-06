import * as actionType from './actionTypes';

export const changeLoggedIn = (isLoggedIn) => {
    return {
       type: actionType.USER_LOGGED,
       isLoggedIn 
    }
} 

export const userRegisterAction = (data) => {
    return {
        type: actionType.USER_REGISTER,
        data
    }
} 

export const trendingRecipesAction = (recipe) => {
    return {
        type: actionType.TRENDING_RECIPES,
        recipe
    }
}

export const filterShowRecipes = (filter) => {
    return {
        type: actionType.FILTER_SHOW_RECIPES,
        filter
    }
}

export const addRecipeAction = (recipe) => {
    return {
        type: actionType.ADD_RECIPE,
        recipe
    }
}

export const deleteRecipeAction = (recipe) => {
    return {
        type: actionType.DELETE_RECIPE,
        recipe
    }
} 

export const favoriteRecipeAction = (recipe) => {
    return {
        type: actionType.FAVORITE_RECIPE,
        recipe
    }
}

export const searchRecipeAction = (searchingRecipe) => {
    return {
        type: actionType.SEARCH_RECIPE,
        searchingRecipe
    }
}

export const recipeToEditAction = (recipe) => {
    return {
        type: actionType.RECIPE_TO_EDIT,
        recipe
    }
}

export const editRecipeAction = (recipe) => {
    return {
        type: actionType.EDIT_RECIPE,
        recipe
    }
}







