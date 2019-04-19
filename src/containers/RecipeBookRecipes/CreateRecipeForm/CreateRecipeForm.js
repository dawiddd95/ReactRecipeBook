import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form';
import StarRatingComponent from 'react-star-rating-component';
import uuid from 'uuid';

import {addRecipeAction, editRecipeAction} from '../../../actions/actions';
import * as S from './StyledCreateRecipeForm.js';

import addIngredientInput from '../../../images/addIngredient.svg';
import addMethodInput from '../../../images/addMethod.svg';

import AddRecipeFormInput from '../../../components/RecipeBookRecipes/AddRecipeFormInput/AddRecipeFormInput';
import FormRecipeProperties from '../../../components/RecipeBookRecipes/FormRecipeProperties/FormRecipeProperties';

class CreateRecipeForm extends Component {
   state = {  
      starRating: !this.props.edit ? 0 : this.props.recipeToEdit.starRating,
      ingredientInputs: !this.props.edit ? [{
         ingredientLp: 0, 
         ingredientValue: ""
      }] : this.props.recipeToEdit.ingredients,
      methodInputs: !this.props.edit ? [{
         methodLp: 0, 
         methodValue: ""
      }] : this.props.recipeToEdit.method,
      ingredient: {
         ingredientLp: 1,
         ingredientValue: "",
      },
      method: {
         methodLp: 1,
         methodValue: "",
      },
      errors: {
         recipeExists: false,
         isTitleEmpty: false
      },
      redirectToNewPage: false
   }

   componentDidMount() {
      window.scrollTo(0,0);
   };

   onStarClick = (nextValue, prevValue, name) => {
      this.setState({
         starRating: nextValue
      })
   };
   addIngredientInput = () => {
      this.setState(prevState => ({
         ingredient: {
            ingredientLp: prevState.ingredient.ingredientLp+1
         }, 
         ingredientInputs: this.state.ingredientInputs.concat([{
            ingredientLp: !this.props.edit ? this.state.ingredient.ingredientLp : this.state.ingredientInputs.length, 
            ingredientValue: ""
         }]) 
      }))
   };
   addMethodInput = () => {
      this.setState(prevState => ({
         method: {
            methodLp: prevState.method.methodLp+1
         }, 
         methodInputs: this.state.methodInputs.concat([{
            methodLp: !this.props.edit ? this.state.method.methodLp : this.state.methodInputs.length, 
            methodValue: ""
         }])
      }))
   };
   changeIngredientInputValue = lp => event => {
      const newInput = this.state.ingredientInputs.map((currentElement, index) => {
         if(lp !== index) return currentElement;
         return { ...currentElement, ingredientValue: event.target.value }
      })

      this.setState({
         ingredientInputs: newInput
      })
   };
   changeMethodInputValue = lp => event => {
      const newInput = this.state.methodInputs.map((currentElement, index) => {
         if(lp !== index) return currentElement;
         return { ...currentElement, methodValue: event.target.value }
      })

      this.setState({
         methodInputs: newInput
      })
   };
   submit = values => {
      if(!this.props.edit) {
         this.addRecipe(values);
      } else {
         this.editRecipe(values); 
      }
   };
   addRecipe = values => {
      const validateRecipeTitle = this.props.recipes.findIndex(currentElement => {
         return currentElement.recipeTitle === values.recipeTitle
      })

      const recipeExists = this.validateRecipeExists(validateRecipeTitle);
      const recipeTitleIsEmpty = this.validateRecipeTitleIsEmpty(values.recipeTitle);

      if(!recipeExists && !recipeTitleIsEmpty) {
         values.ingredients = this.state.ingredientInputs;
         values.method = this.state.methodInputs;
         values.starRating = this.state.starRating;
         values.favorite = false;
         values.addFavoriteMessage = false;
         values.lp = uuid.v4();
   
         this.props.newRecipe(values);

         this.setState({
            redirectToNewPage: true
         })
      }

      this.setState({
         errors: {
            recipeExists,
            isTitleEmpty: recipeTitleIsEmpty
         },
      })
   };
   validateRecipeExists = (validateRecipeTitle) => {
      if(validateRecipeTitle === -1) {
         return false;
      } else {
         return true;
      }
   };
   validateRecipeTitleIsEmpty = (validateRecipeTitle) => {
      if(validateRecipeTitle !== undefined) {
         return false;
      } else {
         return true;
      }
   };
   editRecipe = values => {
      values.lp = this.props.id;
      values.ingredients = this.state.ingredientInputs;
      values.method = this.state.methodInputs;
      values.starRating = this.state.starRating;
      
      this.props.editingRecipe(values);

      this.setState({
         redirectToNewPage: true
      })
   };


