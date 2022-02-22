import React from 'react';
import Navbar from './projectComponents/projectNavbarComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './projectComponents/projectHomeComponent';
import About from './projectComponents/projectAboutComponent';
import Contact from './projectComponents/projectContactComponent';
import Footer from './projectComponents/projectFooterComponent';
import Products from './projectComponents/projectProductsComponent';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path ='/products' component ={Products}/>
          <Route path='/contactus' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
