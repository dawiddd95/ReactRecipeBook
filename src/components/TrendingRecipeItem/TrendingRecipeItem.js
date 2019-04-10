import React from 'react';
import {Link} from 'react-router-dom';

import './TrendingRecipeItem.scss';

const TrendingRecipeItem = (props) => {
   const recipeImg = {'backgroundImage': `url(${props.image_url})`}
   
   return (
      // pozmieniac nazwy klas jesli nei pasuja do nazwy komponentu nazwa na glowny jeslijest div moze byc S.ComponentWrapper
      <div className='recipes__recipe'>  
         <div className='recipe__img' style={recipeImg}></div>
         <p className='recipe__name'>{props.title}</p>
         <div className='recipe__publisher'>
            <p className='publisher__publisher'>Publisher: </p>
            <p className='publisher__name'>{props.publisher}</p>
         </div>
         <div className='recipe__link'>
            <Link to={`/app/home/trending recipe=${props.recipe_id}`}>
               VIEW RECIPE
            </Link>
         </div>
      </div>
   );
}
 
export default TrendingRecipeItem;