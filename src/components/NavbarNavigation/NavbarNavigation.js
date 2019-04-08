import React from 'react';

import './NavbarNavigation.scss';

import homeIcon from '../../images/home.png';
import searchIcon from '../../images/search.png';
import shoppingListIcon from '../../images/shoppingList.png';
import mealPlanIcon from '../../images/mealPlan.png';
import profileIcon from '../../images/profile.png';

import NavItem from '../NavItem/NavItem';

const NavbarNavigation = () => {
   return (  
      <nav className='navbar__navigation'>
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
      </nav>
   );
}
 
export default NavbarNavigation;