import React, { Component } from 'react';
import './App.css';
import Card from './containers/Card/Card.js'
import Description from './containers/Descritption/Descritpion'

class App extends Component {
  render() {
    return (
      <div className="App ba bw2 w-50 center bg-gold">
        <Card />
        <Description />
      </div>
    );
  }
}

export default App;
