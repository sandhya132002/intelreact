//import React from 'react'
import { FaRegLightbulb, FaCubes, FaHeadphones, FaChartLine, FaLayerGroup ,  } from "react-icons/fa6";
import { RiMicAiFill } from "react-icons/ri";




const services = [
    {
      icon: <FaRegLightbulb className="text-teal-400 text-4xl" />,
      title: "Artificial Intelligence (AI)",
      description: "Develops secure blockchain-based decentralized apps (DApps) and smart contracts.",
    },
    {
      icon: <FaCubes className="text-teal-400 text-4xl" />,
      title: "Blockchain Development",
      description: "Builds wallets, trading platforms, and smart contracts for blockchain ecosystems.",
    },
    {
      icon: <FaHeadphones className="text-teal-400 text-4xl" />,
      title: "Public Relation",
      description: "Enhances brand credibility with strategic PR and reputation management.",
    },
    {
      icon: <FaChartLine className="text-teal-400 text-4xl" />,
      title: "Strategy Advisory",
      description: "Drives user acquisition and retention using data-driven marketing strategies.",
    },
    {
      icon: <RiMicAiFill className="text-teal-400 text-4xl" />,
      title: "Digital Marketing",
      description: "Promotes products through targeted digital channels.",
    },
    {
      icon: <FaLayerGroup className="text-teal-400 text-4xl" />,
      title: "Branding",
      description: "Crafts impactful brand identity to strengthen recognition and loyalty.",
    },
  ];
  

function ServiceSec1() {
  return (
    <div>
        <section className="relative w-full h-screen bg-gradient-to-br from-black to-teal-900 overflow-hidden flex flex-col items-center ">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-400 text-center mt-5">
        Our <span className="text-gray-400">Services</span>
      </h2>
      <p className="text-gray-400 text-lg text-center mt-2 max-w-2xl">
        Empowering your business with innovative Blockchain, Web3, and AI solutions for a digital future.
      </p>

      {/* Services Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-6">
        {services.map((service, index) => (
          <div key={index} className="relative bg-transparent rounded-xl border-1 p-6 text-white shadow-lg transition-transform duration-300 hover:scale-105">
            {/* Glowing Effect */}
            <div className="absolute -z-10 inset-0 bg-teal-500 rounded-xl opacity-20 blur-lg "></div>
            
            {/* Icon */}
            <div className="mb-4">{service.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-400 mt-2 text-sm">{service.description}</p>

            {/* Explore More Link */}
            <div className="mt-4 flex items-center space-x-1 text-teal-400 font-medium cursor-pointer">
              <span>Explore More</span>
              <span>➜</span>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default ServiceSec1
