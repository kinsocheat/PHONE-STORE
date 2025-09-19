// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <Link to="/" className="flex-shrink-0 flex items-center ml-2 md:ml-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">📱</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">PHONE</span>
            </Link>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/house" 
                className={`px-3 py-2 text-sm font-medium ${
                  isActive('/house') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
              Iphone
              </Link>
              <Link 
                to="/room" 
                className={`px-3 py-2 text-sm font-medium ${
                  isActive('/room') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
               Android
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 text-sm font-medium ${
                  isActive('/about') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 text-sm font-medium ${
                  isActive('/contact') 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
