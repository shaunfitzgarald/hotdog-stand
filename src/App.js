import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Profiles from './components/Profiles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
      <Header />
      <main className="flex-grow">
        <Map />
        <Profiles />
      </main>
      <Footer />
    </div>
  );
}

export default App;