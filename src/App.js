import ExpansionList from "./components/ExpansionList";
import SearchPage from "./components/SearchPage";
import ArtistPage from "./components/ArtistPage";

import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import useFetchAllExpansions from "./hooks/useFetchAllExpansions";

import "./style/style.css";
import { theme } from "./themes";

function App() {
  const data = useFetchAllExpansions();
  const [artist, setArtist] = useState("")
  const StyledHeader = styled.header`
    width: 100%;
    position: fixed;
    top: 0px;
    background-color: ${props => props.theme.primeColor};
    z-index: 1;
    nav {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    a {
      ${({ theme }) => theme.hoverEffect(theme.primeColor, theme.secondColor)};
      ${props => props.theme.spacing}
      font-size: 2rem;
      background-color: ${props => props.theme.primeColor};
      color: ${props => props.theme.secondColor};
      text-decoration: none;
    }
  `
  const StyledMain = styled.main`
    color: ${props => props.theme.primeColor};
    background-color: ${props => props.theme.secondColor};
    margin-top: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `
  return (
    <ThemeProvider theme={theme}>
        <StyledHeader>
          <nav>
            <Link to="/">
              All Expansions
            </Link>
            <Link to="/search-card">
              Search Page
            </Link>
          </nav>
        </StyledHeader>
        <StyledMain>
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
        </StyledMain>
    </ThemeProvider>
  );
}

export default App;
