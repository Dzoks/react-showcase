import React from 'react';
import logo from './logo.svg';
import './App.css';
import View from "./core/components/View";
import {ViewState} from "./core/enum";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Home from "./pages/Home";
import Page from "./core/router/Page";
import First from "./pages/First";
import Second from "./pages/Second";
import Forbidden from "./pages/Forbidden";

function App() {

  const store={
    second:{
      button:ViewState.HIDDEN
    }
  };
  return (
      <div>
        <BrowserRouter>
          <div>
            <Route
                exact
                path="/"
                render={() => <Redirect to="/home" />}
            />
            <Route path="/home" exact component={Home} />
            <Route path="/forbidden" exact component={Forbidden} />

            <Page
                path="/first"
                exact
                component={First}
                id="first"
                redirectUrl="/forbidden"
                store={store}
            />
            <Page
                path="/second"
                exact
                component={Second}
                id="second"
                redirectUrl="/forbidden"
                store={store}
            />
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
