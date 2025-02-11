import React from 'react'
import { FaXTwitter, FaInstagram, FaVideo, FaTelegram, FaLinkedin } from "react-icons/fa6";

function FooterPage() {
  return (
    <div>
         <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Social Media */}
        <div>
          <h2 className="text-2xl font-bold">
            Intel<span className="text-teal-400">isync</span>
          </h2>
          <p className="mt-4 text-sm italic">Follow us on</p>
          <div className="flex space-x-4 mt-2">
            <FaXTwitter className="text-white hover:text-teal-400 cursor-pointer text-xl" />
            <FaInstagram className="text-white hover:text-teal-400 cursor-pointer text-xl" />
            <FaVideo className="text-white hover:text-teal-400 cursor-pointer text-xl" />
            <FaTelegram className="text-white hover:text-teal-400 cursor-pointer text-xl" />
            <FaLinkedin className="text-white hover:text-teal-400 cursor-pointer text-xl" />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">FAQ's</a></li>
            <li><a href="#" className="hover:text-white">Contact us</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold">Contact Info</h3>
          <p className="mt-4 text-gray-300">
            <strong>Location:</strong> Al Karama - Dubai - United Arab Emirates
          </p>
          <p className="mt-2 text-gray-300">
            <strong>Email:</strong> connect@intelisync.ai
          </p>
          <p className="mt-2 text-gray-300">
            <strong>Phone:</strong> +971 54 5720 844
          </p>
        </div>
        
      </div>
    </footer>
    </div>
  )
}

export default FooterPage