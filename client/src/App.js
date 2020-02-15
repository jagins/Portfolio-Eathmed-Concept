import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MarketingPage from './components/MarketingPage';
import NavbarComponent from './components/Navbar';
import './App.css';

function App() {
  return (
      <Router>
        <NavbarComponent />

        <Switch>
          <Route exact path='/' component={MarketingPage}/>
        </Switch>
      </Router>
  );
}

export default App;
