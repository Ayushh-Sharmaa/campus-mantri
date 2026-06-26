import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sun, Moon, Search, Share2, Copy, Check, Menu, X, Terminal } from 'lucide-react'

export default function Navbar({ isDarkMode, onToggleDarkMode, onOpenSearch }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100
        setScrollProgress(progress)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'GFG Campus Mantri 2026 Resource Hub',
          text: 'Check out the official GFG Campus Mantri 2026 dashboard and MongoDB onboarding guide!',
          url: window.location.href,
        })
      } catch (err) {
        copyToClipboard()
      }
    } else {
      copyToClipboard()
    }
  }

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-dark-bg/85 backdrop-blur-md border-b border-gray-100 dark:border-dark-border/40 transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-gfg-green to-emerald-500 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gfg-green to-emerald-600 flex items-center justify-center shadow-md shadow-emerald-500/10 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-sm sm:text-base leading-none text-gray-800 dark:text-white">
                Campus Hub
              </span>
              <span className="text-[10px] font-bold text-gfg-green dark:text-emerald-400 mt-0.5 tracking-wider uppercase">
                GeeksforGeeks
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#announcements" className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-gfg-green dark:hover:text-emerald-400 transition-colors">
              Announcements
            </a>
            <a href="#tasks" className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-gfg-green dark:hover:text-emerald-400 transition-colors">
              Active Task
            </a>
            <a href="#stepper" className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-gfg-green dark:hover:text-emerald-400 transition-colors">
              Roadmap Guide
            </a>
            <a href="#proof" className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-gfg-green dark:hover:text-emerald-400 transition-colors">
              Proof Submission
            </a>
            <a href="#resources" className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-gfg-green dark:hover:text-emerald-400 transition-colors">
              Resources
            </a>
          </div>

          {/* Right Action Icons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 bg-gray-50 hover:bg-gray-100 dark:bg-dark-border/20 dark:hover:bg-dark-border/40 text-gray-505 dark:text-gray-300 border border-gray-100 dark:border-dark-border/30 rounded-xl transition-all"
              title="Search Hub (Cmd+K)"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 bg-gray-50 hover:bg-gray-100 dark:bg-dark-border/20 dark:hover:bg-dark-border/40 text-gray-505 dark:text-gray-300 border border-gray-100 dark:border-dark-border/30 rounded-xl transition-all"
              title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Share Page */}
            <button
              onClick={handleShare}
              className="p-2 bg-gray-50 hover:bg-gray-100 dark:bg-dark-border/20 dark:hover:bg-dark-border/40 text-gray-550 dark:text-gray-300 border border-gray-100 dark:border-dark-border/30 rounded-xl transition-all"
              title={copied ? 'Link Copied!' : 'Share Resource Hub'}
            >
              {copied ? <Check className="w-4 h-4 text-gfg-green" /> : <Share2 className="w-4 h-4" />}
            </button>

            <a
              href="https://campus-portal.geeksforgeeks.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gfg-dark dark:bg-dark-border border border-transparent dark:border-dark-border hover:bg-black dark:hover:bg-dark-border/80 text-white rounded-xl text-xs font-bold transition-all"
            >
              Portal Login
            </a>
          </div>

          {/* Mobile Actions Container */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-gray-500 dark:text-gray-300"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={onToggleDarkMode}
              className="p-2 text-gray-500 dark:text-gray-300"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-550 dark:text-gray-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-dark-border/40 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md px-4 pt-2 pb-6 space-y-3">
          <a
            href="#announcements"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-gfg-green py-2 border-b border-gray-50 dark:border-dark-border/10"
          >
            Announcements
          </a>
          <a
            href="#tasks"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-gfg-green py-2 border-b border-gray-50 dark:border-dark-border/10"
          >
            Active Task
          </a>
          <a
            href="#stepper"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-gfg-green py-2 border-b border-gray-50 dark:border-dark-border/10"
          >
            Roadmap Guide
          </a>
          <a
            href="#proof"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-gfg-green py-2 border-b border-gray-50 dark:border-dark-border/10"
          >
            Proof Submission
          </a>
          <a
            href="#resources"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-gfg-green py-2 border-b border-gray-50 dark:border-dark-border/10"
          >
            Resources
          </a>

          <div className="pt-4 flex gap-3">
            <button
              onClick={handleShare}
              className="flex-1 py-2.5 bg-gray-50 dark:bg-dark-border/30 border border-gray-200 dark:border-dark-border/50 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-200 flex items-center justify-center gap-1.5"
            >
              {copied ? <Check className="w-4 h-4 text-gfg-green" /> : <Share2 className="w-4 h-4" />}
              {copied ? 'Copied' : 'Share'}
            </button>
            <a
              href="https://campus-portal.geeksforgeeks.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 bg-gfg-green dark:bg-emerald-600 text-white rounded-xl text-xs font-bold text-center flex items-center justify-center"
            >
              Portal Login
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
