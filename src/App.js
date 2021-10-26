import React, { useState } from 'react';
import Header from './component/Header';
import TimeAndWelcome from './component/TimeAndWelcome';
import Footer from './component/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TimeAndWelcome></TimeAndWelcome>
      <Footer></Footer>
    </div>
  );
}

export default App;
