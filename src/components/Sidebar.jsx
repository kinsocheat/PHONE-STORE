// src/components/Sidebar.jsx
import React, { useState } from "react";
import { Filter, X, Building, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [priceRange, setPriceRange] = useState([100, 1000]);
  const navigate = useNavigate();
  const location = useLocation();

  // Routes + filter options
  const filterOptions = [
    { id: "all", label: "All Properties", icon: Building, path: "/" },
    { id: "iphone", label: "IPHONE", icon: Phone, path: "/house" },
    { id: "android", label: "ANDROID", icon: Building, path: "/room" },
  ];

  // Get active filter based on current route
  const activeFilter =
    filterOptions.find((option) => option.path === location.pathname)?.id ||
    "all";

  // Handle navigation when clicking filter
  const handleFilterChange = (filterId, path) => {
    navigate(path);
  };

  // Reset all filters
  const resetFilters = () => {
    navigate("/"); // go back to all
    setPriceRange([100, 1000]);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed left-0 top-16 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 w-80 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:top-0 md:h-auto md:shadow-none md:bg-gray-50`}
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </h2>
            <button
              onClick={toggleSidebar}
              className="md:hidden p-1 rounded-md text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Property Type */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Property Type
            </h3>
            <div className="space-y-2">
              {filterOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleFilterChange(option.id, option.path)}
                    className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
                      activeFilter === option.id
                        ? "bg-blue-100 text-blue-700 border border-blue-300"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Price Range
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="100"
                max="1000"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* Reset */}
          <button
            onClick={resetFilters}
            className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