   render() { 
      const { starRating, ingredientInputs, methodInputs, redirectToNewPage, errors } = this.state;
      const { edit, id } = this.props;

      const styleRatingStars = {
         'marginBottom': '0',
         'paddingLeft': '10px',
         'borderLeft': '4px solid #333',
         'fontSize': '30px',
      };
      
      if(redirectToNewPage && !edit) {
         return <Redirect to='/app/recipes' />
      } else if(redirectToNewPage && edit) {
         return <Redirect to={`/app/recipes/recipe=${id}`} />
      }

      return (   
         <S.Form onSubmit={this.props.handleSubmit(this.submit)}>
            <AddRecipeFormInput
               title='Title'
               name='recipeTitle'
               type='text'
               placeholder=''
            /> 
            <AddRecipeFormInput
               title='Recipe Image Link'
               name='recipeImage'
               type='text'
               placeholder='E.g. https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550.jpg'
            /> 
            <S.StarRating>
               Rating: 
               <div style={styleRatingStars}>
                  <StarRatingComponent
                     name='Rating: ' 
                     value={starRating} 
                     starCount={5} 
                     emptyStarColor="#f3f3f3"
                     onStarClick={this.onStarClick} 
                  />
               </div>
            </S.StarRating>
            <AddRecipeFormInput
               title='Description'
               name='recipeDescription'
               type='text'
               placeholder=''
            />
            <AddRecipeFormInput
               title='Nutrition'
               name='recipeNutrition'
               type='text'
               placeholder=''
            />
            <FormRecipeProperties />
            <S.ElementWrapper>
               <S.ElementTitle>
                  <S.Paragraph>Ingredients</S.Paragraph>
               </S.ElementTitle>
               <S.ElementInputWrapper>
                  {ingredientInputs.map((currentElement) => (
                     <S.ElementInput key={currentElement.ingredientLp}>
                        <S.Input  
                           type="text"
                           value={currentElement.ingredientValue}
                           onChange={this.changeIngredientInputValue(currentElement.ingredientLp)}
                        />
                        <S.Img
                           key={currentElement.ingredientLp}
                           onClick={() => this.addIngredientInput(currentElement.ingredientLp)} 
                           src={addIngredientInput} 
                           alt="add"
                        /> 
                     </S.ElementInput>
                  ))}
               </S.ElementInputWrapper>
            </S.ElementWrapper>
            <S.ElementWrapper>
               <S.ElementTitle method='true'>
                  <S.Paragraph>Method</S.Paragraph>
               </S.ElementTitle>
               <S.ElementInputWrapper>
                  {methodInputs.map(currentElement => (
                     <S.ElementInput method='true' key={currentElement.methodLp}>
                        <S.MethodLabel>
                           Step {currentElement.methodLp+1}:
                        </S.MethodLabel>
                        <S.MethodWrapper>
                           <S.Input 
                              method='true'
                              type="text"
                              value={currentElement.methodValue}
                              onChange={this.changeMethodInputValue(currentElement.methodLp)}
                           />
                           <S.Img 
                              method='true'
                              key={currentElement.methodLp}
                              onClick={() => this.addMethodInput(currentElement.methodLp)} 
                              src={addMethodInput} 
                              alt="add"
                           /> 
                        </S.MethodWrapper>
                     </S.ElementInput>
                  ))}
               </S.ElementInputWrapper>
            </S.ElementWrapper>
            <AddRecipeFormInput
               title='Comment To Recipe'
               name='recipeComment'
               type='text'
               placeholder=''
            />
            <AddRecipeFormInput
               title='Recipe Article Link'
               name='recipeArticle'
               type='text'
               placeholder='E.g. https://www.delish.com/cooking/recipe-ideas/recipes/a51337/classic-lasagna-recipe/'
            />
            <AddRecipeFormInput
               title='Recipe Video Link'
               name='recipeVideo'
               type='text'
               placeholder='E.g. https://www.youtube.com/watch?v=zVqunZUuwSs'
            />
            <S.ButtonsWrapper>
               <S.Button>
                  {!edit ? 'Add Recipe' : 'Edit Recipe'} 
               </S.Button>
               <Link style={{'textDecoration': 'none'}} to={!edit ? '/app/recipes' : `/app/recipes/recipe=${id}`}>
                  Cancel
               </Link>
            </S.ButtonsWrapper>
            {errors.recipeExists ? <S.Error>
               Recipe with this title already exists
            </S.Error> : undefined}
            {errors.isTitleEmpty ? <S.Error>
               You must provide recipe title 
            </S.Error> : undefined}
         </S.Form>
      );
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      recipes: state.recipeReducer,
      recipeToEdit: state.recipeToEditReducer,
      initialValues: {
         recipeTitle: ownProps.edit ? ownProps.editRecipe.recipeTitle : undefined, 
         recipeImage: ownProps.edit ? ownProps.editRecipe.recipeImage : undefined,
         recipeDescription: ownProps.edit ? ownProps.editRecipe.recipeDescription : undefined,
         preparationTime: ownProps.edit ? ownProps.editRecipe.preparationTime : undefined,
         cookTime: ownProps.edit ? ownProps.editRecipe.cookTime : undefined,
         totalTime: ownProps.edit ? ownProps.editRecipe.totalTime : undefined,
         serves: ownProps.edit ? ownProps.editRecipe.serves : undefined,
         recipeNutrition: ownProps.edit ? ownProps.editRecipe.recipeNutrition : undefined, 
         recipeComment: ownProps.edit ? ownProps.editRecipe.recipeComment : undefined,
         recipeArticle: ownProps.edit ? ownProps.editRecipe.recipeArticle : undefined,
         recipeVideo: ownProps.edit ? ownProps.editRecipe.recipeVideo : undefined    
      }
   }
}

const mapDispatchToProps = dispatch => {
   return {
      newRecipe: (values) => dispatch(addRecipeAction(values)),
      editingRecipe: (values) => dispatch(editRecipeAction(values))
   }
}

CreateRecipeForm.propTypes = {
   edit: PropTypes.bool.isRequired,
   id: PropTypes.string,
   editRecipe: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
   ]) 
}
 
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
   form: 'createRecipeForm',
   enableReinitialize: true,  
})(CreateRecipeForm))