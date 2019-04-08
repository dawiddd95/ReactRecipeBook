import React from 'react';

import './LoadingFetchData.scss';

const LoadingFetchData = () => {
   return (  
      <div>
         <div id='xLoader'>
            <div className='google-spin-wrapper'>
               <div className='google-spin'></div>
            </div>
         </div>
         <p className='loader__text'>Please wait. Loading...</p>
      </div>
   );
}
 
export default LoadingFetchData;