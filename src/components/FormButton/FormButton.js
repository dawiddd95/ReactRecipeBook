import React from 'react'

const FormButton = (props) => {
   return (  
      <button className={props.nameOfClass} type='submit'>
         {props.text}
      </button>
   );
}
 
export default FormButton;