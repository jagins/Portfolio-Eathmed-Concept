import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MarketingPage from './pages/MarketingPage';
import OpioidProgram from './pages/OpioidProgram';
import MedicalConditionsPage from './pages/MedicalConditionsPage';
import MedicalCardInfo from './pages/MedicalCardInfoPage';
import RecreationPage from './pages/RecreationPage';
import FaqPage from './pages/FaqPage';
import PlantsPage from './pages/PlantsPage'
import ProductsPage from './pages/ProductsPage';
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
          <Route path='/medical-card' component={MedicalCardInfo} />
          <Route path='/recreation' component={RecreationPage} />
          <Route path='/faq' component={FaqPage} />
          <Route path='/plants' component={PlantsPage} />
          <Route path='/products' component={ProductsPage} />
        </Switch>
        <MarketingFooter />
      </Router>
  );
}

export default App;
