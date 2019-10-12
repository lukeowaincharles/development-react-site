import React from 'react';
import './App.scss';
import PageLoader from './components/PageLoader';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <PageLoader />
      <Nav />
    </div>
  );
}

export default App;
