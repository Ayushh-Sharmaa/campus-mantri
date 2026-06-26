import { Award, Heart, MessageSquare, ExternalLink, Terminal } from 'lucide-react'

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 border-t border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          {/* Column 1: Brand and Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gfg-green to-emerald-600 flex items-center justify-center text-white">
                <Terminal className="w-4.5 h-4.5" />
              </div>
              <span className="font-display font-extrabold text-sm text-white tracking-wide uppercase">
                GFG Campus Hub
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
              The official hub for Campus Mantris of GeeksforGeeks program 2026. Access checklists, trackers, tutorials, timelines, and guides.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <a href="#announcements" className="hover:text-gfg-green dark:hover:text-emerald-400 transition-colors">Announcements</a>
              <a href="#tasks" className="hover:text-gfg-green dark:hover:text-emerald-400 transition-colors">Active Task</a>
              <a href="#stepper" className="hover:text-gfg-green dark:hover:text-emerald-400 transition-colors">Roadmap Guide</a>
              <a href="#proof" className="hover:text-gfg-green dark:hover:text-emerald-400 transition-colors">Proof Submission</a>
              <a href="https://campus-portal.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" className="hover:text-gfg-green dark:hover:text-emerald-400 transition-colors flex items-center gap-1">
                Portal
                <ExternalLink className="w-3 h-3" />
              </a>
              <a href="#faqs" className="hover:text-gfg-green dark:hover:text-emerald-400 transition-colors">FAQs</a>
            </div>
          </div>

          {/* Column 3: Contact & Connections */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Let&apos;s Connect</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              If you have any doubts regarding course progress sync or proof file validation, reach out immediately.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/ayushh-sharmaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-800 hover:bg-blue-600 text-white hover:scale-105 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.geeksforgeeks.org/profile/cmayush"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-800 hover:bg-gfg-green text-white hover:scale-105 transition-all flex items-center justify-center font-bold text-xs"
                title="GFG Profile"
              >
                GFG
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom divider and copy information */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-500">
            © {currentYear} GeeksforGeeks Campus Mantri Program. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-gray-500">
            Made with <Heart className="w-3.5 h-3.5 text-gfg-green fill-current" /> by{' '}
            <a
              href="https://www.geeksforgeeks.org/profile/cmayush"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gray-300 hover:text-gfg-green dark:hover:text-emerald-400 transition-colors"
            >
              Ayush Sharma
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
