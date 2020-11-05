import React, { Component, Fragment } from 'react';
import { About } from './components/about/About';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import { Portfolio } from './components/portfolio/Portfolio';
import { Navbar } from './components/ui/Navbar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Home />
        <Navbar />
        <About />
        <Portfolio />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
