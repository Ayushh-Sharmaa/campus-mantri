import { Volume2, Sparkles, UserPlus, CheckSquare, Award, FileText, Calendar } from 'lucide-react'

export default function Timeline() {
  const milestones = [
    {
      title: 'Announcement',
      description: 'Welcome onboard Campus Mantri 2026 program!',
      date: '25 June 2026',
      status: 'Completed',
      icon: Volume2,
      color: 'bg-green-500 border-green-500 text-white',
    },
    {
      title: 'Task Released',
      description: 'MongoDB Skill Badges Challenge goes live (250 Points).',
      date: '25 June 2026',
      status: 'Completed',
      icon: Sparkles,
      color: 'bg-green-500 border-green-500 text-white',
    },
    {
      title: 'Registration',
      description: 'Sign up for MongoDB Learning using referral code.',
      date: 'Active',
      status: 'In Progress',
      icon: UserPlus,
      color: 'bg-blue-500 border-blue-500 text-white',
    },
    {
      title: 'Course Completion',
      description: 'Watch all videos completely and pass all chapter tests.',
      date: 'Recommended: Before 20 July',
      status: 'Upcoming',
      icon: CheckSquare,
      color: 'bg-white dark:bg-dark-card border-gray-300 dark:border-dark-border text-gray-400',
    },
    {
      title: 'Badge Earned',
      description: 'Claim your official MongoDB Academy Skill Badge.',
      date: 'Recommended: Before 22 July',
      status: 'Upcoming',
      icon: Award,
      color: 'bg-white dark:bg-dark-card border-gray-300 dark:border-dark-border text-gray-400',
    },
    {
      title: 'Proof Submission',
      description: 'Merge screenshots and upload your single PDF document.',
      date: 'Recommended: Before 25 July',
      status: 'Upcoming',
      icon: FileText,
      color: 'bg-white dark:bg-dark-card border-gray-300 dark:border-dark-border text-gray-400',
    },
    {
      title: 'Task Deadline',
      description: 'Final submission closing date. No extensions allowed.',
      date: '28 July 2026',
      status: 'Upcoming',
      icon: Calendar,
      color: 'bg-white dark:bg-dark-card border-gray-300 dark:border-dark-border text-gray-400',
    },
  ]

  return (
    <div id="timeline" className="rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card p-6 sm:p-8 shadow-sm">
      <span className="px-3 py-1 bg-gfg-green/10 text-gfg-green dark:text-emerald-400 text-xs font-bold rounded-full">
        Task Milestones
      </span>
      <h3 className="text-2xl font-extrabold text-gray-800 dark:text-white mt-2 mb-8">
        Task & Program Timeline
      </h3>

      <div className="relative border-l border-gray-200 dark:border-dark-border/50 ml-4 md:ml-6 space-y-8">
        {milestones.map((item, idx) => {
          const Icon = item.icon
          return (
            <div key={idx} className="relative pl-8 md:pl-10 group">
              {/* Timeline dot */}
              <div className={`absolute -left-[17px] top-0.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm ${item.color}`}>
                <Icon className="w-4 h-4" />
              </div>

              {/* Content Panel */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-4 rounded-2xl border border-gray-100 dark:border-dark-border/30 bg-gray-50/50 dark:bg-dark-border/5 hover:bg-gray-50 dark:hover:bg-dark-border/10 transition-colors">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-gray-800 dark:text-white">
                      {item.title}
                    </h4>
                    <span className={`px-2 py-0.5 text-[9px] font-bold rounded-full uppercase ${
                      item.status === 'Completed' ? 'bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400' :
                      item.status === 'In Progress' ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400' :
                      'bg-gray-100 text-gray-500 dark:bg-dark-border dark:text-gray-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-550 dark:text-gray-450 mt-1 leading-relaxed max-w-[480px]">
                    {item.description}
                  </p>
                </div>
                <div className="text-left md:text-right mt-1 md:mt-0">
                  <span className="text-xs font-bold text-gray-400 dark:text-gray-500">
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
