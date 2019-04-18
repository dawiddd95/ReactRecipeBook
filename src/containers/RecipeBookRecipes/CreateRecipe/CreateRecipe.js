import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CreateRecipeForm from '../CreateRecipeForm/CreateRecipeForm';

//to sie wlacza i przy tworzeniu przepisu i przy kliknieciu edit

const CreateRecipe = (props) => {
   return (  
      <>
         <SectionTitle 
            title={!props.edit ? 'CREATE RECIPE' : 'EDIT RECIPE'}
            haveSelect={false}
         />
         <CreateRecipeForm 
            edit={props.edit}
            id={props.match.params.id}
            editRecipe={props.recipeToEdit}
         />
      </>
   );
}

const mapStateToProps = state => {
   return {
      recipe: state.recipeReducer,
      recipeToEdit: state.recipeToEditReducer // Teraz to jest tylko jedna pozycja
   }
}

const ConnectedCreateRecipe = connect(mapStateToProps)(CreateRecipe);
 
CreateRecipe.propTypes = {
   edit: PropTypes.bool.isRequired,
   id: PropTypes.string,
}

export default ConnectedCreateRecipe;