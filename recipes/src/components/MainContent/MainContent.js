import React, { Component } from 'react'

class MainContent extends Component{
render(){
  console.log(this.props.food.ingredients)
       return(
         <article className="article">
       <img id="food_image" src="./media/tikka.jpg" alt="" className="img-thumbnail"/>

        <h1>Ingredients</h1>
        <ul>
          <li>{this.props.food.ingredients[0]}</li>
          <li>{this.props.food.ingredients[1]}</li>
          <li>{this.props.food.ingredients[2]}</li>
          <li>{this.props.food.ingredients[3]}</li>
          <li>{this.props.food.ingredients[4]}</li>
          <li>{this.props.food.ingredients[5]}</li>
          <li>{this.props.food.ingredients[6]}</li>
          <li>{this.props.food.ingredients[7]}</li>
          <li>{this.props.food.ingredients[8]}</li>
          <li>{this.props.food.ingredients[9]}</li>
        </ul>


       <h1>Preparation</h1>
       <p>{this.props.food.preparation}</p>
     </article>
   )
   }
}
export default MainContent
