import React from 'react';
import './DeleteModal.scss';

const DeleteModal = ({recipeLp, recipeName, handleDeleteRecipeClick, handleHideModalDelete}) => {
   return (  
      <div className="modal">
         <div className="modal__content">
            <p>Are you sure to delete 
               <span className='span__recipeName'>
                  {recipeName}
               </span> 
               recipe?
            </p>
            <div className='modalContent__buttons'>
               <button onClick={() => handleHideModalDelete()} className='cancel'>
                  Cancel
               </button>
               <button onClick={() => handleDeleteRecipeClick(recipeLp)} className='delete'>
                  Delete
               </button>
            </div>
         </div>
      </div>
   );
}
 
export default DeleteModal;