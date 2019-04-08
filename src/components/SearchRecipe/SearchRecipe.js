import React from 'react'

import './SearchRecipe.scss';

import FormButton from '../FormButton/FormButton';

const SearchRecipe = () => {
   return (  
      <div className='searchWrapper'>
         <input 
            className='searchWrapper__input' 
            type="text"
            placeholder='Search Recipe'   
         />
         <FormButton 
            nameOfClass='searchWrapper__button'
            text='Search'
         />
      </div>
   );
}
 
export default SearchRecipe;