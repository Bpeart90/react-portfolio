import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />


      </Router>
      <Footer />

    </div>
  );
}

export default App;
