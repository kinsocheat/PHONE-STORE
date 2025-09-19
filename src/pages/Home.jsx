import React from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CardGrid from "../components/CardGrid";

const Home = ({ properties, favorites, onToggleFavorite }) => {
  return (
    <div className="p-4">
      <Hero />
      <SearchBar />
      <CardGrid 
        properties={properties} 
        favorites={favorites} 
        onToggleFavorite={onToggleFavorite} 
      />
    </div>
  );
};

export default Home;