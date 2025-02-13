const Leadership = () => {
    return (
      <div className="relative flex flex-col items-center justify-center py-20 px-6 sm:px-12 bg-black">
        {/* Glowing Background */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[90%] h-[70%] bg-teal-400 blur-3xl opacity-30 rounded-full"></div>
        </div>
  
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-white">
            Leadership
          </span>
        </h2>
  
        {/* Leadership Cards (Side by Side on larger screens, stacked on mobile) */}
        <div className="relative flex flex-col md:flex-row gap-8 w-full max-w-6xl">
          
          {/* CEO Card */}
          <div className="bg-[#0D0D0D] rounded-2xl shadow-lg border border-gray-800 p-6 w-full md:w-1/2 flex flex-col md:flex-row items-center backdrop-blur-lg">
            {/* Left - Text Content */}
            <div className="w-full md:w-2/3 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-teal-400 text-lg font-semibold">CEO</h3>
              <h2 className="text-white text-2xl font-bold mb-4">Javed Khan</h2>
              <p className="text-gray-400 text-sm">
                A visionary tech leader with 20+ years in AI, Blockchain, Cybersecurity,
                Digital Transformation, Web 3.0, and Cloud.
              </p>
            </div>
  
            {/* Right - Image */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <img
                src="../src/aboutus/photos/ceo.png"
                width={150}
                height={150}
                alt="Javed Khan"
                className="rounded-lg max-w-[150px] md:max-w-[180px]"
              />
            </div>
          </div>
  
          {/* Director Card */}
          <div className="bg-[#0D0D0D] rounded-2xl shadow-lg border border-gray-800 p-6 w-full md:w-1/2 flex flex-col md:flex-row items-center backdrop-blur-lg">
            {/* Left - Text Content */}
            <div className="w-full md:w-2/3 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-teal-400 text-lg font-semibold">Director</h3>
              <h2 className="text-white text-2xl font-bold mb-4">Praveen Gore</h2>
              <p className="text-gray-400 text-sm">
                A visionary tech leader with 20+ years in AI, Blockchain, Cybersecurity,
                Digital Transformation, Web 3.0, and Cloud.
              </p>
            </div>
  
            {/* Right - Image */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <img
                src="../src/aboutus/photos/director.png"
                width={150}
                height={150}
                alt="Praveen Gore"
                className="rounded-lg max-w-[150px] md:max-w-[180px]"
              />
            </div>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default Leadership;
  