import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Chord Finder</h1>
      <p className="mb-4">Find your chords easily!</p>
      <button className="p-2 bg-blue-500 text-white rounded mb-4">
        Log In
      </button>
      <div>
        <input 
          type="text" 
          placeholder="Search for a song" 
          className="p-2 border rounded" 
        />
        <button className="ml-2 p-2 bg-green-500 text-white rounded">
          Search
        </button>
      </div>
    </div>
  );
};

export default HomePage;