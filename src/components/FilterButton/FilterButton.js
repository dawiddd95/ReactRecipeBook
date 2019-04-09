import React from 'react'
import {NavLink} from 'react-router-dom';

const FilterButton = ({text, link, handleChangeRecipesType}) => {
   return (  
      <NavLink exact to={link}>
         <button onClick={() => handleChangeRecipesType(link)}>
            {text}
         </button>   
      </NavLink>
   );
}
 
export default FilterButton;