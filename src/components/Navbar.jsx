import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const LINKS = ['Home', 'Company', 'Resources', 'About', 'Contact']

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  let NavIcon = isNavOpen ? AiOutlineClose : AiOutlineMenu

  const toggleNav = () => setIsNavOpen(!isNavOpen)

  return (
    <nav className="flex justify-between items-center text-white h-24 max-w-7xl mx-auto px-4">
      <h1 className="z-50 text-3xl font-bold text-[#00df9a]">
        <a href="#">REACT.</a>
      </h1>

      <ul className="hidden md:flex gap-8">
        {LINKS.map(link => (
          <li key={link} className="cursor-pointer hover:opacity-80">
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <NavIcon onClick={toggleNav} size={20} className="cursor-pointer" />
      </div>

      <div
        className={`md:hidden fixed z-40 ${
          isNavOpen
            ? 'left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300]'
            : 'left-[100%]'
        }`}
      >
        <ul className="md:hidden uppercase p-4 mt-16">
          {LINKS.map((link, idx) => (
            <li
              key={link}
              className={`py-4 ${idx !== LINKS.length - 1 ? 'border-b border-gray-600' : ''}`}
            >
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
