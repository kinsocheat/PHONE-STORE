// src/components/Card.jsx
import React from "react";
import { Heart } from "lucide-react";

const Card = ({ image, title, description, price, isFavorite, onToggleFavorite }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-contain"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
          }}
        />
        <button
          onClick={onToggleFavorite}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <Heart 
            className={`w-5 h-5 ${
              isFavorite 
                ? "text-red-500 fill-current" 
                : "text-gray-400"
            }`} 
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-blue-600">${price}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;