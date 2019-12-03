import React, { Component } from "react";
import { addSmurf } from '../Actions';
import "./App.css";
import SmurfList from '../components/SmurfList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfList />
      </div>
    );
  }
}

export default App;
