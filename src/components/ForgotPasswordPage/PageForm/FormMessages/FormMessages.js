import React from 'react';

const FormMessages = ({inputValue, submit, err, success}) => {
   const errorColor = {'color': 'red'};
   const successColor = {'color': '#00CC00'};
   
   return (  
      <>
         {(inputValue === '' && submit) && <p style={errorColor}>Please enter email address</p>}
         {(err && inputValue !== '') && <p style={errorColor}>
            We couldn't find your account with that information
         </p>}
         {success && <p style={successColor}>We send you a new password link on email</p>}
      </>
   );
}
 
export default FormMessages;