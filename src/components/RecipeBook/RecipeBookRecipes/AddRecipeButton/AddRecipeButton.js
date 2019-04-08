import React from 'react'

import './AddRecipeButton.scss';

const AddRecipeButton = ({handleOpenModalClick}) => {
   return (  
      <button  className='addButton__button'>
         Add New Recipe
      </button>
   );
}
 
export default AddRecipeButton;