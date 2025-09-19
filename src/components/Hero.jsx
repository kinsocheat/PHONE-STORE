// src/components/Hero.jsx
import React from "react";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              🎯 FIND YOUR PHONE
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              LOOKING <span className="text-yellow-400">FOR</span>
              <br />
              <span className="text-yellow-400">DREAM PHONE</span> ?
            </h1>
            <p className="text-xl text-gray-300">With low price</p>
            <p className="text-gray-400">
              Find your perfect phone from our extensive collection of premium devices
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.amazon.com/s?k=mobile%27phone&adgrpid=165134129036&hvadid=706561884866&hvdev=c&hvlocphy=9198350&hvnetw=g&hvqmt=b&hvrand=1117901296177957134&hvtargid=kwd-2399721562277&hydadcr=7319_13219143&mcid=98132e6218513bf0957a906de9a4fafb&tag=hydglogoo-20&ref=pd_sl_144vv7g4yd_b"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
              >
                Search Now
              </a>
              <div className="text-sm">
                <div className="font-semibold">089-996-920</div>
                <div className="text-gray-400">Call us anytime</div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">Phone Reviews</span>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$450.00</span>
                  <span className="text-sm bg-green-500 px-2 py-1 rounded animate-pulse">
                    AVAILABLE
                  </span>
                </div>
                <p className="text-sm text-gray-300 mt-1">Starting at</p>
              </div>
            </div>

            {/* Phone Image */}
            <div className="absolute -top-4 -right-4 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80"
                alt="Dream phone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
