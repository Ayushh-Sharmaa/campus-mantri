import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import ActiveTask from '../components/ActiveTask'
import Leaderboard from '../components/Leaderboard'
import Timeline from '../components/Timeline'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

export default function TasksPage() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [copied, setCopied] = useState(false)
  const [taskStatus, setTaskStatus] = useState('NOT_STARTED')

  useEffect(() => {
    const savedBookmark = localStorage.getItem('task_bookmarked')
    if (savedBookmark === 'true') {
      setIsBookmarked(true)
    }

    const savedStatus = localStorage.getItem('task_status')
    if (savedStatus) {
      setTaskStatus(savedStatus)
    }
  }, [])

  const handleStatusChange = (newStatus) => {
    setTaskStatus(newStatus)
    localStorage.setItem('task_status', newStatus)
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

  return (
    <>
      <Head>
        <title>Active Tasks - Campus Mantri Hub</title>
        <meta name="description" content="Manage and submit your active GeeksforGeeks Campus Mantri tasks. View deadlines, checklists, and timelines." />
      </Head>

      <Navbar />

      {/* Main Content Area */}
      <div className="min-h-screen bg-gradient-to-br from-gfg-light/30 via-white to-emerald-50/10 dark:from-dark-bg dark:via-dark-bg dark:to-dark-card/10 pt-24 pb-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Fold */}
          <div className="mb-10 text-center sm:text-left">
            <span className="px-3 py-1 bg-gfg-green/10 text-gfg-green dark:text-emerald-400 text-xs font-bold rounded-full">
              Mission Control
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mt-3">
              Active Opportunities
            </h1>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 max-w-xl">
              Complete these tasks before their respective deadlines to claim points, GFG ambassador certificates, and developer badges.
            </p>
          </div>

          {/* Page Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Active Task Components */}
            <div className="lg:col-span-2 space-y-8">
              <ActiveTask
                isBookmarked={isBookmarked}
                onToggleBookmark={toggleBookmark}
                onShare={handleShare}
              />
              <Leaderboard
                status={taskStatus}
                onStatusChange={handleStatusChange}
              />
              <Timeline />
            </div>

            {/* Right Column - Sidebars widgets */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Sidebar onScrollToSection={(id) => {
                  if (id === 'tasks') window.scrollTo({ top: 0, behavior: 'smooth' })
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
