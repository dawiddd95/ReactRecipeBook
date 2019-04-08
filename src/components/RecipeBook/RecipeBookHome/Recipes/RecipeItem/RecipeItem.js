import React from 'react';

import './RecipeItem.scss';

const RecipeItem = (props) => {
   const recipeImg = {'backgroundImage': `url(${props.image_url})`}
   console.log(recipeImg);
   return (
      <div className='recipes__recipe'>  
         <div className='recipe__img' style={recipeImg}></div>
         <p className='recipe__name'>{props.title}</p>
         <div className='recipe__publisher'>
            <p className='publisher__publisher'>Publisher: </p>
            <p className='publisher__name'>{props.publisher}</p>
         </div>
         <button className='recipe__button'>
            VIEW RECIPE
         </button>
      </div>
   );
}
 
export default RecipeItem;