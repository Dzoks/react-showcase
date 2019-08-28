import React from 'react';
import logo from './logo.svg';
import './App.css';
import View from "./core/components/View";
import {ViewState} from "./core/enum";

function App() {

  const store={
    home:{
      button:ViewState.ENABLED
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <View page="home" id="button" store={store}><button onClick={event =>{
            console.log('aa');
        } } >src/App.js</button></View> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
