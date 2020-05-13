import React from 'react';
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path ="/" component ={Home} />
      </div>
    </Router>
    
  );
}

export default App;
