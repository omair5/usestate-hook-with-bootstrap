import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header'
import Footer from './components/footer'
import Section from './components/section'

function App() {
  return (
    <div className="App">

      {/* HEADER */}
      <Header />

      {/* SECTION */}
      <Section />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;
