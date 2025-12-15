// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .nav-animate {
          animation: slideDown 0.5s ease-out;
        }

        .logo-animate {
          animation: scaleIn 0.6s ease-out;
        }

        .link-animate {
          animation: slideInRight 0.4s ease-out backwards;
        }

        .link-animate:nth-child(1) { animation-delay: 0.1s; }
        .link-animate:nth-child(2) { animation-delay: 0.2s; }
        .link-animate:nth-child(3) { animation-delay: 0.3s; }
        .link-animate:nth-child(4) { animation-delay: 0.4s; }

        .nav-link {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #2563eb, #0d9488);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
        }

        .nav-link:hover::before {
          width: 100%;
        }

        .nav-link.active::before {
          width: 100%;
        }

        .nav-link:hover {
          transform: translateY(-2px);
        }

        .menu-button {
          transition: all 0.3s ease;
        }

        .menu-button:hover {
          transform: scale(1.1) rotate(90deg);
        }

        .menu-button:active {
          transform: scale(0.95);
        }

        .logo-icon {
          transition: all 0.3s ease;
        }

        .logo-container:hover .logo-icon {
          transform: rotate(360deg) scale(1.1);
        }
      `}</style>

      <header className={`bg-white shadow-sm sticky top-0 z-40 nav-animate transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 menu-button"
              >
                {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <Link to="/" className="flex-shrink-0 flex items-center ml-2 md:ml-0 logo-container group">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-600 rounded-lg flex items-center justify-center logo-animate shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-sm logo-icon">📱</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-600 group-hover:bg-clip-text group-hover:text-transparent">
                  PHONE
                </span>
              </Link>
            </div>
            
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link 
                  to="/house" 
                  className={`px-3 py-2 text-sm font-medium nav-link link-animate ${
                    isActive('/house') 
                      ? 'text-blue-600 active' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  iPhone
                </Link>
                <Link 
                  to="/room" 
                  className={`px-3 py-2 text-sm font-medium nav-link link-animate ${
                    isActive('/room') 
                      ? 'text-blue-600 active' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Android
                </Link>
                <Link 
                  to="/about" 
                  className={`px-3 py-2 text-sm font-medium nav-link link-animate ${
                    isActive('/about') 
                      ? 'text-blue-600 active' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className={`px-3 py-2 text-sm font-medium nav-link link-animate ${
                    isActive('/contact') 
                      ? 'text-blue-600 active' 
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
    </>
  );
};

export default Navbar;