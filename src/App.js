import React from "react";
import ExpansionList from "./components/ExpansionList";
import SearchPage from "./components/SearchPage";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./style/style.css";

function App() {
  
  return (
    <Router>
      <nav>
        <Link to="/">
          All Expansions
        </Link>
        <Link to="/search-card">
          Search Page
        </Link>
      </nav>
      <Switch>
        <Route path="/" exact component={ExpansionList}/>
        <Route path="/search-card" component={SearchPage}/>
      </Switch>
    </Router>
  );
}

export default App;
