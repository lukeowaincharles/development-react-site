import React from 'react';
import './App.scss';
import PageLoader from './components/PageLoader';
import Nav from './components/Nav';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <PageLoader />
      <main>
        <Nav />
        <Hero />
      </main>
    </div>
  );
}

export default App;
