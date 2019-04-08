import React from 'react';

import './SectionTitle.scss';

import SelectRecipesType from '../SelectRecipesType/SelectRecipesType';

const SectionTitle = ({title, haveSelect}) => {
   if(haveSelect) {
      return (
         <div className='section__title'>
            <p>{title}</p>
               <SelectRecipesType />
         </div>
      )
   }

   return (  
      <div className='section__title'>
         <p>{title}</p>
      </div>
   );
}
 
export default SectionTitle;