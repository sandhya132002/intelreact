import { motion } from "framer-motion";

const Secondpage = () => {
  return (
    <div className="w-full">
      {/* Section 1 - Why Choose Intelisync */}
      <div className="relative h-screen w-full bg-gradient-to-bl from-black via-gray-900 to-teal-900 flex items-center justify-center overflow-hidden">
        
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-white max-w-xl md:pr-10">
          {/* Section Title */}
          <h2 className="text-teal-400 text-lg sm:text-xl font-semibold uppercase tracking-wide mb-2">
            — Why Choose Intelisync
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-gray-300">Choose </span>
            <span className="text-white">Success </span>
            <br />
            with <span className="text-teal-400">Intelisync</span>
          </h1>

          <div className="mt-6 space-y-6 text-base sm:text-lg text-gray-300">
            
            {/* Point 1 */}
            <div className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-white rounded-full mt-2"></div>
              <div>
                <h3 className="text-white font-semibold text-lg sm:text-xl">
                  Years of Excellence in Web3
                </h3>
                <p>
                  With years of experience, Intelisync has mastered Web3 marketing, 
                  helping businesses unlock growth and build powerful brand identities.
                </p>
              </div>
            </div>
            
            {/* Point 2 */}
            <div className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-white rounded-full mt-2"></div>
              <div>
                <h3 className="text-white font-semibold text-lg sm:text-xl">
                  Global Reach
                </h3>
                <p>
                  Headquartered in Dubai with a presence across three continents, 
                  Intelisync connects you with your audience through multi-channel marketing.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-white rounded-full mt-2"></div>
              <div>
                <h3 className="text-white font-semibold text-lg sm:text-xl">
                  Skilled and Growing Team
                </h3>
                <p>
                  Our expert blockchain developers and marketing professionals are dedicated to 
                  delivering innovative, results-driven solutions tailored to your needs.
                </p>
              </div>
            </div>

            {/* Point 4 */}
            <div className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-white rounded-full mt-2"></div>
              <div>
                <h3 className="text-white font-semibold text-lg sm:text-xl">
                  Diverse Industry Expertise
                </h3>
                <p>
                  From finance to gaming, Intelisync has successfully provided Web3 marketing 
                  solutions to over <strong className="text-teal-400">600+ clients</strong> worldwide.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side - Image with Motion & Gradient */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-10 md:mt-0 relative">
          
          {/* Circular Faded Gradient with Motion */}
          <motion.div 
            className="absolute inset-0 flex justify-center items-center pointer-events-none"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-[500px] h-[500px] bg-gradient-radial from-teal-500/30 to-transparent rounded-full blur-3xl"></div>
          </motion.div>
          
          {/* Image with Floating Motion */}
          <motion.img
            src="../src/component/photos/standingman.png"
            alt="Intelisync Illustration"
            className="w-3/4 sm:w-2/3 md:w-full max-w-md mix-blend-lighten relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Secondpage;
