import { useState, useEffect } from 'react'
import { Trophy, Clock, CheckCircle2, AlertCircle, HelpCircle, ArrowUpRight, Flame, BarChart3 } from 'lucide-react'

export default function Leaderboard({ status, onStatusChange }) {
  // Scoreboard calculation
  const getPointsInfo = () => {
    switch (status) {
      case 'SUBMITTED':
        return { potential: 0, pending: 250, earned: 0 }
      case 'COMPLETED':
        return { potential: 0, pending: 0, earned: 250 }
      case 'NOT_STARTED':
      default:
        return { potential: 250, pending: 0, earned: 0 }
    }
  }

  const { potential, pending, earned } = getPointsInfo()

  // Dynamic Leaderboard list
  const mockLeaderboard = [
    { name: 'Priya Sharma (IIT Delhi)', earned: 250, status: 'COMPLETED', avatar: '👩‍💻', isUser: false },
    { name: 'You (Campus Mantri)', earned: earned, status: status, avatar: '👤', isUser: true },
    { name: 'Amit Patel (BITS Pilani)', earned: earned === 250 ? 250 : 150, status: earned === 250 ? 'COMPLETED' : 'SUBMITTED', avatar: '👨‍💻', isUser: false },
    { name: 'Rohit Kumar (DTU)', earned: 50, status: 'COMPLETED', avatar: '👦', isUser: false },
    { name: 'Sneha Reddy (VIT)', earned: 0, status: 'NOT_STARTED', avatar: '👩', isUser: false },
  ]

  // Sort by points descending
  const sortedLeaderboard = [...mockLeaderboard].sort((a, b) => b.earned - a.earned)

  // Find user's rank
  const userRank = sortedLeaderboard.findIndex(member => member.isUser) + 1

  return (
    <div id="leaderboard" className="space-y-6">
      {/* 1. Point Tracker Ledger Card */}
      <div className="rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card p-6 sm:p-8 shadow-sm">
        <span className="px-3 py-1 bg-gfg-green/10 text-gfg-green dark:text-emerald-400 text-xs font-bold rounded-full">
          Progress Ledger
        </span>
        <h3 className="text-2xl font-extrabold text-gray-800 dark:text-white mt-2 mb-6">
          Personal Points Tracker
        </h3>

        {/* Dynamic points indicators */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
          {/* Potential */}
          <div className="p-4 rounded-2xl bg-gray-50/50 dark:bg-dark-border/10 border border-gray-100 dark:border-dark-border/20 text-center relative overflow-hidden group">
            <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider block mb-1">
              Potential
            </span>
            <div className={`text-xl sm:text-2xl font-extrabold transition-colors ${potential > 0 ? 'text-gray-800 dark:text-white' : 'text-gray-300 dark:text-gray-600'}`}>
              {potential} pts
            </div>
            <span className="text-[9px] text-gray-400 dark:text-gray-500 font-medium block mt-1">Not Started</span>
          </div>

          {/* Pending */}
          <div className="p-4 rounded-2xl bg-amber-500/5 dark:bg-amber-950/5 border border-amber-500/10 text-center relative overflow-hidden group">
            <span className="text-[10px] text-amber-600 dark:text-amber-500 font-bold uppercase tracking-wider block mb-1">
              Pending
            </span>
            <div className={`text-xl sm:text-2xl font-extrabold transition-colors ${pending > 0 ? 'text-amber-500 animate-pulse' : 'text-gray-300 dark:text-gray-600'}`}>
              {pending} pts
            </div>
            <span className="text-[9px] text-amber-500/70 dark:text-amber-400/70 font-medium block mt-1">Submitted</span>
          </div>

          {/* Completed */}
          <div className="p-4 rounded-2xl bg-gfg-green/5 dark:bg-emerald-950/10 border border-gfg-green/10 text-center relative overflow-hidden group">
            <span className="text-[10px] text-gfg-green dark:text-emerald-400 font-bold uppercase tracking-wider block mb-1">
              Earned
            </span>
            <div className={`text-xl sm:text-2xl font-extrabold transition-colors ${earned > 0 ? 'text-gfg-green dark:text-emerald-400' : 'text-gray-300 dark:text-gray-600'}`}>
              {earned} pts
            </div>
            <span className="text-[9px] text-gfg-green/70 dark:text-emerald-400/70 font-medium block mt-1">Completed</span>
          </div>
        </div>

        {/* Interactive Action Buttons */}
        <div>
          <span className="text-[10px] text-gray-400 dark:text-gray-550 font-bold uppercase tracking-wider block mb-3">
            Manually Update Task Status
          </span>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onStatusChange('NOT_STARTED')}
              className={`flex-1 py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm border transition-all ${
                status === 'NOT_STARTED'
                  ? 'bg-gray-150 border-gray-300 text-gray-800 dark:bg-dark-border dark:border-dark-border/80 dark:text-white'
                  : 'bg-white border-gray-200 text-gray-500 dark:bg-dark-card dark:border-dark-border/40 hover:bg-gray-50 dark:hover:bg-dark-border/20'
              }`}
            >
              Not Started
            </button>
            <button
              onClick={() => onStatusChange('SUBMITTED')}
              className={`flex-1 py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm border transition-all ${
                status === 'SUBMITTED'
                  ? 'bg-amber-500/10 border-amber-400 text-amber-500'
                  : 'bg-white border-gray-200 text-gray-500 dark:bg-dark-card dark:border-dark-border/40 hover:bg-gray-50 dark:hover:bg-dark-border/20'
              }`}
            >
              Submitted
            </button>
            <button
              onClick={() => onStatusChange('COMPLETED')}
              className={`flex-1 py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm border transition-all ${
                status === 'COMPLETED'
                  ? 'bg-gfg-green/10 border-gfg-green text-gfg-green dark:bg-emerald-950/20 dark:border-emerald-500 dark:text-emerald-400'
                  : 'bg-white border-gray-200 text-gray-500 dark:bg-dark-card dark:border-dark-border/40 hover:bg-gray-50 dark:hover:bg-dark-border/20'
              }`}
            >
              Completed
            </button>
          </div>
        </div>
      </div>

      {/* 2. Campus Leaderboard Widget */}
      <div className="rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card p-6 sm:p-8 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="px-3 py-1 bg-gfg-green/10 text-gfg-green dark:text-emerald-400 text-xs font-bold rounded-full">
              Region Rankings
            </span>
            <h3 className="text-xl font-extrabold text-gray-800 dark:text-white mt-2">
              Campus Leaderboard
            </h3>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase block">YOUR RANK</span>
            <span className="text-base font-extrabold text-gfg-green dark:text-emerald-400">#{userRank} of 5</span>
          </div>
        </div>

        {/* Leaderboard Table List */}
        <div className="space-y-3.5">
          {sortedLeaderboard.map((member, index) => (
            <div
              key={index}
              className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                member.isUser
                  ? 'bg-gfg-green/5 border-gfg-green/30 dark:bg-emerald-950/20 dark:border-emerald-500/20 shadow-sm'
                  : 'bg-gray-50/20 dark:bg-dark-border/5 border-gray-100 dark:border-dark-border/20'
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Rank placement badge */}
                <div className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center ${
                  index === 0 ? 'bg-yellow-400 text-white' :
                  index === 1 ? 'bg-gray-300 text-gray-700' :
                  index === 2 ? 'bg-amber-600 text-white' :
                  'bg-gray-100 dark:bg-dark-border text-gray-500'
                }`}>
                  {index + 1}
                </div>
                
                <span className="text-lg">{member.avatar}</span>
                
                <div>
                  <span className={`text-xs font-bold ${member.isUser ? 'text-gray-850 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                    {member.name}
                  </span>
                  <span className="text-[9px] text-gray-400 dark:text-gray-500 block">
                    Status: {member.status.replace('_', ' ')}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className={`text-sm font-extrabold ${member.isUser ? 'text-gfg-green dark:text-emerald-450' : 'text-gray-700 dark:text-gray-300'}`}>
                  {member.earned} pts
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
