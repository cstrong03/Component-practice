import React, { Component } from 'react';


class Header extends Component{
   render(){
       return(
           <header>
     <h1>CHICKEN TIKKA MASALA!</h1>
     <cite className="contributors">
           <div>By John Doe</div>
           <div><a href="https://cooking.nytimes.com/recipes/5593-chicken-and-apricot-masala" target="_blank">Source</a></div>
           </cite>
     <ul id="recipe_meta_data" className="list-group">
       <li className="list-group-item">Active: 1 Hour</li>
       <li className="list-group-item">Total: 5 Hours</li>
       <li className="list-group-item">6 Servings</li>
     </ul>
   </header>
       )
   }
}


export default Header;
