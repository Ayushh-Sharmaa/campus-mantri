import { useState } from 'react'
import { LayoutDashboard, BookOpen, Globe, UserCheck, MessagesSquare, ChevronDown, HelpCircle, ExternalLink } from 'lucide-react'

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
)

export default function QuickResources() {
  const [openFaq, setOpenFaq] = useState(null)

  const resources = [
    {
      title: 'Official Dashboard',
      description: 'Access your official GeeksforGeeks Campus Mantri portal for submissions, rankings, and point tallies.',
      link: 'https://campus-portal.geeksforgeeks.org/',
      icon: LayoutDashboard,
      color: 'text-gfg-green bg-gfg-green/10 dark:text-emerald-455 dark:bg-emerald-950/30',
    },
    {
      title: 'MongoDB Learning Portal',
      description: 'Sign up, explore paths, and complete courses to earn developer badges on MongoDB Academy.',
      link: 'https://gfgcdn.com/tu/vc5/',
      icon: BookOpen,
      color: 'text-mongodb-dark bg-mongodb-green/20 dark:text-mongodb-green dark:bg-mongodb-dark/40',
    },
    {
      title: 'GeeksforGeeks main website',
      description: 'Explore tutorials, coding practice platforms, articles, course offerings, and dev challenges.',
      link: 'https://www.geeksforgeeks.org/',
      icon: Globe,
      color: 'text-blue-500 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/20',
    },
    {
      title: "Ayush's GFG Profile",
      description: 'Connect, review solved problems, coding streaks, contributions, and score details.',
      link: 'https://www.geeksforgeeks.org/profile/cmayush',
      icon: UserCheck,
      color: 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/20',
    },
    {
      title: "Ayush's LinkedIn",
      description: 'Reach out for direct assistance, guidance, software developer updates, or project networking.',
      link: 'https://www.linkedin.com/in/ayushh-sharmaa/',
      icon: LinkedinIcon,
      color: 'text-blue-600 bg-blue-50 dark:text-blue-450 dark:bg-blue-950/20',
    },
    {
      title: 'Campus Community Group',
      description: 'Join the chat groups to engage with other campus mantris, clarify doubts, and share resources.',
      link: 'https://campus-portal.geeksforgeeks.org/', // fallback
      icon: MessagesSquare,
      color: 'text-purple-650 bg-purple-50 dark:text-purple-400 dark:bg-purple-950/20',
    },
  ]

  const faqs = [
    {
      question: 'Is this MongoDB Skill Badge program free?',
      answer: 'Yes, this collaboration between GeeksforGeeks and MongoDB is 100% free for all selected Campus Mantris. No hidden charges or billing details are required.',
    },
    {
      question: 'Can I fast forward or skip video sections to finish faster?',
      answer: 'No. MongoDB utilizes course progress trackers. If a video is skipped or fast-forwarded, the completion stats will not sync, and you will not unlock the badge at the end of the module.',
    },
    {
      question: 'How do I claim my 250 points after earning the badge?',
      answer: 'Take a screenshot of your MongoDB Course Completion Dashboard and a screenshot of the earned Badge Certificate. Merge these two screenshots into a single PDF document, and upload it via the "Active Tasks" submission field in your official GFG Campus Mantri Dashboard before 28th July 2026.',
    },
    {
      question: 'Who should I contact if I face issues during registration?',
      answer: "You can reach out to Ayush directly via LinkedIn or check the announcements channel on the Campus Portal. We are always here to help you solve registration issues or answer technical questions.",
    },
    {
      question: 'When will the official Orientation Session be conducted?',
      answer: 'The official welcome orientation date, timings, and join link will be posted shortly on the dashboard announcement feed. It will include a program overview and an Oath Ceremony.',
    },
  ]

  return (
    <div id="resources" className="space-y-12">
      {/* Quick Resources section */}
      <div>
        <div className="flex items-center gap-2 mb-8 justify-center sm:justify-start">
          <Globe className="w-5 h-5 text-gfg-green" />
          <h3 className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-200">
            Quick Resources
          </h3>
          <span className="h-px bg-gray-200 dark:bg-dark-border flex-1 ml-4 hidden sm:block"></span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item, idx) => {
            const Icon = item.icon
            return (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-gray-800 dark:text-white mb-2 group-hover:text-gfg-green dark:group-hover:text-emerald-450 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-gfg-green dark:text-emerald-400 mt-6 group-hover:translate-x-1.5 transition-transform">
                  <span>Access Resource</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            )
          })}
        </div>
      </div>

      {/* FAQs section */}
      <div id="faqs" className="rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-8">
          <HelpCircle className="w-5 h-5 text-gfg-green" />
          <h3 className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-200">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-b border-gray-100 dark:border-dark-border/40 pb-4 last:border-0 last:pb-0"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left py-3 group"
              >
                <span className="text-sm sm:text-base font-bold text-gray-800 dark:text-white group-hover:text-gfg-green dark:group-hover:text-emerald-400 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="py-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
