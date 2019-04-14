import React from 'react';
import PropTypes from 'prop-types';

const H1 = ({text}) => {
   return (  
      <h1>
         {text}
      </h1>
   );
}
 
export default H1;

H1.propTypes = {
   text: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
   ]),
}