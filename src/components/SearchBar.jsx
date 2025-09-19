// src/components/SearchBar.jsx
import React, { useState } from "react";
import { MapPin, Search } from "lucide-react";

const SearchBar = () => {
  const [searchData, setSearchData] = useState({
    location: "",
    propertyType: "android",
    priceRange: "$400 - $600"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Search data:", searchData);
  };

  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="location"
                    value={searchData.location}
                    onChange={handleInputChange}
                    placeholder="Enter location"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Type
                </label>
                <select
                  name="propertyType"
                  value={searchData.propertyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="android">Android</option>
                  <option value="iphone">IPhone</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  name="priceRange"
                  value={searchData.priceRange}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="$300 - $500">$300 - $500</option>
                  <option value="$500 - $700">$500 - $700</option>
                  <option value="$700 - $900">$700 - $900</option>
                  <option value="$900+">$900+</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;