import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import ActiveTask from '../components/ActiveTask'
import Leaderboard from '../components/Leaderboard'
import Timeline from '../components/Timeline'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { Award, ChevronDown } from 'lucide-react'

export default function TasksPage() {
  const [expandedTaskId, setExpandedTaskId] = useState(1) // MongoDB task is active by default
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

  const tasksList = [
    {
      id: 1,
      title: 'MongoDB Skill Badges Challenge',
      points: '250 Pts',
      deadline: '28 July 2026',
      status: 'Active',
      description: 'Participate in the exclusive MongoDB Academy badge challenge. Complete modules, track deadlines, and prepare validation proof screenshots.',
    }
  ]

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
              Expand an active task below to view points ledger, dynamic countdown timers, region leaderboard, and roadmap steps.
            </p>
          </div>

          {/* Page Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Active Task Components Accordion */}
            <div className="lg:col-span-2 space-y-6">
              
              {tasksList.map((task) => {
                const isExpanded = expandedTaskId === task.id
                return (
                  <div
                    key={task.id}
                    className="rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card shadow-sm overflow-hidden transition-all duration-300"
                  >
                    {/* Header bar */}
                    <div
                      onClick={() => setExpandedTaskId(isExpanded ? null : task.id)}
                      className="p-6 sm:p-8 flex justify-between items-center cursor-pointer select-none hover:bg-gray-55/50 dark:hover:bg-dark-border/10 transition-colors"
                    >
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-gfg-green dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                          <Award className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded uppercase">
                              {task.status}
                            </span>
                            <span className="text-[10px] text-gray-450 dark:text-gray-550 font-bold uppercase tracking-wider">
                              {task.points} • Deadline: {task.deadline}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-extrabold text-gray-800 dark:text-white mt-1.5 leading-snug">
                            {task.title}
                          </h3>
                        </div>
                      </div>
                      <div className="p-1.5 rounded-lg border border-gray-200 dark:border-dark-border/45 text-gray-500 dark:text-gray-400">
                        {isExpanded ? <ChevronDown className="w-5 h-5 rotate-180 transition-transform" /> : <ChevronDown className="w-5 h-5 transition-transform" />}
                      </div>
                    </div>

                    {/* Expanded Task Content */}
                    {isExpanded && (
                      <div className="p-6 sm:p-8 border-t border-gray-100 dark:border-dark-border/30 bg-gray-50/20 dark:bg-dark-border/5 space-y-8 animate-fade-in">
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
                    )}
                  </div>
                )
              })}

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
