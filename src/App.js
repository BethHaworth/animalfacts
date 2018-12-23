import React, { Component } from 'react';
import './App.css';

// imports from components
import { Card } from './components';

class App extends Component {

 
  render() {
    
    return (
      <div className="bg">
        <div className="App">
        <header className="App-header">
          <h1> Unusual Animal Facts</h1>
          <h2> A project by a very bored Beth.</h2>
          <Card/>
      
        </header>
        </div>
        </div>
       );
     }
}


export default App;


