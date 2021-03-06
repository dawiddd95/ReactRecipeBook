import React from 'react';
import PropTypes from 'prop-types';

import * as S from './StyledDeleteModal.js';

const DeleteModal = ({recipeLp, recipeName, handleDeleteRecipeClick, handleHideModalDelete}) => {
   return (  
      <S.Wrapper>
         <S.Content>
            <S.Paragraph>
               Are you sure to delete 
               <S.Span>
                  {recipeName}
               </S.Span> 
               recipe?
            </S.Paragraph>
            <S.ButtonsWrapper>
               <S.Button cancel onClick={() => handleHideModalDelete()} className='cancel'>
                  Cancel
               </S.Button>
               <S.Button onClick={() => handleDeleteRecipeClick(recipeLp)} className='delete'>
                  Delete
               </S.Button>
            </S.ButtonsWrapper>
         </S.Content>
      </S.Wrapper>
   );
}
 
export default DeleteModal;

DeleteModal.propTypes = {
   recipeLp: PropTypes.string.isRequired,
   recipeName: PropTypes.string,
   handleDeleteRecipeClick: PropTypes.func.isRequired,
   handleHideModalDelete: PropTypes.func.isRequired
}