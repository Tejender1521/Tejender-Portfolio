import React from 'react';

import { About, Footer, Header, Skills, Work, Profiles } from './container';
import { Navbar } from './components';
import './App.scss';



const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Profiles />
      <Skills />
      {/* <Testimonials />  To be used later */}
       <Footer />
    </div>
  );
}

export default App;