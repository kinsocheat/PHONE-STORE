// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import House from "./pages/Iphone";
import Room from "./pages/Room";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
// import Iphone from "./pages/Iphone";

const App = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle a property as favorite
  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) newFavorites.delete(id);
    else newFavorites.add(id);
    setFavorites(newFavorites);
  };

  // Open/close sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Sample property data
  const properties = [
    {
      id: 1,
      title: "OPPO Find N5",
      desc: "8.93mm Ultra-Slim Design, 5600mAh Big Battery, PC-Level Productivity",
      price: 600,
      img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-find-n5-en/listpage/427-600-white.png",
      type: "android"
    },
    {
      id: 2,
      title: "OPPO Reno13 F 5G",
      desc: "AI Livephoto, AI Editor, AI LinkBoost 2.0",
      price: 450,
      img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno13-series/list-page/reno13-f-5g/dark-blue-v1.png",
      type: "android"
    },
    {
      id: 3,
      title: "OPPO Reno14 Pro 5G",
      desc: "6200mAh Large Battery, Ultra-Slim Body Design",
      price: 800,
      img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno14-series/list-page/reno14-pro/448-600-white.png",
      type: "android"
    },
    {
      id: 4,
      title: "OPPO Find X3 Pro",
      desc: "Enrich Life with 1 Billion+ Colours",
      price: 400,
      img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x3-series-cn/navigation/Find%20X3%20series-navigation-black-v2.png",
      type: "android"
    },
    {
      id: 10,
      title: "iPhone 5c",
      desc: "The iPhone 5c is a smartphone that was developed and marketed by Apple Inc.",
      price: 360,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/IPhone_5C_%28blue%29.svg/250px-IPhone_5C_%28blue%29.svg.png",
      type: "iphone"
    },
    {
      id: 11,
      title: "iPhone 6",
      desc: "The iPhone 6 and 6 Plus respectively include larger 4.7-inch and 5.5-inch displays",
      price: 450,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/IPhone_6_Space_Gray.svg/250px-IPhone_6_Space_Gray.svg.png",
      type: "iphone"
    },
    {
      id: 12,
      title: "iPhone SE",
      desc: "Apple iPhone SE smartphone. Announced Mar 2016.",
      price: 460,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/IPhone_SE_in_silver.png/250px-IPhone_SE_in_silver.png",
      type: "iphone"
    },
    {
      id: 13,
      title: "iPhone 7",
      desc: "Apple iPhone 7 smartphone. Announced Sep 2016.",
      price: 470,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/IPhone_7_Jet_Black.svg/250px-IPhone_7_Jet_Black.svg.png",
      type: "iphone"
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        
        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar 
            isOpen={isSidebarOpen} 
            toggleSidebar={toggleSidebar}
            properties={properties}
          />
          
          {/* Main content */}
          <main className="flex-1">
            <Routes>
              <Route 
                path="/" 
                element={
                  <Home 
                    properties={properties} 
                    favorites={favorites} 
                    onToggleFavorite={toggleFavorite} 
                  />
                } 
              />
              <Route 
                path="/house" 
                element={
                  <House 
                    properties={properties} 
                    favorites={favorites} 
                    onToggleFavorite={toggleFavorite} 
                  />
                } 
              />
              <Route 
                path="/room" 
                element={
                  <Room 
                    properties={properties} 
                    favorites={favorites} 
                    onToggleFavorite={toggleFavorite} 
                  />
                } 
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/iphone" element={<Iphone/>}/>
              <Route path="/android"  */}
            </Routes>
          </main>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
