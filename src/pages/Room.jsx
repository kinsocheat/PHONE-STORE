// src/pages/Room.jsx
import React from "react";
import CardGrid from "../components/CardGrid";
import SearchBar from "../components/SearchBar";

const Room = ({ properties, favorites, onToggleFavorite }) => {
  // Filter for Android devices (treating as "room" category)
  const roomProperties = properties.filter(property => property.type === "android");

  return (
    <div className="p-4">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12 mb-8 rounded-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Android Collection</h1>
          <p className="text-xl">Explore our range of Android smartphones with cutting-edge technology</p>
        </div>
      </div>
      
      <SearchBar />
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6">Available Android Phones ({roomProperties.length})</h2>
        <CardGrid 
          properties={roomProperties} 
          favorites={favorites} 
          onToggleFavorite={onToggleFavorite} 
        />
      </div>
    </div>
  );
};

export default Room;