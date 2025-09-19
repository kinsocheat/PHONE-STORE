// src/pages/About.jsx
import React from "react";
import { Shield, Award, Users, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Service",
      description: "We provide secure and reliable phone rental services with quality assurance."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "All our phones are thoroughly tested and maintained to ensure optimal performance."
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "24/7 customer support to help you with any questions or concerns."
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick and efficient delivery service to get your phone when you need it."
    }
  ];

  return (
    <div className="p-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-16 mb-12 rounded-lg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About PHONE</h1>
          <p className="text-xl leading-relaxed">
            Your trusted partner in finding the perfect smartphone rental solutions. 
            We specialize in providing high-quality phones for both short-term and long-term needs.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80" 
                alt="Our office" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2020, Phone started with a simple mission: to make premium smartphones 
                accessible to everyone. We realized that not everyone needs to own the latest phone, 
                but everyone deserves access to quality technology.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we're proud to serve thousands of customers across Cambodia, offering both 
                iPhone and Android devices with flexible rental terms and competitive pricing.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-blue-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Phones Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;