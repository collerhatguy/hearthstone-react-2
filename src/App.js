import ExpansionList from "./components/ExpansionList";
import SearchPage from "./components/SearchPage";
import ArtistPage from "./components/ArtistPage";

import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import useFetchAllExpansions from "./hooks/useFetchAllExpansions";

import "./style/style.css";

function App() {
  const data = useFetchAllExpansions();
  const [artist, setArtist] = useState("")
  // const [allArtists, setAllArtists] = useState([])
  // useEffect(() => {
  //   setAllArtists(data?.reduce((totalArtists, expansion) => {
  //     const expansionArtists = expansion.cards.map(card => {
  //       if (totalArtists.includes(card.artist)) return card.artist;
  //       return;
  //     })
  //     return [...totalArtists, ...expansionArtists ];
  //   }, []))
  // }, [data]) 

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
          <Link to="/artist-list">
            Artist Page
          </Link>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={() => 
          <ExpansionList 
            data={data} 
            setArtist={setArtist} 
          />}
        />
        <Route path="/search-card" component={SearchPage}/>
        <Route path="/artist-list" component={() => 
          <ArtistPage 
            artist={artist} 
            data={data} 
          />}
        />
      </Switch>
    </Router>
  );
}

export default App;
