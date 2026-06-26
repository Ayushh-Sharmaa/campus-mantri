import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import InteractiveGuide from '../components/InteractiveGuide'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react'

export default function GuidePage() {
  const [expandedGuideId, setExpandedGuideId] = useState(1) // MongoDB is 1

  const guidesList = [
    {
      id: 1,
      title: 'MongoDB Challenge Onboarding Guide',
      subtitle: '7 Steps • ~6.5 Hours Total • 250 Points',
      status: 'Active',
      description: 'Follow this step-by-step interactive stepper to register your GFG profile code, complete the MongoDB Academy lessons, and submit validation screenshots for auditing.',
    }
  ]

  return (
    <>
      <Head>
        <title>Roadmap Guides - Campus Mantri Hub</title>
        <meta name="description" content="Step-by-step task guides for the GeeksforGeeks Campus Mantri 2026 challenge requirements." />
      </Head>

      <Navbar />

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-gfg-light/30 via-white to-emerald-50/10 dark:from-dark-bg dark:via-dark-bg dark:to-dark-card/10 pt-24 pb-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Fold */}
          <div className="mb-10 text-center sm:text-left">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-650 dark:text-blue-400 text-xs font-bold rounded-full">
              Task Roadmaps
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mt-3">
              Task Roadmap Guides
            </h1>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 max-w-xl">
              Select an active task guide to open its interactive walkthrough, checklist verification, and embedded proof submission.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Guide Accordion Feed Column */}
            <div className="lg:col-span-2 space-y-6">
              
              {guidesList.map((guide) => {
                const isExpanded = expandedGuideId === guide.id
                return (
                  <div 
                    key={guide.id} 
                    className="rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card shadow-sm overflow-hidden transition-all duration-300"
                  >
                    {/* Header bar */}
                    <div 
                      onClick={() => setExpandedGuideId(isExpanded ? null : guide.id)}
                      className="p-6 sm:p-8 flex justify-between items-center cursor-pointer select-none hover:bg-gray-55/50 dark:hover:bg-dark-border/10 transition-colors"
                    >
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-550 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-655 dark:text-blue-400 text-[10px] font-bold rounded uppercase">
                              {guide.status}
                            </span>
                            <span className="text-[10px] text-gray-450 dark:text-gray-500 font-bold uppercase tracking-wider">
                              {guide.subtitle}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-extrabold text-gray-800 dark:text-white mt-1.5 leading-snug">
                            {guide.title}
                          </h3>
                        </div>
                      </div>
                      <div className="p-1.5 rounded-lg border border-gray-200 dark:border-dark-border/45 text-gray-500 dark:text-gray-400">
                        {isExpanded ? <ChevronDown className="w-5 h-5 rotate-180 transition-transform" /> : <ChevronDown className="w-5 h-5 transition-transform" />}
                      </div>
                    </div>

                    {/* Expandable Stepper Wrapper */}
                    {isExpanded && (
                      <div className="p-6 sm:p-8 border-t border-gray-100 dark:border-dark-border/30 bg-gray-50/20 dark:bg-dark-border/5 space-y-6 animate-fade-in">
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {guide.description}
                        </p>
                        <div className="border-t border-gray-150/80 dark:border-dark-border/40 pt-6">
                          <InteractiveGuide />
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
              
            </div>

            {/* Sidebar column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Sidebar onScrollToSection={(id) => {
                  if (id === 'tasks') window.location.href = '/tasks'
                  else if (id === 'announcements') window.location.href = '/announcements'
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
