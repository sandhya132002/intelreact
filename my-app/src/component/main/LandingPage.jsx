import React from 'react'
import Cubes from '../cubes/Cubes'
import Logoslider from '../logo/Logoslider'

function LandingPage() {

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-black to-teal-900 overflow-hidden flex items-center justify-center">
      
    {/* Grid Background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.2)_0%,rgba(0,0,0,0.8)_70%)] grid grid-cols-12 grid-rows-12 gap-0 opacity-30 pointer-events-none">
      {[...Array(144)].map((_, i) => (
        <div key={i} className="border border-white/10"></div>
      ))}
    </div>

    {/* Side-by-Side Layout */}
    <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl items-center justify-between ">
      
      {/* Left: Content Section */}
      <div className="w-full md:w-1/2 text-white text-center md:text-left ">
        {/* Badge */}
        <div className="flex space-x-2 px-3 py-1 bg-black text-teal-400 text-sm border border-amber-50 rounded-full w-fit mx-auto md:mx-0 mt-2">
          <span className="bg-teal-400 text-black px-2 py-0.5 rounded-full text-xs font-semibold">NEW</span>
          <span className='text-white'>Latest Integration Just Arrived</span>
        </div>

        {/* Title */}
        <h1 className="text-gray-300  md:text-6xl font-extrabold mt-0 leading-tight ">
          Unlock <span className="text-gray-300 mt-0">Web3</span><br />
          <span className="text-gray-300 mt-0">Success</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 mt-2 text-sm leading-relaxed">
          From pioneering Web3 and blockchain solutions to harnessing the power of GenAI, Intelisync provides the enterprise-grade tools you need to lead and thrive in the dynamic crypto landscape. Partner with us to unlock unparalleled innovation and success.
        </p>

        {/* Button */}
        <button className="mt-5 px-3 py-2 border border-white text-white text-sm rounded-2xl 
                   shadow-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
          Let's Get Connect
        </button>
      </div>

      {/* Right: Floating 3D Cubes */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0">

      <Cubes /> 
      </div>
     
    </div>
     
  </div>
  )
}

export default LandingPage