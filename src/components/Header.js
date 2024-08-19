import React from 'react';

const Header = () => {
  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    // Handle user location
  };

  const showError = (error) => {
    // Handle location error
  };

  return (
    <header className="text-center py-10">
      <svg className="mx-auto w-24 h-24" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="#ff6b6b" />
        <path d="M30 70 Q50 20 70 70" stroke="white" strokeWidth="8" fill="none" />
        <circle cx="50" cy="30" r="5" fill="white" />
      </svg>
      <h1 className="text-4xl font-bold mt-4">The Hot Dog Stand</h1>
      <p className="text-xl mt-2">Connect with local gay singles in your area!</p>
      <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300" onClick={requestLocation}>
        Find Hot Dogs Near Me
      </button>
    </header>
  );
};

export default Header;