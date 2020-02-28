import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MarketingPage from './pages/MarketingPage';
import OpioidProgram from './pages/OpioidProgram';
import TransferSelectPage from './pages/TransferSelectPage';
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
          <Route path='/select-earthmed' component={TransferSelectPage}/>
        </Switch>
        <MarketingFooter />
      </Router>
  );
}

export default App;
