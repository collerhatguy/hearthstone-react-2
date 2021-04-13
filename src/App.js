import React from "react";
import ExpansionList from "./components/ExpansionList";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./style/style.css";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ExpansionList}/>
      </Switch>
    </Router>
  );
}

export default App;
