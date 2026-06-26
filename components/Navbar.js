import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sun, Moon, Search, Share2, Copy, Check, Menu, X, Terminal } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [copied, setCopied] = useState(false)

  // Internal Dark Mode and Search State
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    // 1. Scroll listener
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100
        setScrollProgress(progress)
      }
    }
    window.addEventListener('scroll', handleScroll)

    // 2. Dark mode load
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }

    // 3. Search keybinding (Cmd+K / Ctrl+K)
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDarkMode(true)
    }
  }

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

  // Search Database
  const searchDatabase = [
    { type: 'Task', title: 'MongoDB Skill Badges Challenge', url: '/tasks', text: 'MongoDB Skill Badges Challenge 250 Points Active Due 28 July 2026 gfgcdn.com/tu/vc5/' },
    { type: 'Announcement', title: 'Welcome to Campus Mantri 2026', url: '/announcements', text: 'Welcome to Campus Mantri 2026 Orientation session Oath ceremony Team GeeksforGeeks' },
    { type: 'Guide Step 1', title: 'Sign In / Register GFG', url: '/guide', text: 'Create or login to your GeeksforGeeks account official registration link visit website' },
    { type: 'Guide Step 2', title: 'Register for MongoDB', url: '/guide', text: 'Register for MongoDB learning paths coupon code form student developer' },
    { type: 'Guide Step 3', title: 'Choose Learning Path', url: '/guide', text: 'MongoDB Basics Shell CRUD Operators Data Modeling Schema Indexing Query Performance' },
    { type: 'Guide Step 4', title: 'Watch Lessons Fully', url: '/guide', text: 'Videos must be watched fully without skipping for progress to count' },
    { type: 'Guide Step 5', title: 'Complete All Modules', url: '/guide', text: 'Course completion overall progress badges unlock automatically finishing lessons' },
    { type: 'Guide Step 6', title: 'Earn MongoDB Skill Badge', url: '/guide', text: 'Receive official MongoDB Academy skill badge credential certificate confetti' },
    { type: 'Resource', title: 'Official Campus Portal Dashboard', url: '/resources', text: 'Access official dashboard submit proof rankings points tallies login' },
    { type: 'Resource', title: 'MongoDB Learning Portal Registry', url: '/resources', text: 'MongoDB Learning path registration free courses student registry Academy' },
    { type: 'FAQ', title: 'Is the program free?', url: '/resources', text: 'Collaboration between GFG and MongoDB is 100% free selected Campus Mantris' },
    { type: 'FAQ', title: 'How to claim my points?', url: '/resources', text: 'Screenshot MongoDB Dashboard course completion badge certificate merge single PDF upload GFG portal' },
    { type: 'Proof', title: 'Proof Submission Guide', url: '/proof', text: 'Upload screenshots of course completion and skill badge in PDF format' }
  ]

  const filteredResults = searchQuery
    ? searchDatabase.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-dark-bg/85 backdrop-blur-md border-b border-gray-100 dark:border-dark-border/40 transition-colors duration-300">
        {/* Top GFG Follow Promo Banner */}
        <div className="bg-gradient-to-r from-gfg-green via-emerald-600 to-emerald-700 text-white text-center py-2 px-4 text-[10px] sm:text-xs font-semibold tracking-wide flex items-center justify-center gap-2">
          <span>🚀 Support my Campus Mantri journey — follow me on GeeksforGeeks!</span>
          <a
            href="https://www.geeksforgeeks.org/profile/cmayush"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline hover:text-emerald-100 transition-colors inline-flex items-center gap-0.5"
          >
            Follow @cmayush ↗
          </a>
        </div>

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
              <Link href="/announcements" className="text-sm font-bold text-gray-650 dark:text-gray-305 hover:text-gfg-green dark:hover:text-emerald-450 transition-colors">
                Announcements
              </Link>
              <Link href="/tasks" className="text-sm font-bold text-gray-655 dark:text-gray-305 hover:text-gfg-green dark:hover:text-emerald-450 transition-colors">
                Active Task
              </Link>
              <Link href="/guide" className="text-sm font-bold text-gray-650 dark:text-gray-355 hover:text-gfg-green dark:hover:text-emerald-450 transition-colors">
                Task Guide
              </Link>
              <Link href="/proof" className="text-sm font-bold text-gray-650 dark:text-gray-305 hover:text-gfg-green dark:hover:text-emerald-450 transition-colors">
                Proof Submission
              </Link>
              <Link href="/resources" className="text-sm font-bold text-gray-650 dark:text-gray-305 hover:text-gfg-green dark:hover:text-emerald-450 transition-colors">
                Resources
              </Link>
            </div>

            {/* Right Action Icons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 bg-gray-55 hover:bg-gray-100 dark:bg-dark-border/20 dark:hover:bg-dark-border/40 text-gray-500 dark:text-gray-300 border border-gray-100 dark:border-dark-border/30 rounded-xl transition-all"
                title="Search Hub (Cmd+K)"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 bg-gray-55 hover:bg-gray-100 dark:bg-dark-border/20 dark:hover:bg-dark-border/40 text-gray-500 dark:text-gray-300 border border-gray-100 dark:border-dark-border/30 rounded-xl transition-all"
                title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Share Page */}
              <button
                onClick={handleShare}
                className="p-2 bg-gray-55 hover:bg-gray-100 dark:bg-dark-border/20 dark:hover:bg-dark-border/40 text-gray-550 dark:text-gray-300 border border-gray-100 dark:border-dark-border/30 rounded-xl transition-all"
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
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-550 dark:text-gray-300"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 text-gray-550 dark:text-gray-300"
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
            <Link
              href="/announcements"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold text-gray-650 dark:text-gray-300 hover:text-gfg-green py-2 border-b border-gray-50 dark:border-dark-border/10"
            >
              Announcements
            </Link>
            <Link
              href="/tasks"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold text-gray-650 dark:text-gray-300 hover:text-gfg-green py-2 border-b border-gray-50 dark:border-dark-border/10"
            >
              Active Task
            </Link>
            <Link
              href="/guide"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold text-gray-650 dark:text-gray-300 hover:text-gfg-green py-2 border-b border-gray-50 dark:border-dark-border/10"
            >
              Task Guide
            </Link>
            <Link
              href="/proof"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold text-gray-650 dark:text-gray-300 hover:text-gfg-green py-2 border-b border-gray-50 dark:border-dark-border/10"
            >
              Proof Submission
            </Link>
            <Link
              href="/resources"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold text-gray-655 dark:text-gray-300 hover:text-gfg-green py-2 border-b border-gray-50 dark:border-dark-border/10"
            >
              Resources
            </Link>

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

      {/* Command Palette Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4">
          <div className="bg-white dark:bg-dark-card w-full max-w-lg rounded-3xl border border-gray-150 dark:border-dark-border/40 shadow-2xl overflow-hidden animate-fade-up">
            <div className="p-4 border-b border-gray-100 dark:border-dark-border/40 flex items-center gap-3">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tasks, guides, FAQs..."
                className="w-full bg-transparent border-0 outline-none text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-550"
                autoFocus
              />
              <button
                onClick={() => {
                  setIsSearchOpen(false)
                  setSearchQuery('')
                }}
                className="p-1 text-gray-400 hover:text-gray-650"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[300px] overflow-y-auto p-2">
              {searchQuery === '' ? (
                <div className="p-6 text-center text-xs text-gray-450 dark:text-gray-500 font-bold uppercase tracking-wider">
                  Type to search...
                </div>
              ) : filteredResults.length > 0 ? (
                <div className="space-y-1">
                  {filteredResults.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.url}
                      onClick={() => {
                        setIsSearchOpen(false)
                        setSearchQuery('')
                      }}
                      className="w-full text-left p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-border/20 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-gfg-green dark:text-emerald-450 uppercase block mb-1">
                          {item.type}
                        </span>
                        <span className="text-sm font-semibold text-gray-800 dark:text-white group-hover:text-gfg-green dark:group-hover:text-emerald-400 transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 group-hover:text-gray-500">Go ↗</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-sm text-gray-550 dark:text-gray-400">
                  No matching results found for <span className="font-bold">&quot;{searchQuery}&quot;</span>
                </div>
              )}
            </div>

            <div className="p-3 bg-gray-50/50 dark:bg-dark-border/10 border-t border-gray-100 dark:border-dark-border/30 flex justify-between text-[10px] text-gray-450 dark:text-gray-500 font-bold uppercase px-4">
              <span>ESC to close</span>
              <span>Command Palette</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
