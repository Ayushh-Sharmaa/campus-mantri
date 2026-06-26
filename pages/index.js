import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProfileCards from '../components/ProfileCards'
import Footer from '../components/Footer'
import { Award, Bell, BookOpen, Compass, ArrowRight, ShieldCheck, Terminal, FileCheck } from 'lucide-react'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  const directoryCards = [
    {
      title: 'Active Opportunity',
      badge: '250 Points',
      subtitle: 'MongoDB Skill Badge',
      description: 'Participate in the exclusive MongoDB Academy badge challenge. Complete modules, track deadlines, and prepare validation proof screenshots.',
      link: '/tasks',
      color: 'border-emerald-200/80 hover:border-gfg-green dark:border-dark-border/40 dark:hover:border-emerald-500',
      icon: Award,
      iconColor: 'text-gfg-green dark:text-emerald-400 bg-gfg-green/10 dark:bg-emerald-950/40',
    },
    {
      title: 'MongoDB Task Guide',
      badge: '6 Steps',
      subtitle: 'Interactive Stepper',
      description: 'An interactive task guide built to help you sync your registration code, track video lectures, finish practice tests, and claim your badge.',
      link: '/guide',
      color: 'border-blue-200/80 hover:border-blue-500 dark:border-dark-border/40 dark:hover:border-blue-500',
      icon: BookOpen,
      iconColor: 'text-blue-550 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40',
    },

    {
      title: 'Announcements',
      badge: 'Orientation',
      subtitle: 'Updates & Ceremony',
      description: 'Keep track of the official welcomes, upcoming orientation sessions, calendar invitations, and the special Campus Mantri Oath Ceremony details.',
      link: '/announcements',
      color: 'border-purple-200/80 hover:border-purple-500 dark:border-dark-border/40 dark:hover:border-purple-500',
      icon: Bell,
      iconColor: 'text-purple-650 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40',
    },
    {
      title: 'Resources & FAQs',
      badge: 'Help Desk',
      subtitle: 'External Tools',
      description: 'Find contact profiles for support, join community chats, access portal login dashboards, and review our answers to frequently asked questions.',
      link: '/resources',
      color: 'border-amber-200/80 hover:border-amber-500 dark:border-dark-border/40 dark:hover:border-amber-500',
      icon: Compass,
      iconColor: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40',
    },
  ]

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
        <meta name="description" content="Welcome to the GeeksforGeeks Campus Mantri 2026 Resource Hub. Access active tasks, guides, announcements, and FAQs." />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <Hero onScrollToSection={(id) => {
        if (id === 'tasks') window.location.href = '/tasks'
        else if (id === 'announcements') window.location.href = '/announcements'
        else if (id === 'resources') window.location.href = '/resources'
      }} />

      {/* Main Hub deck */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Profile Counter Cards */}
        <ProfileCards />

        {/* Spacious Subpages Directory Grid */}
        <div className="py-12 border-t border-gray-100 dark:border-dark-border/25 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <span className="px-3 py-1 bg-gfg-green/10 text-gfg-green dark:text-emerald-400 text-xs font-bold rounded-full">
                Portal Directory
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 dark:text-white mt-2">
                Explore Your Hub
              </h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
              Use these shortcuts to access dedicated layout guides, task submission portals, and community resources.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {directoryCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <Link
                  key={idx}
                  href={card.link}
                  className={`group relative p-6 sm:p-8 rounded-3xl border bg-white dark:bg-dark-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${card.color}`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${card.iconColor}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 bg-gray-50 dark:bg-dark-border/40 text-gray-650 dark:text-gray-300 text-xs font-bold rounded-lg border border-gray-100 dark:border-dark-border/30">
                        {card.badge}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-gray-400 dark:text-gray-550 uppercase tracking-wider block mb-1">
                        {card.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-gray-850 dark:text-white group-hover:text-gfg-green dark:group-hover:text-emerald-450 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2.5 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-bold text-gfg-green dark:text-emerald-400 mt-6 group-hover:translate-x-1.5 transition-transform">
                    <span>Open Section</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Brand Banner Check */}
        <div className="bg-gradient-to-br from-gfg-green/10 via-emerald-500/5 to-transparent rounded-3xl p-6 sm:p-8 border border-gfg-green/20 dark:border-emerald-500/10 flex flex-col sm:flex-row justify-between items-center gap-6 mt-12">
          <div className="flex gap-4 items-start text-left">
            <div className="w-10 h-10 rounded-xl bg-gfg-green/10 dark:bg-emerald-950/40 text-gfg-green dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-gray-800 dark:text-white">Selected Campus Mantri Portal</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-lg leading-relaxed">
                This dashboard uses persistent local storage indicators. Your task bookmarks, onboarding progress checklists, and guide walkthrough milestones remain saved locally on your device.
              </p>
            </div>
          </div>
          <a
            href="https://campus-portal.geeksforgeeks.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gfg-dark dark:bg-dark-border hover:bg-black dark:hover:bg-dark-border/80 text-white rounded-2xl text-xs font-bold transition-all shadow-sm shrink-0 w-full sm:w-auto text-center"
          >
            Access GFG Dashboard
          </a>
        </div>
      </div>

      <Footer />
    </>
  )
}
