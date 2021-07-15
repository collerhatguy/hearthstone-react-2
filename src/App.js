import React from "react";
import ExpansionList from "./components/ExpansionList";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./themes";

import "./reset.css";

function App() {
  const StyleHeader = styled.header`
    display: flex;
    align-items: baseline;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.primeColor};
    color: ${({ theme }) => theme.secondaryColor};
    nav {
      width: 100%;
      display: flex;
      align-items: baseline;
      justify-content: space-evenly;
    }
    a {
      background-color: ${({ theme }) => theme.primeColor};
      color: ${({ theme }) => theme.secondaryColor};
      padding: 0 1rem;
      text-decoration: none;
    }
  `
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <StyleHeader>
          <nav>
            <Link to="">
              All Expansions
            </Link>
            <Link to="/search-card">
              Search Page
            </Link>
          </nav>
        </StyleHeader>
        <Switch>
          <Route path="/" exact component={ExpansionList}/>
          <Route path="/search-card" component={SearchPage}/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
