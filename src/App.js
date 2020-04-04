import React, { Component } from 'react';
import GetCovidData from './components/CovidData/GetCovidData';
import './App.css';

class App extends Component {
  render() {
    return (
  <div>
        <br/>
        <h1>Covid Data</h1>
        <GetCovidData/> 
      </div>
    );
  }
  
}

export default App;
