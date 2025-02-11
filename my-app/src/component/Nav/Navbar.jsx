import React, { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    
        <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-white text-2xl font-bold">
          Intel<span className="text-teal-400">sync</span>
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 bg-black px-6 py-2 rounded-full border border-gray-500">
          <li>
            <a href="#" className="text-white hover:text-teal-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-teal-400 transition">
              Our Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-teal-400 transition">
              Product
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-teal-400 transition">
              Community
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-teal-400 transition">
              Blog
            </a>
          </li>
        </ul>

        {/* Contact Button */}
        <a
          href="#"
          className="hidden md:block px-6 py-2 border-2 border-teal-400 rounded-full text-white hover:bg-teal-400 hover:text-black transition shadow-lg"
        >
          Contact
        </a>
      </div>
    </nav>
      
   
  )
}

export default Navbar
