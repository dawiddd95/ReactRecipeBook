import React from 'react'

import * as S from './StyledRecipeBook.js';

import AppNavbar from './AppNavbar/AppNavbar';
import RecipeBookRouters from '../../Routers/RecipeBookRouters';

const RecipeBook = () => {
   return (  
      <S.Wrapper>
         <AppNavbar />
         <RecipeBookRouters />
      </S.Wrapper>
   );
}
 
export default RecipeBook;