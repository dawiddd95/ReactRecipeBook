import React from 'react';

import './EmptyList.scss';

const EmptyList = ({text}) => {
   return (  
      <div className='empty__list'>
         <div className="list__img"></div>
         <div className='list__title'>
            Nothing!!
         </div>
         <p className='list__subtitle'>
            {text}
         </p>
      </div>
   );
}
 
export default EmptyList;