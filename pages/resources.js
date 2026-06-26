import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import QuickResources from '../components/QuickResources'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { Globe, Sparkles, Terminal, X, Search } from 'lucide-react'
import Link from 'next/link'

export default function ResourcesPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
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

  // Search DB
  const searchDatabase = [
    { type: 'Task', title: 'MongoDB Skill Badges Challenge', url: '/tasks', text: 'MongoDB Skill Badges Challenge 250 Points Active Due 28 July 2026 gfgcdn.com/tu/vc5/' },
    { type: 'Resource', title: 'Official Campus Portal Dashboard', url: '/resources', text: 'Access official dashboard submit proof rankings points tallies login' },
    { type: 'FAQ', title: 'Is the program free?', url: '/resources', text: 'Collaboration between GFG and MongoDB is 100% free selected Campus Mantris' },
  ]

  const filteredResults = searchQuery
    ? searchDatabase.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  return (
    <>
      <Head>
        <title>Resources & FAQs - Campus Mantri Hub</title>
        <meta name="description" content="Useful resources, community links, and frequently asked questions for GeeksforGeeks Campus Mantri program." />
      </Head>

      <Navbar
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

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
                placeholder="Search resources, FAQs..."
                className="w-full bg-transparent border-0 outline-none text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
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
                      onClick={() => setIsSearchOpen(false)}
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
                <div className="p-6 text-center text-sm text-gray-500 dark:text-gray-400">
                  No matching results found for <span className="font-bold">&quot;{searchQuery}&quot;</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="min-h-screen bg-gradient-to-br from-gfg-light/30 via-white to-emerald-50/10 dark:from-dark-bg dark:via-dark-bg dark:to-dark-card/10 pt-24 pb-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header fold */}
          <div className="mb-10 text-center sm:text-left">
            <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-full">
              Help Center
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mt-3">
              Resources & Support
            </h1>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 max-w-xl">
              Access directory repositories, connect with coordinates, and find explanations for badge challenges.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-8">
              <QuickResources />
            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Sidebar onScrollToSection={(id) => {
                  if (id === 'tasks') window.location.href = '/tasks'
                  else if (id === 'announcements') window.location.href = '/announcements'
                }} />
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
