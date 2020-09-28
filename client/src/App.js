import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MarketingPage from './pages/MarketingPage';
import OpioidProgram from './pages/OpioidProgram';
import MedicalConditionsPage from './pages/MedicalConditionsPage';
import MedicalCardInfo from './pages/MedicalCardInfoPage';
import RecreationPage from './pages/RecreationPage';
import FaqPage from './pages/FaqPage';
import PlantsPage from './pages/PlantsPage'
import HoursPage from './pages/HoursPage';
import ProductsPage from './pages/ProductsPage';
import MarketingFooter from './components/MarketingFooter';
import ProductDetails from './components/ProductDetails';
import Store from './pages/Store';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={MarketingPage}/>
          <Route path='/opioid-program' component={OpioidProgram}/>
          <Route path='/medical-conditions' component={MedicalConditionsPage}/>
          <Route path='/medical-card' component={MedicalCardInfo} />
          <Route path='/recreation' component={RecreationPage} />
          <Route path='/faq' component={FaqPage} />
          <Route path='/plants' component={PlantsPage} />
          <Route path='/products' component={ProductsPage} />
          <Route path='/hours' component={HoursPage} />
          <Route exact path='/store' component={Store} />
          <Route path='/store/products/:id' component={ProductDetails} />
          <Route path='/store/login' component={Login}/>
          <Route path='/store/register' component={Register}/>
        </Switch>
        <MarketingFooter/>
      </Router>
  );
}

export default App;
