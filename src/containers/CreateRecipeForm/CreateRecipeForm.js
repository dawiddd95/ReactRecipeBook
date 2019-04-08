import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';

import './CreateRecipeForm.scss';
import addIngredientInput from '../../images/addIngredient.svg';
import addMethodInput from '../../images/addMethod.svg';


// usprawnic wstawianie do tablicy
class CreateRecipeForm extends Component {
   state = {  
      back: false,
      starRating: 0,
      recipeTitle: '',
      recipeImage: '',
      recipeDescription: '',
      recipeNutrition: '',
      recipePreparation: '',
      recipeCook: '',
      recipeTotal: '',
      recipeServes: '',
      recipeComment: '',
      recipeArticle: '',
      recipeVideo: '',
      ingredientInputs: [{
         ingredientLp: 0, 
         ingredientValue: "",
         clicked: false,
      }],
      methodInputs: [{
         methodLp: 0,
         methodValue: "",
         clicked: false
      }],    
      ingredient: {
         ingredientLp: 1,
         ingredientValue: "",
         clicked: false,
      },
      method: {
         methodLp: 1,
         methodValue: "",
         clicked: false
      }, 

      createRecipes: []

      // moze zrobic obiekt recipeForm: {z tym wszystkim. } tylko jak zrobic wtedy [event.target.name]
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

   handleChangeCreateRecipeInput = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   handleClickAddRecipe = (event) => {
      event.preventDefault();
      let recipe = {};
      recipe.push({
         starRating: this.state.starRating,
         recipeTitle: this.state.recipeTitle,
         recipeImage: this.state.recipeImage,
         recipeDescription: this.state.recipeDescription,
         recipeNutrition: this.state.recipeNutrition,
         recipePreparation: this.state.recipePreparation,
         recipeCook: this.state.recipeCook,
         recipeTotal: this.state.recipeTotal,
         recipeServes: this.state.recipeServes,
         recipeComment: this.state.recipeComment,
         recipeArticle: this.state.recipeArticle,
         recipeVideo: this.state.recipeVideo,
         ingredientInputs: this.state.ingredientInputs,
         methodInputs: this.state.methodInputs,
      })

      this.setState({
         createRecipes: this.state.createRecipes.concat([recipe])
      })
      console.log(this.state.createRecipes)
   }

   handleClickCancelRecipe = (event) => {
      event.preventDefault();

   }

   render() { 
      const {
         starRating, 
         recipeTitle,
         recipeImage,
         recipeDescription,
         recipeNutrition,
         recipePreparation,
         recipeCook,
         recipeTotal,
         recipeServes,
         recipeComment,
         recipeArticle,
         recipeVideo,
         ingredientInputs, 
         methodInputs
      } = this.state;
      
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
            <form className='createRecipe__form' onSubmit={this.handleClickAddRecipe}>
               <label className='form__recipeTitle'>
                  Title: 
                  <input 
                     name='recipeTitle'
                     value={recipeTitle}
                     onChange={this.handleChangeCreateRecipeInput}
                     className='recipeTitle__input form__input' 
                     type="text"
                  />
               </label>
               <label className='form__image'>
                  Recipe Image Link: 
                  <input 
                     name='recipeImage'
                     value={recipeImage}
                     onChange={(event) => this.handleChangeCreateRecipeInput(event)}
                     placeholder='E.g. https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550.jpg' 
                     className='image__input form__input' 
                     type="text"
                  />
               </label>
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
                  <input 
                     name='recipeDescription'
                     value={recipeDescription}
                     onChange={(event) => this.handleChangeCreateRecipeInput(event)}
                     className='description__input form__input' 
                     type="text"
                  />
               </label>
               <label className='form__nutrition'>
                  Nutrition: 
                  <input
                     name='recipeNutrition' 
                     value={recipeNutrition}
                     onChange={(event) => this.handleChangeCreateRecipeInput(event)}
                     className='nutrition__input form__input' 
                     type="text"
                  />
               </label>
               <div className='form__recipeProperties'>
                  <label className='recipeProperties__preparationTime'>
                     Preparation Time: 
                     <input
                        name='recipePreparation' 
                        value={recipePreparation}
                        onChange={(event) => this.handleChangeCreateRecipeInput(event)}
                        className='preparationTime__input recipeProperties__input' 
                        type="text"
                     />
                  </label>
                  <label className='recipeProperties__cookTime'>
                     Cook Time: 
                     <input
                        name='recipeCook' 
                        value={recipeCook}
                        onChange={(event) => this.handleChangeCreateRecipeInput(event)}
                        className='cookTime__input recipeProperties__input' 
                        type="text"
                     />
                  </label>
                  <label className='recipeProperties__totalTime'>
                     Total Time: 
                     <input
                        name='recipeTotal' 
                        value={recipeTotal}
                        onChange={(event) => this.handleChangeCreateRecipeInput(event)}
                        className='totalTime__input recipeProperties__input' 
                        type="text"
                     />
                  </label>
                  <label className='recipeProperties__serves'>
                     Serves: 
                     <input
                        name='recipeServes' 
                        value={recipeServes}
                        onChange={(event) => this.handleChangeCreateRecipeInput(event)}
                        className='serves__input recipeProperties__input' 
                        type="text"
                     />
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
                  <input
                     name='recipeComment' 
                     value={recipeComment}
                     onChange={(event) => this.handleChangeCreateRecipeInput(event)}
                     className='comment__input form__input' 
                     type="text"
                  />
               </label>
               <label className='form__article'>
                  Recipe Article Link: 
                  <input 
                     name='recipeArticle'
                     value={recipeArticle}
                     onChange={(event) => this.handleChangeCreateRecipeInput(event)}
                     placeholder='E.g. https://www.delish.com/cooking/recipe-ideas/recipes/a51337/classic-lasagna-recipe/'   
                     className='article__input form__input' 
                     type="text"
                  />
               </label>
               <label className='form__video'>
                  Recipe Video Link: 
                  <input 
                     name='recipeVideo'
                     value={recipeVideo}
                     onChange={(event) => this.handleChangeCreateRecipeInput(event)}
                     placeholder='E.g. https://www.youtube.com/watch?v=zVqunZUuwSs'
                     className='video__input form__input' 
                     type="text"
                  />
               </label>
               <div className='form__buttons'>
                  <button className='buttons__add'>
                     Add Recipe
                  </button>
                  <button className='buttons__cancel' onClick={this.handleClickCancelRecipe}>
                     Cancel
                  </button>
               </div>
            </form>
      );
   }
}
 
export default CreateRecipeForm;