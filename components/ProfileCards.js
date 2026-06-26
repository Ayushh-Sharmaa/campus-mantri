import { useState, useEffect } from 'react'
import { Award, Flame, Users, ExternalLink, Activity } from 'lucide-react'

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
)

export default function ProfileCards() {
  const [animatedStats, setAnimatedStats] = useState({
    score: 0,
    solved: 0,
    connections: 0,
    impressions: 0
  })

  useEffect(() => {
    const duration = 1500
    const steps = 60
    const stepTime = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      setAnimatedStats({
        score: Math.floor((1450 / steps) * currentStep),
        solved: Math.floor((450 / steps) * currentStep),
        connections: Math.floor((1200 / steps) * currentStep),
        impressions: Math.floor((15000 / steps) * currentStep)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setAnimatedStats({
          score: 1450,
          solved: 450,
          connections: 1200,
          impressions: 15000
        })
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="connect" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Premium Section Header */}
        <div className="flex items-center gap-2 mb-8 justify-center sm:justify-start">
          <Activity className="w-5 h-5 text-gfg-green animate-pulse" />
          <h2 className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-200">
            Connect With Me
          </h2>
          <span className="h-px bg-gray-200 dark:bg-dark-border flex-1 ml-4 hidden sm:block"></span>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* GeeksforGeeks Profile Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-gray-150 dark:border-dark-border/40 bg-gradient-to-br from-white/80 to-gfg-light/50 dark:from-dark-card/80 dark:to-dark-bg/50 backdrop-blur-md p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-gfg-green rounded-full filter blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
            
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gfg-green to-emerald-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-emerald-500/25">
                  GFG
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gfg-dark dark:text-white">Ayush Sharma</h3>
                  <p className="text-sm font-medium text-gfg-green dark:text-emerald-400 mt-0.5">Campus Mantri 2026</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-gfg-green/10 text-gfg-green dark:text-emerald-400 text-xs font-bold rounded-full">
                Top Contributor
              </span>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 mt-8 py-4 border-y border-gray-100 dark:border-dark-border/40">
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center gap-1.5 text-gray-500 dark:text-gray-400 mb-1">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span className="text-xs font-medium">Score</span>
                </div>
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                  {animatedStats.score.toLocaleString()}+
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center gap-1.5 text-gray-500 dark:text-gray-400 mb-1">
                  <Award className="w-4 h-4 text-gfg-green" />
                  <span className="text-xs font-medium">Solved</span>
                </div>
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                  {animatedStats.solved}+
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center gap-1.5 text-gray-500 dark:text-gray-400 mb-1">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-medium">Global %</span>
                </div>
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                  Top 1.2%
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.geeksforgeeks.org/profile/cmayush"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 py-3 text-center rounded-2xl shadow-sm text-sm"
              >
                View Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* LinkedIn Profile Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-gray-150 dark:border-dark-border/40 bg-gradient-to-br from-white/80 to-gfg-light/50 dark:from-dark-card/80 dark:to-dark-bg/50 backdrop-blur-md p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-500 rounded-full filter blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
            
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
                  <LinkedinIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gfg-dark dark:text-white">Ayush Sharma</h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-450 mt-0.5">Software Developer</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-450 text-xs font-bold rounded-full">
                Active
              </span>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 mt-8 py-4 border-y border-gray-100 dark:border-dark-border/40">
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center gap-1.5 text-gray-500 dark:text-gray-400 mb-1">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-medium">Connections</span>
                </div>
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                  {animatedStats.connections.toLocaleString()}+
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center gap-1.5 text-gray-500 dark:text-gray-400 mb-1">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span className="text-xs font-medium">Impressions</span>
                </div>
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                  {animatedStats.impressions.toLocaleString()}+
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center gap-1.5 text-gray-500 dark:text-gray-400 mb-1">
                  <Award className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-medium">Posts</span>
                </div>
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                  150+
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/ayushh-sharmaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold shadow-sm text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Connect
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
