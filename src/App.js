import React, { Component } from 'react';
import routes from './routes';
import './style/reset.css';



class App extends Component {
  render(){
    return(
      <div className="main-page">

      {routes}  
      
      </div>
    )
  }
}

export default App;
