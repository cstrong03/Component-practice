import React, { Component } from 'react'

class NavBar extends Component{
  render(){
    return(
      <div>
      <nav className="nav">
        <button className="btn btn-default">Previous Recipe</button>
        <button className="btn btn-default">Next Recipe</button>
      </nav>
      </div>
    )
  }
}

export default NavBar
