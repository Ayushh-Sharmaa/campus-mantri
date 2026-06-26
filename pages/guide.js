import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import InteractiveGuide from '../components/InteractiveGuide'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { BookOpen, Sparkles, Terminal, X, Search, AlertCircle, Play } from 'lucide-react'
import Link from 'next/link'

export default function GuidePage() {
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
    { type: 'Announcement', title: 'Welcome to Campus Mantri 2026', url: '/announcements', text: 'Welcome to Campus Mantri 2026 Orientation session Oath ceremony Team GeeksforGeeks' },
    { type: 'Guide Step 1', title: 'Sign In / Register GFG', url: '/guide', text: 'Create or login to your GeeksforGeeks account official registration link visit website' },
    { type: 'Resource', title: 'Official Campus Portal Dashboard', url: '/resources', text: 'Access official dashboard submit proof rankings points tallies login' },
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
        <title>Roadmap Guide - Campus Mantri Hub</title>
        <meta name="description" content="A step-by-step onboarding guide for GeeksforGeeks Campus Mantri 2026 program and MongoDB training challenge." />
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
                placeholder="Search tasks, guides..."
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
                <div className="p-6 text-center text-xs text-gray-455 dark:text-gray-500 font-bold uppercase tracking-wider">
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

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-gfg-light/30 via-white to-emerald-50/10 dark:from-dark-bg dark:via-dark-bg dark:to-dark-card/10 pt-24 pb-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Fold */}
          <div className="mb-10 text-center sm:text-left">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-650 dark:text-blue-400 text-xs font-bold rounded-full">
              Roadmap Guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mt-3">
              Onboarding Walkthrough
            </h1>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 max-w-xl">
              Follow this step-by-step interactive stepper to complete the MongoDB Badging challenge and register your credits.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stepper column */}
            <div className="lg:col-span-2 space-y-6">
              <InteractiveGuide />

              {/* Extra visual warning card */}
              <div className="p-6 rounded-3xl bg-amber-500/5 dark:bg-amber-950/10 border border-amber-500/20 text-left flex gap-4">
                <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-850 dark:text-amber-400">Avoid Skipping Lessons</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    MongoDB academy API monitors the playback velocity of each lecture page. Skipping slides or fast forwarding lessons will prevent the badge credentials from generating in your final Academy profile tab.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar column */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick tip widget */}
              <div className="relative overflow-hidden rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card p-6 shadow-sm">
                <h4 className="text-sm font-extrabold text-gray-800 dark:text-white uppercase tracking-wider mb-3">Onboarding Tips</h4>
                <ul className="space-y-3 text-xs text-gray-655 dark:text-gray-405 leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-gfg-green font-bold">1.</span>
                    <span>Use a single consistent email for both GFG and MongoDB Academy registries.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gfg-green font-bold">2.</span>
                    <span>Ensure you capture screenshots in high definition to avoid PDF validation rejections.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gfg-green font-bold">3.</span>
                    <span>Check out the active countdown timer on the <Link href="/tasks" className="text-gfg-green hover:underline">Active Tasks page</Link> to submit on time.</span>
                  </li>
                </ul>
              </div>

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
