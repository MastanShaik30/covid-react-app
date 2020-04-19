import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import World from './contents/World';
import Us from './contents/Us';
import India from './contents/India';
import IndiaDst from './contents/IndiaDst';
import Map from './contents/Map';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Navbar />
      <Route exact path="/">
      <Home />
      </Route>
      <Route path="/map">
      <Map />
      </Route>
      <Route path="/world">
      <World />
      </Route>
      <Route path="/us">
      <Us />
      </Route>
      <Route path="/india">
      <India />
      </Route>
      <Route path="/indiadst">
      <IndiaDst />
      </Route>
      </div>
      </Router>
    );
  }
  
}

export default App;
