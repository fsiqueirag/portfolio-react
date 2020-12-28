import React, { Fragment } from 'react';
import { About } from './components/about/About';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import { Portfolio } from './components/portfolio/Portfolio';
import { Navbar } from './components/ui/Navbar';

export const App = () => {

  // const [language, setLanguage] = useState("espanol");

    return (
      <Fragment>
        {/* <Home language={language} setLanguage={setLanguage} /> */}
        {/* <Navbar language={language}/> */}
        {/* <About language={language} /> */}
        <Home />
        <Navbar />
        <About />
        <Portfolio />
        <Footer />
      </Fragment>
    );
  
}

export default App;
