import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProfileCards from '../components/ProfileCards'
import ActiveTask from '../components/ActiveTask'
import InteractiveGuide from '../components/InteractiveGuide'
import ProofSubmission from '../components/ProofSubmission'
import Timeline from '../components/Timeline'
import Sidebar from '../components/Sidebar'
import QuickResources from '../components/QuickResources'
import Footer from '../components/Footer'
import { Bell, Award, Calendar, ExternalLink, ChevronDown, ChevronUp, Search, X, ArrowUp, Copy, Check, Sparkles, Terminal } from 'lucide-react'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [announcementExpanded, setAnnouncementExpanded] = useState(false)
  const [loading, setLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [copied, setCopied] = useState(false)

  // Initialize Dark Mode and Load screen simulation
  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }

    // Check bookmarks
    const savedBookmark = localStorage.getItem('task_bookmarked')
    if (savedBookmark === 'true') {
      setIsBookmarked(true)
    }

    // Simulate loading animation
    const timer = setTimeout(() => {
      setLoading(false)
    }, 850)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)

    // Keyboard shortcut for search (Cmd+K or Ctrl+K)
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      clearTimeout(timer)
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

  const toggleBookmark = () => {
    const nextVal = !isBookmarked
    setIsBookmarked(nextVal)
    localStorage.setItem('task_bookmarked', String(nextVal))
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToDeleteSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsSearchOpen(false)
  }

  // All searchable content database
  const searchDatabase = [
    { type: 'Task', title: 'MongoDB Skill Badges Challenge', category: 'tasks', text: 'MongoDB Skill Badges Challenge 250 Points Active Due 28 July 2026 gfgcdn.com/tu/vc5/' },
    { type: 'Announcement', title: 'Welcome to Campus Mantri 2026', category: 'announcements', text: 'Welcome to Campus Mantri 2026 Orientation session Oath ceremony Team GeeksforGeeks' },
    { type: 'Guide Step 1', title: 'Sign In / Register GFG', category: 'stepper', text: 'Create or login to your GeeksforGeeks account official registration link visit website' },
    { type: 'Guide Step 2', title: 'Register for MongoDB', category: 'stepper', text: 'Register for MongoDB learning paths coupon code form student developer' },
    { type: 'Guide Step 3', title: 'Choose Learning Path', category: 'stepper', text: 'MongoDB Basics Shell CRUD Operators Data Modeling Schema Indexing Query Performance' },
    { type: 'Guide Step 4', title: 'Watch Lessons Fully', category: 'stepper', text: 'Videos must be watched fully without skipping for progress to count' },
    { type: 'Guide Step 5', title: 'Complete All Modules', category: 'stepper', text: 'Course completion overall progress badges unlock automatically finishing lessons' },
    { type: 'Guide Step 6', title: 'Earn MongoDB Skill Badge', category: 'stepper', text: 'Receive official MongoDB Academy skill badge credential certificate confetti' },
    { type: 'Resource', title: 'Official Campus Portal Dashboard', category: 'resources', text: 'Access official dashboard submit proof rankings points tallies login' },
    { type: 'Resource', title: 'MongoDB Learning Portal Registry', category: 'resources', text: 'MongoDB Learning path registration free courses student registry Academy' },
    { type: 'Resource', title: "Ayush's GFG & LinkedIn Profiles", category: 'resources', text: 'Ayush Sharma profile connections solved problems coding score connect support' },
    { type: 'FAQ', title: 'Is the program free?', category: 'resources', text: 'Collaboration between GFG and MongoDB is 100% free selected Campus Mantris' },
    { type: 'FAQ', title: 'How to claim my points?', category: 'resources', text: 'Screenshot MongoDB Dashboard course completion badge certificate merge single PDF upload GFG portal' },
  ]

  const filteredResults = searchQuery
    ? searchDatabase.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark-bg flex flex-col items-center justify-center transition-colors duration-300">
        <div className="relative flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gfg-green to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-4 animate-bounce">
            <Terminal className="w-8 h-8 text-white" />
          </div>
          <div className="h-1.5 w-32 bg-gray-100 dark:bg-dark-border rounded-full overflow-hidden">
            <div className="h-full bg-gfg-green rounded-full animate-[shrink_0.8s_ease-out_forwards]"></div>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase mt-3 tracking-widest animate-pulse">
            LOADING PORTAL...
          </span>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>GFG Campus Mantri 2026 Resource Hub</title>
        <meta name="description" content="Everything a GeeksforGeeks Campus Mantri 2026 needs in one place. Explore MongoDB Skill Badge tasks, timelines, guides, and resources." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar Context Providers */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Floating Action Button (FAB) Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 bg-gfg-green dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-500 text-white rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

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
                placeholder="Search tasks, guides, FAQs, resources..."
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
                  Type something to search...
                </div>
              ) : filteredResults.length > 0 ? (
                <div className="space-y-1">
                  {filteredResults.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToDeleteSection(item.category)}
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
                      <span className="text-xs text-gray-400 group-hover:text-gray-500">Jump ↗</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-sm text-gray-500 dark:text-gray-400">
                  No matching results found for <span className="font-bold">&quot;{searchQuery}&quot;</span>
                </div>
              )}
            </div>

            <div className="p-3 bg-gray-50 dark:bg-dark-border/20 border-t border-gray-100 dark:border-dark-border/30 flex justify-between text-[10px] text-gray-450 dark:text-gray-500 font-bold uppercase px-4">
              <span>ESC to close</span>
              <span>Use arrows to navigate</span>
            </div>
          </div>
        </div>
      )}

      {/* Hero section */}
      <Hero onScrollToSection={scrollToDeleteSection} />

      {/* Main Grid Dashboard layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Connect With Me section at the top of the grid */}
        <ProfileCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {/* Main Dashboard Left Column (occupies 2 cols on lg screens) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Announcements Card */}
            <div id="announcements" className="relative overflow-hidden rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card p-6 sm:p-8 shadow-sm">
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gfg-green/10 dark:bg-emerald-950/40 text-gfg-green dark:text-emerald-400 flex items-center justify-center">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-gfg-green/10 text-gfg-green dark:text-emerald-400 text-[10px] font-bold rounded uppercase">
                        Official
                      </span>
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase">
                        25 June 2026
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-gray-800 dark:text-white mt-1">
                      Welcome to Campus Mantri 2026
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setAnnouncementExpanded(!announcementExpanded)}
                  className="p-1.5 rounded-lg border border-gray-200 dark:border-dark-border/40 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-border/30 transition-all"
                >
                  {announcementExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* Expansion Announcement Content */}
              <div className={`mt-6 space-y-4 text-sm text-gray-650 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-dark-border/20 pt-6 transition-all ${
                announcementExpanded ? 'block animate-fade-in' : 'hidden'
              }`}>
                <p>
                  Dear Campus Mantris,
                </p>
                <p>
                  Welcome to the GeeksforGeeks Campus Mantri Program 2026. Congratulations on becoming a Campus Mantri. We are delighted to have you as a part of our community and look forward to an exciting journey ahead.
                </p>
                <p>
                  We will soon be conducting the official Campus Mantri Orientation Session, where you will get to know everything about the program, your responsibilities, upcoming initiatives, and opportunities.
                </p>
                <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-gfg-green p-4 rounded-r-xl">
                  <h4 className="font-bold text-gfg-green dark:text-emerald-400">Special Oath Ceremony</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-350 leading-relaxed mt-1">
                    As you are now officially Campus Mantris, the orientation will also include a special Oath Ceremony, marking the beginning of your journey as representatives of GeeksforGeeks on your campus.
                  </p>
                </div>
                <p>
                  The orientation date and timings will be announced soon. Keep an eye on your dashboard for further updates.
                </p>
                <p className="pt-2 font-bold text-gray-700 dark:text-white">
                  Once again, welcome aboard. We are excited to begin this journey with all of you.
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 font-semibold">
                  Team GeeksforGeeks
                </p>
              </div>

              {!announcementExpanded && (
                <p className="text-xs text-gray-450 dark:text-gray-450 leading-normal mt-4 line-clamp-2">
                  Dear Campus Mantris, Welcome to the GeeksforGeeks Campus Mantri Program 2026. Congratulations on becoming a Campus Mantri. We are delighted to have you as a part of our community and look forward to...
                </p>
              )}
            </div>

            {/* Active Task Card */}
            <ActiveTask
              isBookmarked={isBookmarked}
              onToggleBookmark={toggleBookmark}
              onShare={handleShare}
            />

            {/* Stepper Guide */}
            <InteractiveGuide />

            {/* Proof Submission checklist */}
            <ProofSubmission />

            {/* Timeline component */}
            <Timeline />

            {/* Quick resources and FAQs Accordion */}
            <QuickResources />
          </div>

          {/* Sidebar right Column (occupies 1 col on lg screens) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Sidebar onScrollToSection={scrollToDeleteSection} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}
