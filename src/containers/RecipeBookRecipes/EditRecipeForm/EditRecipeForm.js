import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form';
import StarRatingComponent from 'react-star-rating-component';

import * as S from '../CreateRecipeForm/StyledCreateRecipeForm';

import addIngredientInput from '../../../images/addIngredient.svg';
import addMethodInput from '../../../images/addMethod.svg';

import AddRecipeFormInput from '../../../components/RecipeBookRecipes/AddRecipeFormInput/AddRecipeFormInput';
import FormRecipeProperties from '../../../components/RecipeBookRecipes/FormRecipeProperties/FormRecipeProperties';


class EditRecipeForm extends Component {
   state = {  
      starRating: 0,
      ingredientInputs: [{
         ingredientLp: 0, 
         ingredientValue: "",
      }],
      methodInputs: [{
         methodLp: 0,
         methodValue: "",
      }],    
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
            ingredientLp: this.state.ingredient.ingredientLp, 
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
            methodLp: this.state.method.methodLp, 
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
      console.log(values)
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


   render() { 
      const { starRating, ingredientInputs, methodInputs, redirectToNewPage, errors } = this.state;
      const styleRatingStars = {
         'marginBottom': '0',
         'paddingLeft': '10px',
         'borderLeft': '4px solid #333',
         'fontSize': '30px',
      };
      const ingredients = ingredientInputs.map((currentElement) => (
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
      ));
      const method = methodInputs.map(currentElement => (
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
      ));

      
      if(redirectToNewPage) {
         return <Redirect to='/app/recipes' />
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
                  {ingredients}
               </S.ElementInputWrapper>
            </S.ElementWrapper>
            <S.ElementWrapper>
               <S.ElementTitle method='true'>
                  <S.Paragraph>Method</S.Paragraph>
               </S.ElementTitle>
               <S.ElementInputWrapper>
                  {method}
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
            
         </S.Form>
      )
   }
}

const mapStateToProps = state => {
   return {
      // recipes: state.recipeReducer
   }
}

const mapDispatchToProps = dispatch => {
   return {
      // newRecipe: (values) => dispatch(addRecipeAction(values)),
   }
}

EditRecipeForm = connect(mapStateToProps, mapDispatchToProps)(EditRecipeForm)
 
export default reduxForm({
   form: 'editRecipeForm'
})(EditRecipeForm);