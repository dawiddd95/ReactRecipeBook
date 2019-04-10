import React from 'react'

import './Details.scss';

const Details = ({recipe}) => {
   return (  
      <div className='trendingRecipe'>
         <div className='trendingRecipe__img' style={{
            'backgroundImage': `url(${recipe.image_url})`,
            'backgroundPosition': 'center',
            'backgroundSize': 'cover'
         }}></div>
         <div className='trendingRecipe__content'>
            <div className='content__main'>
               <p className='content__title'>{recipe.title}</p>
               <div className='content__publisher'>
                  <span>Publisher:</span>
                  <p>{recipe.publisher}</p>
               </div>
               <div className='publisher__url'>
                  <span>Publisher website:</span>
                  <a href={recipe.publisher_url} target='__blank'>
                     {recipe.publisher_url}
                  </a>
               </div>
               <div className='recipe__url'>
                  <span>Recipe website: </span>
                  <a href={recipe.source_url} target='__blank'>
                     {recipe.source_url}
                  </a>
               </div>
            </div>
            <div className='content__footer'>
               <a href={recipe.publisher_url} target='__blank'>
                  VISIT PUBLISHER
               </a>
               <a href={recipe.source_url} target='__blank'>
                  VIEW RECIPE 
               </a>
            </div>
         </div>
      </div>
   );
}
 
export default Details;