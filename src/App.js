import ExpansionList from "./components/ExpansionList";
import SearchPage from "./components/SearchPage";
import ArtistPage from "./components/ArtistPage";

import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import useFetchAllExpansions from "./hooks/useFetchAllExpansions";

import "./style/style.css";

function App() {
  const data = useFetchAllExpansions();
  const [artist, setArtist] = useState("")

  return (
    <Router>
      <header>
        <nav>
          <Link to="/">
            All Expansions
          </Link>
          <Link to="/search-card">
            Search Page
          </Link>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact>
          <ExpansionList data={data} />
        </Route>
        <Route path="/search-card" component={SearchPage}/>
        <Route path="/artist-list/:artist">
          <ArtistPage 
            artist={artist} 
            data={data} 
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
