import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './common/components/Navigation/Navigation';
import Footer from './common/components/Footer/Footer';
import Home from './pages/Home/components/Home';
import About from './pages/About/components/About';
import Contact from './pages/Contact/components/Contact';
import Work from './pages/Work/components/ProjectList';
import NotFound from './pages/404/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/work" component={Work} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
