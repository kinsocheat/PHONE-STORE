// src/pages/House.jsx
import React from "react";
import CardGrid from "../components/CardGrid";
import SearchBar from "../components/SearchBar";

const Iphone = ({ properties, favorites, onToggleFavorite }) => {
  // Filter for iPhone devices (treating as "house" category)
  const houseProperties = properties.filter(property => property.type === "iphone");

  return (
    <div className="p-4">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 mb-8 rounded-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">iPhone Collection</h1>
          <p className="text-xl">Discover the latest iPhone models with premium features</p>
        </div>
      </div>
      
      <SearchBar />
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6">Available iPhones ({houseProperties.length})</h2>
        <CardGrid 
          properties={houseProperties} 
          favorites={favorites} 
          onToggleFavorite={onToggleFavorite} 
        />
      </div>
    </div>
  );
};

export default Iphone;
