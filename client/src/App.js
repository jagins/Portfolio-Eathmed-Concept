import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MarketingPage from './pages/MarketingPage';
import OpioidProgram from './pages/OpioidProgram'
import NavbarComponent from './components/Navbar';
import './App.css';

function App() {
  return (
      <Router>
        <NavbarComponent />

        <Switch>
          <Route exact path='/' component={MarketingPage}/>
          <Route path='/opioid-program' component={OpioidProgram}/>
        </Switch>
      </Router>
  );
}

export default App;
