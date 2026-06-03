import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gfg-green to-emerald-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">CM</span>
            </div>
            <span className="font-display font-bold text-lg hidden sm:block text-gfg-dark">Campus Mantri</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#steps" className="text-gray-600 hover:text-gfg-green transition-colors font-medium">
              Getting Started
            </a>
            <a href="#tasks" className="text-gray-600 hover:text-gfg-green transition-colors font-medium">
              Tasks
            </a>
            <a href="https://www.geeksforgeeks.org/profile/cmayush" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gfg-green transition-colors font-medium">
              About
            </a>
            <a href="https://campus-portal.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Dashboard
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          >
            <div className={`w-full h-0.5 bg-gfg-dark transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-full h-0.5 bg-gfg-dark transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-full h-0.5 bg-gfg-dark transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-gray-100">
            <a href="#steps" className="block text-gray-600 hover:text-gfg-green font-medium py-2">
              Getting Started
            </a>
            <a href="#tasks" className="block text-gray-600 hover:text-gfg-green font-medium py-2">
              Tasks
            </a>
            <a href="https://www.geeksforgeeks.org/profile/cmayush" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-gfg-green font-medium py-2">
              About
            </a>
            <a href="https://campus-portal.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" className="block btn-primary text-center">
              Dashboard
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
