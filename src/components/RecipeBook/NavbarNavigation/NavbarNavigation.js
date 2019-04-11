import React from 'react';

import * as S from './StyledNavbarNavigation';

import homeIcon from '../../../images/home.png';
import searchIcon from '../../../images/search.png';
import shoppingListIcon from '../../../images/shoppingList.png';
import mealPlanIcon from '../../../images/mealPlan.png';
import profileIcon from '../../../images/profile.png';

import NavItem from '../NavItem/NavItem';

const NavbarNavigation = () => {
   return (  
      <S.Wrapper>
         <NavItem 
            text='Home'
            icon={homeIcon}
         />
         <NavItem 
            text='Recipes'
            icon={searchIcon}
         />
         <NavItem 
            text='Shopping List'
            icon={shoppingListIcon}
         />
         <NavItem 
            text='Meal Plan'
            icon={mealPlanIcon}
         />
         <NavItem 
            text='Profile'
            icon={profileIcon}
         />
      </S.Wrapper>
   );
}
 
export default NavbarNavigation;