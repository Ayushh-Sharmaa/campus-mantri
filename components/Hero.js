import { Award, Bell, Users, ShieldAlert, ArrowDown } from 'lucide-react'

export default function Hero({ onScrollToSection }) {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-gfg-light/40 via-white to-emerald-50/20 dark:from-dark-bg dark:via-dark-bg dark:to-dark-card/25 transition-colors duration-300">
      {/* Visual background blurred glow objects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gfg-green/10 dark:bg-emerald-600/5 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-mongodb-green/10 dark:bg-mongodb-green/5 rounded-full filter blur-[100px] animate-pulse-slow delay-1000"></div>

      {/* Main Content container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Animated badge pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/30 rounded-full mb-6 hover:scale-102 transition-transform">
          <span className="w-2 h-2 rounded-full bg-gfg-green dark:bg-emerald-400 animate-ping"></span>
          <span className="text-gfg-green dark:text-emerald-450 font-bold text-xs uppercase tracking-wider">
            Official CM Portal 2026
          </span>
        </div>

        {/* Brand Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight text-gray-800 dark:text-white">
          GeeksforGeeks <br />
          <span className="gradient-text dark:bg-gradient-to-r dark:from-emerald-450 dark:to-teal-400">
            Campus Mantri 2026
          </span> <br />
          <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-300">
            Resource Hub
          </span>
        </h1>

        {/* Subtitle list descriptors */}
        <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Everything a Campus Mantri needs in one place. Review official announcements, 
          track active developer challenges, follow the MongoDB task guides, and submit proofs for rewards.
        </p>

        {/* Call to Actions (CTAs) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => onScrollToSection('tasks')}
            className="w-full sm:w-auto btn-primary py-3.5 px-8 text-sm font-semibold rounded-2xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
          >
            View Active Tasks
            <Award className="w-4 h-4" />
          </button>
          <button
            onClick={() => onScrollToSection('announcements')}
            className="w-full sm:w-auto btn-secondary py-3.5 px-8 text-sm font-semibold rounded-2xl"
          >
            Latest Announcement
            <Bell className="w-4 h-4" />
          </button>
          <button
            onClick={() => onScrollToSection('resources')}
            className="w-full sm:w-auto px-6 py-3.5 text-gray-650 hover:text-gfg-green dark:text-gray-350 dark:hover:text-white text-sm font-bold flex items-center gap-1.5 transition-colors"
          >
            Join Community
            <Users className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Highlights Info Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-16 max-w-3xl mx-auto">
          <div className="p-4 sm:p-5 rounded-2xl border border-gray-150 dark:border-dark-border/40 bg-white/70 dark:bg-dark-card/50 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-gfg-green dark:text-emerald-400">
              250 pts
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider mt-1">
              Active Value
            </p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl border border-gray-150 dark:border-dark-border/40 bg-white/70 dark:bg-dark-card/50 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-gray-800 dark:text-white">
              1 Active
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider mt-1">
              Task Checklist
            </p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl border border-gray-150 dark:border-dark-border/40 bg-white/70 dark:bg-dark-card/50 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-gray-800 dark:text-white">
              6 Steps
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider mt-1">
              Interactive Guide
            </p>
          </div>
        </div>
      </div>

      {/* Down arrow anchor */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <button
          onClick={() => onScrollToSection('connect')}
          className="p-2 rounded-full border border-gray-200 dark:border-dark-border/50 text-gray-400 dark:text-gray-500"
          title="Scroll Down"
        >
          <ArrowDown className="w-5 h-5 text-gfg-green" />
        </button>
      </div>
    </div>
  )
}
