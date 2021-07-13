import './App.css';

import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import Welcome from "./components/Home/Welcome";
import Navigation from "./components/Navigation/Navigation";
import Calculation from "./components/Calculator/Calculation";
import Navbar from "./components/Navbar";
import theme from './theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Navbar/>
          <Switch>
            <div className="main">
                <Route exact path="/">
                  <Welcome/>
                </Route>
                <Route exact path="/navigation">
                  <Navigation/>
                </Route>
                <Route exact path="/calculator">
                  <Calculation/>
                </Route>
            </div>
          </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
