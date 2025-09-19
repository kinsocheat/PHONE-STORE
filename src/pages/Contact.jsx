// src/pages/Contact.jsx
import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+855 89 99 69 20"],
      description: "Call us anytime"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["socheatkin21@gmail.com"],
      description: "Send us an email"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Street, Phnom Penh", "Cambodia"],
      description: "Visit our office"
    }
  ];

  return (
    <div className="p-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 mb-12 rounded-lg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl">
            Get in touch with us for any questions about our phone rental services
          </p>
        </div>
      </div>

      <div className="mx-auto">
        {/* Contact Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[50px] mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <info.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
              <div className="text-gray-600 mb-2">
                {info.details.map((detail, idx) => (
                  <div key={idx}>{detail}</div>
                ))}
              </div>
              <p className="text-sm text-gray-500">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="rental-inquiry">Rental Inquiry</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Map/Additional Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Visit Our Office</h3>
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.932199661561!2d104.88192297584446!3d11.556718244315155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951811d26f137%3A0xde786e3d07fc70c9!2sPhone%20Shop!5e0!3m2!1skm!2skh!4v1758160464731!5m2!1skm!2skh"
                  className="absolute inset-0 w-full h-full border-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-gray-600">
                Our office is conveniently located in the heart of Phnom Penh.
                Feel free to visit us during business hours for in-person
                assistance.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Need Immediate Help?</h4>
              <p className="text-gray-600 mb-4">
                For urgent matters or immediate assistance, don't hesitate to
                call our hotline.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                +855 12 345 678
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
