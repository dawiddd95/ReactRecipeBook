import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './TrendingRecipeDetails.scss';

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Details from '../../components/Details/Details';

// http://localhost:3000/app/home/trending%20recipe=713134

   // image_url: "http://static.food2fork.com/icedcoffee5766.jpg" V
   // publisher: "The Pioneer Woman" V
   // publisher_url: "http://thepioneerwoman.com" v
   // source_url: "http://thepioneerwoman.com/cooking/2011/06/perfect-iced-coffee/" V
   // title: "Perfect Iced Coffee" V


   // logout button color: #904343


class TrendingRecipeDetails extends Component {
   render() {
      const filterRenderRecipe = this.props.recipe.filter(currentElement => { 
         if(currentElement.recipe_id === this.props.match.params.id) {
           return currentElement;
         }
      });
   
      if(this.props.recipe.length === 0) {
         return <Redirect to='/app/home' />
      }

      return (  
         <div className='trendingRecipesWrapper'>
            <SectionTitle 
               haveSelect={false}
               title={`TRENDING RECIPE`}               
            />
            <div className='trendingRecipes__link'>
               <Link to='/app/home'>
                  <span>&lsaquo;</span>
                  BACK TO TRENDING RECIPES
               </Link>      
            </div>
            <Details 
               recipe={filterRenderRecipe[0]}
            />
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      recipe: state.trendingRecipesReducer
   }
}

TrendingRecipeDetails = connect(mapStateToProps)(TrendingRecipeDetails)

export default TrendingRecipeDetails;