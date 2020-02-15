import React from 'react';
import MarketingPage from './components/MarketingPage';
import NavbarComponent from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <MarketingPage />
    </div>
  );
}

export default App;
