import React from "react";
import ExpansionList from "./components/ExpansionList";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./style/style.css";

function App() {
  
  return (
    <div className="App">
      <h1>Hearthstone Cards</h1>
      <ExpansionList />
    </div>
  );
}

export default App;
