import React from 'react'

const FilterButton = ({text, type, handleChangeRecipesType}) => {
   return (  
      <button onClick={() => handleChangeRecipesType(type)}>
         {text}
      </button>   
   );
}
 
export default FilterButton;