import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Profiles from './components/Profiles';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Map />
      <Profiles />
      <Footer />
    </div>
  );
}

export default App;