import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MarketingPage from './pages/MarketingPage';
import OpioidProgram from './pages/OpioidProgram';
import MedicalConditionsPage from './pages/MedicalConditionsPage';
import NavbarComponent from './components/Navbar';
import MarketingFooter from './components/MarketingFooter';
import './App.css';

function App() {
  return (
      <Router>
        <NavbarComponent />

        <Switch>
          <Route exact path='/' component={MarketingPage}/>
          <Route path='/opioid-program' component={OpioidProgram}/>
          <Route path='/medical-conditions' component={MedicalConditionsPage}/>
        </Switch>
        <MarketingFooter />
      </Router>
  );
}

export default App;
