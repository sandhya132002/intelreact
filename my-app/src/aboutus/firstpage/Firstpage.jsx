import { useEffect, useState } from "react";

const Firstpage = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random positions for stars
    const generateStars = () => {
      return [...Array(100)].map(() => ({
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: 2 + Math.random() * 3, // Faster movement (2-5s)
      }));
    };

    setStars(generateStars());
  }, []);

  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-black via-gray-900 to-teal-900 flex items-center justify-center overflow-hidden">
      {/* Star Animation (Faster Floating Effect) */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute w-[2px] h-[2px] bg-white opacity-50 rounded-full"
              style={{
                top: `${star.y}px`,
                left: `${star.x}px`,
                animation: `floatStars ${star.duration}s infinite alternate ease-in-out`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center relative z-10 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 leading-tight">
          From <span className="text-gray-200">humble</span> beginnings
          <br /> to <span className="text-gray-300">changing</span> the world
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-4 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
          At Intelisync, we deliver cutting-edge Blockchain, Web3, and AI
          solutions that drive innovation and shape a decentralized future.
        </p>
      </div>

      {/* Tailwind Keyframes */}
      <style>
        {`
          @keyframes floatStars {
            0% { transform: translateY(0px); opacity: 0.6; }
            50% { transform: translateY(-12px); opacity: 0.9; }
            100% { transform: translateY(12px); opacity: 0.6; }
          }
        `}
      </style>
    </div>
  );
};

export default Firstpage;
