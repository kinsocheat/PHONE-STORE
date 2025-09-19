// src/components/CardGrid.jsx
import React from "react";
import Card from "./Card";

const CardGrid = ({ properties, favorites, onToggleFavorite }) => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <Card
              key={property.id}
              image={property.img}
              title={property.title}
              description={property.desc}
              price={property.price}
              isFavorite={favorites.has(property.id)}
              onToggleFavorite={() => onToggleFavorite(property.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;