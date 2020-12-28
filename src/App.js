import React, { Fragment, useEffect, useState } from 'react';
import { About } from './components/about/About';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import { Portfolio } from './components/portfolio/Portfolio';
import { Navbar } from './components/ui/Navbar';

import { ClipLoader } from "react-spinners";


export const App = () => {
  
  const [isLoading, setIsLoading] = useState(true);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {

        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();

      })
    })

    await Promise.all(promises);

    setIsLoading(false);
  }

  useEffect(() => {

    const imgs = [
      "./images/chatbot.png",
      "./images/consultora.png",
      "./images/cv.png",
      "./images/easybank.png",
      "./images/profile-pic.png",
      "./images/weather-app.png"
    ]

    cacheImages(imgs);
  }, [])

  // const [language, setLanguage] = useState("espanol");

    return (
      <Fragment>
        {
        isLoading
          ?
          <div className="spinner-div">
            <ClipLoader size={150} color={"#bc4749"} />
          </div>
          :
          <div>
            <Home />
            <Navbar />
            <About />
            <Portfolio />
            <Footer />
          </div>
        }
      </Fragment>
    );
  
}

export default App;
