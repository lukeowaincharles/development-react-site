import React from 'react';
import './App.scss';
import PageLoader from './components/PageLoader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <PageLoader />
      <main>
        <Nav />
        <Hero />
        <footer className="section-margin">
          <About />
          <Experience />
          <Contact />
        </footer>
      </main>
    </div>
  );
}

export default App;
