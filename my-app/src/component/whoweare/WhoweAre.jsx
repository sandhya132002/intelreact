import React from 'react'
import MainImage from "../photos/Container.png"; 
import GradientImage from "../photos/Gradient.png";



function WhoweAre() {
  return (
    <div>
      <section className="bg-black min-h-screen w-full flex items-center justify-center">
        <div className="w-full max-w-6xl py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between md:gap-x-16 lg:gap-x-24">
          
          {/* Left Content Section */}
          <div className="md:w-1/2 text-white"> 
            <h3 className="text-teal-400 text-lg font-semibold uppercase">About Us</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-2">Who We Are?</h2>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              Welcome to <span className="font-semibold text-white">Intelisync</span> – your trusted partner in 
              pioneering Web3 marketing and blockchain solutions. With a global presence and headquarters 
              in Dubai, we specialize in empowering businesses to thrive in the fast-evolving digital landscape. 
              Our expertise spans blockchain development, strategic marketing, and innovative design, 
              creating impactful, tailored solutions for startups and enterprises alike.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
              Go Beyond
            </button>
          </div>

          {/* Right Image Section */} 
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
            
            {/* Gradient Background (Placed Behind) */}
            <img 
              src={GradientImage} 
              alt="Gradient Overlay" 
              className="absolute bottom-[-40px] right-[-40px] w-[98%] h-[98%] z-0 rounded-3xl opacity-80"
            />

            {/* Main Image (On Top) */}
            <img 
              src={MainImage} 
              alt="Main Content" 
              className="relative w-[100%] h-auto z-10 rounded-2xl shadow-lg"
            />
            
          </div>

        </div>
      </section>
    </div>
  )
}

export default WhoweAre