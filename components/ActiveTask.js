import { useState, useEffect } from 'react'
import { Calendar, Clock, Award, ShieldAlert, CheckCircle, ExternalLink, Bookmark, Share2 } from 'lucide-react'
import Link from 'next/link'

export default function ActiveTask({ isBookmarked, onToggleBookmark, onShare }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Target date: July 28, 2026, 23:59:59
    const targetDate = new Date('2026-07-28T23:59:59').getTime()

    const calculateTime = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id="tasks" className="relative group overflow-hidden rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Background glow gradient */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-mongodb-green/10 rounded-full filter blur-[60px] opacity-70 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-gray-100 dark:border-dark-border/40">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-full animate-pulse">
              Active Task
            </span>
            <span className="px-3 py-1 bg-mongodb-green/10 text-mongodb-dark dark:text-mongodb-green text-xs font-bold rounded-full">
              MongoDB Collaboration
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800 dark:text-white leading-tight">
            MongoDB Skill Badges Challenge
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleBookmark}
            className={`p-2.5 rounded-xl border transition-all ${
              isBookmarked
                ? 'bg-amber-500/10 border-amber-400 text-amber-500'
                : 'border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-border/40 text-gray-400 dark:text-gray-300'
            }`}
            title={isBookmarked ? 'Bookmarked' : 'Bookmark Task'}
          >
            <Bookmark className="w-5 h-5 fill-current" />
          </button>
          <button
            onClick={onShare}
            className="p-2.5 rounded-xl border border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-border/40 text-gray-400 dark:text-gray-300 transition-all"
            title="Share Task"
          >
            <Share2 className="w-5 h-5" />
          </button>
          <div className="px-5 py-2.5 bg-gradient-to-r from-gfg-green to-emerald-600 dark:from-emerald-600 dark:to-emerald-500 text-white rounded-2xl font-bold shadow-md shadow-emerald-500/10">
            250 Points
          </div>
        </div>
      </div>

      {/* Grid of Task Meta info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-b border-gray-100 dark:border-dark-border/40">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gray-50 dark:bg-dark-border/30 rounded-xl text-gray-500 dark:text-gray-400">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-gray-450 dark:text-gray-400 font-medium">Estimated Time</p>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-250">5 - 7 Hours</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-gray-50 dark:bg-dark-border/30 rounded-xl text-gray-500 dark:text-gray-400">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-gray-455 dark:text-gray-400 font-medium">Difficulty</p>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-250">Intermediate</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-gray-50 dark:bg-dark-border/30 rounded-xl text-gray-500 dark:text-gray-400">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-gray-450 dark:text-gray-400 font-medium">Deadline Date</p>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-250">28 July 2026</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-gray-50 dark:bg-dark-border/30 rounded-xl text-gray-500 dark:text-gray-400">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-gray-450 dark:text-gray-400 font-medium">Participation</p>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-250">Selected Mantris Only</p>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="my-6 bg-gradient-to-r from-gray-55 to-gray-100 dark:from-dark-border/10 dark:to-dark-border/30 p-5 rounded-2xl border border-gray-100 dark:border-dark-border/20">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-sm font-bold text-gray-650 dark:text-gray-300 uppercase tracking-wider flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-500 animate-pulse" />
            Deadline Countdown
          </span>
          <div className="flex gap-3 text-center">
            <div className="bg-white dark:bg-dark-card px-3.5 py-2 rounded-xl shadow-sm border border-gray-100 dark:border-dark-border/40 min-w-[60px]">
              <span className="block text-xl font-extrabold text-gray-800 dark:text-white leading-none">{timeLeft.days}</span>
              <span className="text-[10px] text-gray-400 dark:text-gray-450 uppercase font-semibold mt-1 block">Days</span>
            </div>
            <div className="bg-white dark:bg-dark-card px-3.5 py-2 rounded-xl shadow-sm border border-gray-100 dark:border-dark-border/40 min-w-[60px]">
              <span className="block text-xl font-extrabold text-gray-800 dark:text-white leading-none">{timeLeft.hours}</span>
              <span className="text-[10px] text-gray-400 dark:text-gray-450 uppercase font-semibold mt-1 block">Hrs</span>
            </div>
            <div className="bg-white dark:bg-dark-card px-3.5 py-2 rounded-xl shadow-sm border border-gray-100 dark:border-dark-border/40 min-w-[60px]">
              <span className="block text-xl font-extrabold text-gray-800 dark:text-white leading-none">{timeLeft.minutes}</span>
              <span className="text-[10px] text-gray-400 dark:text-gray-450 uppercase font-semibold mt-1 block">Mins</span>
            </div>
            <div className="bg-white dark:bg-dark-card px-3.5 py-2 rounded-xl shadow-sm border border-gray-100 dark:border-dark-border/40 min-w-[60px]">
              <span className="block text-xl font-extrabold text-amber-500 dark:text-emerald-400 leading-none">{timeLeft.seconds}</span>
              <span className="text-[10px] text-gray-400 dark:text-gray-450 uppercase font-semibold mt-1 block">Secs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description & Action */}
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Description</h4>
          <p className="text-gray-650 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            Another day, another great <strong>FREE</strong> collaboration for you all! 
            GeeksforGeeks has partnered with MongoDB to bring you FREE Skill Badges that will help your profile stand out from the crowd! 
            Complete each module, earn a Skill Badge, and grow your MongoDB skills.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <a
            href="https://gfgcdn.com/tu/vc5/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 py-3.5 text-center text-sm font-semibold rounded-2xl shadow-md flex items-center justify-center gap-2"
          >
            Start Learning Now
            <ExternalLink className="w-4 h-4" />
          </a>
          <Link
            href="/guide"
            className="btn-secondary flex-1 py-3.5 text-center text-sm font-semibold rounded-2xl flex items-center justify-center gap-2"
          >
            View Stepper Guide
            <Clock className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
