import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import MarketingPage from './components/MarketingPage';
import NavbarComponent from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <MarketingPage />
      </Router>
    </div>
  );
}

export default App;
