import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { Bell, Calendar, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react'

export default function AnnouncementsPage() {
  const [announcementExpanded, setAnnouncementExpanded] = useState(true)

  return (
    <>
      <Head>
        <title>Announcements - Campus Mantri Hub</title>
        <meta name="description" content="Official announcements, orientations, and ceremony details for GeeksforGeeks Campus Mantri 2026." />
      </Head>

      <Navbar />

      {/* Main Container */}
      <div className="min-h-screen bg-gradient-to-br from-gfg-light/30 via-white to-emerald-50/10 dark:from-dark-bg dark:via-dark-bg dark:to-dark-card/10 pt-24 pb-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header fold */}
          <div className="mb-10 text-center sm:text-left">
            <span className="px-3 py-1 bg-purple-500/10 text-purple-650 dark:text-purple-400 text-xs font-bold rounded-full">
              Notice Board
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mt-3">
              Announcements & Feeds
            </h1>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 max-w-xl">
              Stay updated with the latest instructions, scheduled orientations, oath ceremonies, and support notes from Team GFG.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Feed */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Primary Announcement Card */}
              <div id="announcements" className="relative overflow-hidden rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card p-6 sm:p-8 shadow-sm">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-gfg-green/5 rounded-full filter blur-[20px]"></div>
                
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gfg-green/10 dark:bg-emerald-950/40 text-gfg-green dark:text-emerald-400 flex items-center justify-center">
                      <Bell className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 bg-gfg-green/10 text-gfg-green dark:text-emerald-400 text-[10px] font-bold rounded uppercase">
                          Official Welcome
                        </span>
                        <span className="text-[10px] text-gray-455 dark:text-gray-500 font-bold uppercase">
                          25 June 2026
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800 dark:text-white mt-1 leading-snug">
                        Welcome to Campus Mantri 2026
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setAnnouncementExpanded(!announcementExpanded)}
                    className="p-1.5 rounded-lg border border-gray-200 dark:border-dark-border/45 text-gray-550 dark:text-gray-400 hover:bg-gray-55 dark:hover:bg-dark-border/30 transition-all"
                  >
                    {announcementExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                {/* Body Content */}
                {announcementExpanded && (
                  <div className="mt-6 space-y-4 text-sm sm:text-base text-gray-655 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-dark-border/20 pt-6 animate-fade-in">
                    <p>Dear Campus Mantris,</p>
                    <p>
                      Welcome to the GeeksforGeeks Campus Mantri Program 2026. Congratulations on becoming a Campus Mantri. We are delighted to have you as a part of our community and look forward to an exciting journey ahead.
                    </p>
                    <p>
                      We will soon be conducting the official Campus Mantri Orientation Session, where you will get to know everything about the program, your responsibilities, upcoming initiatives, and opportunities.
                    </p>
                    
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/10 border-l-4 border-gfg-green p-4 rounded-r-xl my-6">
                      <h4 className="font-bold text-gfg-green dark:text-emerald-450 text-sm sm:text-base flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4" />
                        Oath Ceremony & Program Overview
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-350 leading-relaxed mt-1.5">
                        As you are now officially Campus Mantris, the orientation will also include a special Oath Ceremony, marking the beginning of your journey as representatives of GeeksforGeeks on your campus.
                      </p>
                    </div>

                    <p>
                      The orientation date and timings will be announced soon. Keep an eye on your dashboard for further updates.
                    </p>
                    <p className="pt-2 font-bold text-gray-800 dark:text-white">
                      Once again, welcome aboard. We are excited to begin this journey with all of you.
                    </p>
                    <div className="pt-4 border-t border-gray-50 dark:border-dark-border/20 flex justify-between items-center text-xs text-gray-400 dark:text-gray-550 font-semibold">
                      <span>Posted by Program Manager</span>
                      <span>Team GeeksforGeeks</span>
                    </div>
                  </div>
                )}

                {!announcementExpanded && (
                  <p className="text-xs text-gray-550 dark:text-gray-450 leading-normal mt-4 line-clamp-2">
                    Dear Campus Mantris, Welcome to the GeeksforGeeks Campus Mantri Program 2026. Congratulations on becoming a Campus Mantri. We are delighted to have you as a part of our community and look forward to...
                  </p>
                )}
              </div>

              {/* Scheduled Event Card */}
              <div className="p-6 rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div className="flex gap-4 items-start text-left">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-550 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-800 dark:text-white">Orientation Date Notification</h4>
                    <p className="text-xs text-gray-550 dark:text-gray-400 mt-1 max-w-sm leading-relaxed">
                      We are syncing with coordinates. Keep notifications enabled to receive invitation calendar links and join details.
                    </p>
                  </div>
                </div>
                <span className="px-4 py-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-extrabold rounded-xl uppercase tracking-wider shrink-0 w-full sm:w-auto text-center">
                  To Be Announced
                </span>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Sidebar onScrollToSection={(id) => {
                  if (id === 'tasks') window.location.href = '/tasks'
                  else if (id === 'announcements') window.scrollTo({ top: 0, behavior: 'smooth' })
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
