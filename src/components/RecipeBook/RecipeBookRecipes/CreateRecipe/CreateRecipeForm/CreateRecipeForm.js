import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';

import './CreateRecipeForm.scss';
import addPhotoIcon from '../../../../../images/addphoto.svg';
import addIngredientInput from '../../../../../images/addIngredient.svg';
import addMethodInput from '../../../../../images/addMethod.svg';

class CreateRecipeForm extends Component {
   state = {  
      starRating: 0,
      ingredient: {
         ingredientLp: 1,
         ingredientValue: "",
         clicked: false,
      },
      ingredientInputs: [{
         ingredientLp: 0, 
         ingredientValue: "",
         clicked: false,
      }],
      method: {
         methodLp: 1,
         methodValue: "",
         clicked: false
      },
      methodInputs: [{
         methodLp: 0,
         methodValue: "",
         clicked: false
      }]
   }

   onStarClick = (nextValue, prevValue, name) => {
      this.setState({
         starRating: nextValue
      })
   }

   addIngredientInput = () => {
      this.setState(prevState => ({
         ingredient: {
            ingredientLp: prevState.ingredient.ingredientLp+1
         }, 
         ingredientInputs: this.state.ingredientInputs.concat([{
            ingredientLp: this.state.ingredient.ingredientLp, 
            ingredientValue: "",
            clicked: false
         }]) 
      }))
   }

   addMethodInput = () => {
      this.setState(prevState => ({
         method: {
            methodLp: prevState.method.methodLp+1
         }, 
         methodInputs: this.state.methodInputs.concat([{
            methodLp: this.state.method.methodLp, 
            methodValue: "",
            clicked: false
         }]) 
      }))
   }
   
   changeIngredientInputValue = lp => event => {
      const newInput = this.state.ingredientInputs.map((currentElement, index) => {
         if(lp !== index) return currentElement;
         return { ...currentElement, ingredientValue: event.target.value }
      })

      this.setState({
         ingredientInputs: newInput
      })
   }

   changeMethodInputValue = lp => event => {
      const newInput = this.state.methodInputs.map((currentElement, index) => {
         if(lp !== index) return currentElement;
         return { ...currentElement, methodValue: event.target.value }
      })

      this.setState({
         methodInputs: newInput
      })
   }

   render() { 
      const {starRating, ingredientInputs, methodInputs} = this.state;
      const styleRatingStars = {
         'marginBottom': '0',
         'paddingLeft': '10px',
         'borderLeft': '4px solid #333',
         'fontSize': '30px',
      }

      const ingredients = ingredientInputs.map((currentElement) => (
         <div key={currentElement.ingredientLp} className='inputs__ingredientInput'>
            <input  
               type="text"
               value={currentElement.ingredientValue}
               onChange={this.changeIngredientInputValue(currentElement.ingredientLp)}
            />
            <img
               onClick={this.addIngredientInput} 
               src={addIngredientInput} 
               alt="add"
            /> 
         </div>
      ))

      const method = methodInputs.map(currentElement => (
         <div key={currentElement.methodLp} className='inputs__methodInput'>
            <label className='methodInput__label'>
               Step {currentElement.methodLp+1}:
            </label>
            <div className='methodInput__wrapper'>
               <input 
                  type="text"
                  value={currentElement.methodValue}
                  onChange={this.changeMethodInputValue(currentElement.methodLp)}
               />
               <img
                  onClick={this.addMethodInput} 
                  src={addMethodInput} 
                  alt="add"
               /> 
            </div>
         </div>
      ))

      return (  
         <form className='createRecipe__form'>
            <label className='form__recipeTitle'>
               Title: 
               <input className='recipeTitle__input form__input' type="text"/>
            </label>
            <div className='form__addPhotos'>
               <div className='addPhotos__main'>
                  <img className='main__icon' src={addPhotoIcon} alt=""/>
               </div>
               <div className='addPhotos__extra'>
                  <div className='extra__photo photo1'>
                     <img className='photo__icon' src={addPhotoIcon} alt=""/>
                  </div>
                  <div className='extra__photo photo2'>
                     <img className='photo__icon' src={addPhotoIcon} alt=""/>
                  </div>
                  <div className='extra__photo photo3'>
                     <img className='photo__icon' src={addPhotoIcon} alt=""/>
                  </div>
                  <div className='extra__photo photo4'>
                     <img className='photo__icon' src={addPhotoIcon} alt=""/>
                  </div>
               </div>
            </div>
            <label className='form__starRating'>
               Rating: 
               <div className='starRating__stars' style={styleRatingStars}>
                  <StarRatingComponent
                     name='Rating: ' 
                     value={starRating} 
                     starCount={5} 
                     emptyStarColor="#f3f3f3"
                     onStarClick={this.onStarClick} 
                  />
               </div>
            </label>
            <label className='form__description'>
               Description: 
               <input className='description__input form__input' type="text"/>
            </label>
            <label className='form__nutrition'>
               Nutrition: 
               <input className='nutrition__input form__input' type="text"/>
            </label>
            <div className='form__recipeProperties'>
               <label className='recipeProperties__preparationTime'>
                  Preparation Time: 
                  <input className='preparationTime__input recipeProperties__input' type="text"/>
               </label>
               <label className='recipeProperties__cookTime'>
                  Cook Time: 
                  <input className='cookTime__input recipeProperties__input' type="text"/>
               </label>
               <label className='recipeProperties__totalTime'>
                  Total Time: 
                  <input className='totalTime__input recipeProperties__input' type="text"/>
               </label>
               <label className='recipeProperties__serves'>
                  Serves: 
                  <input className='serves__input recipeProperties__input' type="text"/>
               </label>
            </div>
            <div className='form__ingredients'>
               <div className='ingredients__title'>
                  <p>Ingredients</p>
               </div>
               <div className='ingredients__inputs'>
                  {ingredients}
               </div>
            </div>
            <div className='form__method'>
               <div className='method__title'>
                  <p>Method</p>
               </div>
               <div className='method__inputs'>
                  {method}
               </div>
            </div>
            <label className='form__comment'>
               Comment To Recipe: 
               <input className='comment__input form__input' type="text"/>
            </label>
            <label className='form__article'>
               Recipe Article Link: 
               <input className='article__input form__input' type="text"/>
            </label>
            <label className='form__video'>
               Recipe Video Link: 
               <input className='video__input form__input' type="text"/>
            </label>
            <div className='form__buttons'>
               <button className='buttons__add'>
                  Add Recipe
               </button>
               <button className='buttons__cancel'>
                  Cancel
               </button>
            </div>
         </form>
      );
   }
}
 
export default CreateRecipeForm;