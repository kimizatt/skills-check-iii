import React from 'react';
import {HashRouter} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Routes from './routes'


function App() {
  return (
    <HashRouter>
    <div className="App" >
      <Header />
      <div id='main-background'>
        
      
      
      <Routes />
    </div></div>
    </HashRouter>
  );
}

export default App;
