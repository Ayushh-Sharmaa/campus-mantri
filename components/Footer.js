export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gfg-dark text-white">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gfg-green to-emerald-600 flex items-center justify-center">
                  <span className="text-white font-bold">CM</span>
                </div>
                <span className="font-display font-bold text-lg">Campus Mantri</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Join GeeksforGeeks' exclusive ambassador program and grow your network while inspiring peers on your campus.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://campus-portal.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gfg-green transition-colors">
                    Dashboard Login
                  </a>
                </li>
                <li>
                  <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gfg-green transition-colors">
                    GeeksforGeeks
                  </a>
                </li>
                <li>
                  <a href="https://www.geeksforgeeks.org/profile/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gfg-green transition-colors">
                    Update Profile
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-display font-bold mb-6 text-white">Connect</h3>
              <p className="text-gray-400 mb-6">Follow Ayush for updates and opportunities</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/ayushh-sharmaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gfg-green hover:bg-emerald-600 flex items-center justify-center transition-all hover:scale-110"
                  title="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
                <a
                  href="https://www.geeksforgeeks.org/profile/cmayush"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gfg-green hover:bg-emerald-600 flex items-center justify-center transition-all hover:scale-110"
                  title="GeeksforGeeks"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fontWeight="bold">GFG</text>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            {/* Bottom */}
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm">
                © {currentYear} Campus Mantri Program. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-4 md:mt-0">
                Made with <span className="text-gfg-green">💚</span> for student ambassadors
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
