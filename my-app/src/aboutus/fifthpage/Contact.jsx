const Contact = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-32 px-6 sm:px-12 bg-black">
      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-white">
          Contact
        </span>
      </h2>
      <p className="text-gray-400 text-center mb-16 text-lg">
        Send us your requirements and our team will get back to you shortly.
      </p>

      {/* Contact Form + Info Cards Container */}
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl items-stretch">
        
        {/* Contact Form Section - Bigger with Gradient Border */}
        <div className="w-full md:w-2/3 bg-gradient-to-br from-blue-300 via-blue-200 to-blue-100 p-[3px] rounded-xl flex flex-col">
          <div className="bg-black p-10 rounded-lg flex-grow">
            <form className="flex flex-col space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 rounded-md bg-black text-white border border-gray-700 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-md bg-black text-white border border-gray-700 focus:outline-none"
              />
              <div className="flex gap-6">
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-1/2 p-4 rounded-md bg-black text-white border border-gray-700 focus:outline-none"
                />
                <select className="w-1/2 p-4 rounded-md bg-black text-white border border-gray-700 focus:outline-none">
                  <option>Select Budget</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>
              <textarea
                placeholder="Message"
                className="w-full p-4 rounded-md bg-black text-white border border-gray-700 focus:outline-none h-32"
              ></textarea>
              <button className="bg-gray-800 text-white py-4 rounded-md hover:bg-gray-700 transition">
                Contact
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info Cards Section - Adjusted Border Height */}
        <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-300 via-blue-200 to-blue-100 p-[3px] rounded-xl h-fit">
          <div className="bg-black p-6 rounded-lg flex flex-col gap-4">
            <div className="border border-gray-700 p-5 rounded-lg flex items-center justify-between text-white">
              <span>WhatsApp Us</span>
              <span className="text-gray-300">+91 413720844</span>
            </div>
            <div className="border border-gray-700 p-5 rounded-lg flex items-center justify-between text-white">
              <span>Telegram Us</span>
              <span className="text-gray-300">@BlockchainINTELISYNC</span>
            </div>
            <div className="border border-gray-700 p-5 rounded-lg flex items-center justify-between text-white">
              <span>Book Meeting Now</span>
              <span className="text-gray-300">Blockchain-Technologies</span>
            </div>
            <div className="border border-gray-700 p-5 rounded-lg flex items-center justify-between text-white">
              <span>Drop an Email</span>
              <span className="text-gray-300">hello@intelisync.ai</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
