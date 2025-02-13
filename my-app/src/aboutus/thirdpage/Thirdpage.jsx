import { FaRocket } from "react-icons/fa";

const Thirdpage = () => {
  return (
    <div className="bg-black text-white px-6 sm:px-8 md:px-12 py-16">
      
      {/* Section Heading - Our Vision and Mission */}
      <div className="w-full text-center py-16 px-6 sm:px-8 md:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300">
          Our <span className="text-white">Vision</span> and <span className="text-white">Mission</span>
        </h1>
        <p className="text-base sm:text-lg mt-4 text-gray-400">
          We are the only service that provides all 3 services as a packaged service.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Vision Section */}
        <div className="bg-black p-6 sm:p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-transparent"></div>
          
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center">
              <FaRocket className="text-blue-500 text-3xl sm:text-4xl mr-2" /> Vision
            </h2>
            <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
              {[
                "Intelisync aims to lead in Web 3.0 Growth Marketing and blockchain development, setting new standards for digital innovation.",
                "Our team stays ahead through continuous learning, anticipating trends and client needs in this evolving space.",
                "We drive revenue, brand recognition, and lead generation through advanced tech, creative strategies, and a global mindset.",
                "With Intelisync, your digital presence becomes impactful, memorable, and sustainable across global markets."
              ].map((text, index) => (
                <li key={index} className="flex items-start">
                  <FaRocket className="text-blue-500 text-lg sm:text-xl mr-2" /> {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              src="../src/aboutus/photos/visionimage.png"
              alt="Vision Illustration"
              className="w-3/4 sm:w-2/3 md:w-full max-w-md drop-shadow-lg"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-black p-6 sm:p-8 rounded-xl shadow-lg flex flex-col md:flex-row-reverse items-center relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-green-500 to-transparent"></div>

          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center">
              <FaRocket className="text-green-500 text-3xl sm:text-4xl mr-2" /> Mission
            </h2>
            <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
              {[
                "Intelisync drives business success with Web 3.0 marketing and custom blockchain solutions.",
                "We transform digital presence with strategies crafted for startups and established brands.",
                "Staying ahead of trends, we boost revenue, brand visibility, and lead generation.",
                "Intelisync delivers impactful solutions, helping businesses excel in the Web3 world."
              ].map((text, index) => (
                <li key={index} className="flex items-start">
                  <FaRocket className="text-green-500 text-lg sm:text-xl mr-2" /> {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              src="../src/aboutus/photos/missionimage.png"
              alt="Mission Illustration"
              className="w-3/4 sm:w-2/3 md:w-full max-w-md drop-shadow-lg"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Thirdpage;
