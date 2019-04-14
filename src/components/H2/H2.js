import React from 'react'
import PropTypes from 'prop-types'

const H2 = ({text}) => {
   return (  
      <h2>
         {text}
      </h2>
   );
}
 
export default H2;

H2.propTypes = {
   text: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
   ]),
}