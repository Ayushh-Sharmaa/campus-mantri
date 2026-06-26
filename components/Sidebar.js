import { Calendar, Bell, Trophy, BookOpen, Clock, Heart, Award, ArrowUpRight } from 'lucide-react'

export default function Sidebar({ onScrollToSection }) {
  return (
    <div className="space-y-6">
      {/* Widget 1: Upcoming Orientation */}
      <div className="relative overflow-hidden rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card p-6 shadow-sm group">
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-gfg-green/5 rounded-full filter blur-[20px]"></div>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gfg-green/10 dark:bg-emerald-950/40 text-gfg-green dark:text-emerald-400 flex items-center justify-center">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-800 dark:text-white">Oath Ceremony</h4>
            <p className="text-[10px] text-gray-400 dark:text-gray-450 uppercase font-semibold">Orientation Session</p>
          </div>
        </div>
        
        <div className="bg-gray-50/50 dark:bg-dark-border/10 p-3.5 rounded-xl border border-gray-100 dark:border-dark-border/30 text-center">
          <span className="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">DATE & TIME</span>
          <span className="text-sm font-extrabold text-gfg-green dark:text-emerald-400 uppercase tracking-wider animate-pulse">
            Coming Soon
          </span>
        </div>
        <p className="text-[11px] text-gray-450 dark:text-gray-400 leading-normal mt-3 text-center">
          Invitation links and calendar invites will be sent directly to your registered email and posted here.
        </p>
      </div>

      {/* Widget 2: Active Tasks Quick Stats */}
      <div className="relative overflow-hidden rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-sm font-extrabold text-gray-800 dark:text-white uppercase tracking-wider">
            Active Tasks Summary
          </h4>
          <span className="px-2 py-0.5 bg-red-100 text-red-750 dark:bg-red-950/40 dark:text-red-400 text-[10px] font-bold rounded-full">
            1 Opportunity
          </span>
        </div>

        <div className="space-y-3.5">
          <div className="flex items-center justify-between text-xs py-2 border-b border-gray-100 dark:border-dark-border/30">
            <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-500" />
              Potential Rewards
            </span>
            <span className="font-bold text-gray-800 dark:text-white">250 Points</span>
          </div>

          <div className="flex items-center justify-between text-xs py-2 border-b border-gray-100 dark:border-dark-border/30">
            <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-red-500" />
              Submission Deadline
            </span>
            <span className="font-bold text-red-500 dark:text-red-400">28 July 2026</span>
          </div>

          <div className="flex items-center justify-between text-xs py-2">
            <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-gfg-green" />
              Active Target
            </span>
            <span className="font-semibold text-gfg-dark dark:text-emerald-400">MongoDB Badges</span>
          </div>
        </div>

        <button
          onClick={() => onScrollToSection('tasks')}
          className="w-full mt-4 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-dark-border/30 dark:hover:bg-dark-border/50 border border-gray-200 dark:border-dark-border/60 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all"
        >
          View Active Task
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Widget 3: Latest Announcement Preview */}
      <div className="relative overflow-hidden rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="w-4 h-4 text-gfg-green" />
          <h4 className="text-sm font-extrabold text-gray-800 dark:text-white uppercase tracking-wider">
            Latest Announcement
          </h4>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-bold text-gray-800 dark:text-white">
            Welcome to Campus Mantri 2026
          </p>
          <span className="text-[10px] text-gray-400 dark:text-gray-500 font-semibold block">
            Posted: 25 June 2026
          </span>
          <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
            Dear Campus Mantris, Welcome to the GeeksforGeeks Campus Mantri Program 2026. Congratulations on becoming a Campus Mantri. We are delighted to have you as a part of our community and look forward to an exciting journey ahead. We will soon be conducting...
          </p>
        </div>

        <button
          onClick={() => onScrollToSection('announcements')}
          className="w-full mt-4 py-2 bg-gfg-green/10 text-gfg-green dark:text-emerald-400 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all hover:bg-gfg-green/20"
        >
          Expand Announcement
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
