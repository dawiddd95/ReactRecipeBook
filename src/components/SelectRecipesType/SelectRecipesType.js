import React, {Component} from 'react'

import './SelectRecipesType.scss';


// ogarnac tutaj useState

class SelectRecipesType extends Component {
   state = {  }
   render() { 
      return (  
         <select className='select__recipeType' name="" id="">
            <option value="all">Filter By All Recipes</option>
            <option value="favorite">Filter By Favorite Recipes</option>
         </select>
      );
   }
}
 
export default SelectRecipesType;