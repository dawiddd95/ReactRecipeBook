import React from 'react'

import './SearchRecipe.scss';

const SearchRecipe = () => {
   return (  
      <div className='searchWrapper'>
         <input 
            className='searchWrapper__input' 
            type="text"
            placeholder='Search Recipe'   
         />
         <button className='searchWrapper__button'>Search</button>
      </div>
   );
}
 
export default SearchRecipe;