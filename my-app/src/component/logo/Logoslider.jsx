import React from 'react'





const logos = [
    { src: "/src/component/photos/Joystix.png", alt: "Joystix" },
    { src: "/src/component/photos/Laughter Economy.png", alt: "Laughter Economy" },
    { src: "/src/component/photos/Laxce.png", alt: "Laxce" },
    { src: "/src/component/photos/Group 1597883301.jpg", alt: "Group 1597883301"},
    { src: "/src/component/photos/MetaCasino (1).png", alt: "MetaCasino.png"},
    { src: "/src/component/photos/Simpredict.png", alt: "Simpredict.png"},

];

function Logoslider() {
  return (
    <div className="bg-black py-12">
            {/* Text moved outside the container */}
            <p className="text-lg font-semibold text-white text-left pt-4 pl-29 mb-4">
                Trusted by top innovative teams:
            </p>

            {/* Logo Container */}
            <div className="bg-black rounded-xl py-8 px-12 w-full max-w-6xl mx-auto overflow-hidden">
                <div className="relative flex items-center justify-between">
                    {/* Animated Logos */}
                    <div className="flex space-x-16 animate-scroll">
                        {logos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                className="h-16 object-contain hover:grayscale-0 transition duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Keyframe Animation */}
            <style>
                {`
                    @keyframes scroll {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-100%); }
                    }
                    .animate-scroll {
                        display: flex;
                        animation: scroll 10s linear infinite;
                    }
                `}
            </style>
        </div>
  )
}

export default Logoslider
