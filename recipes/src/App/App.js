import React, { Component } from 'react';
import './style.css';
import Footer from '../components/Footer/Footer.js'
import NavBar from '../components/NavBar/NavBar.js'
import Header from '../components/Header/Header.js'
import MainContent from '../components/MainContent/MainContent.js'
import recipes from '../data/recipes';

const recipe = recipes[0];

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <NavBar />
        <Header />
        <MainContent food={recipe}/>
        <Footer />
      </div>
    );
  }
}

export default App;
