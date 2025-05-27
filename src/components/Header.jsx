import React from 'react'
import logo from '../assets/logoRender.png'

export function Header() {
  return (
    <header className="bg-[#f4ebd0] shadow-sm border-b border-[#d6ad60] sm:px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <span>
                <img className='h-full w-full max-w-[70px]' src={logo} alt="" />
              </span>
              <h1 className="text-2xl font-bold text-gray-900">YARD DOG WORKWEAR</h1>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-900 hover:text-[#b68d40] px-3 py-2 text-sm font-medium"
            >
              Shop All
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-[#b68d40] px-3 py-2 text-sm font-medium"
            >
              Safety Gear
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-[#b68d40] px-3 py-2 text-sm font-medium"
            >
              Uniforms
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-[#b68d40] px-3 py-2 text-sm font-medium"
            >
              Footwear
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-[#b68d40] px-3 py-2 text-sm font-medium"
            >
              About
            </a>
          </nav>
        
        </div>
      </div>
    </header>
  )
}

export default Header;