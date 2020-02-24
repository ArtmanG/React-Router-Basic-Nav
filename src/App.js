import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';


const App = () => (
  <Router>
    <div>
      <Navigation />
    </div>
  </Router>
);

export default App;
