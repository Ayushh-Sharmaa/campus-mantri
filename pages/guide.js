import Head from 'next/head'
import Navbar from '../components/Navbar'
import InteractiveGuide from '../components/InteractiveGuide'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function GuidePage() {
  return (
    <>
      <Head>
        <title>MongoDB Task Guide - Campus Mantri Hub</title>
        <meta name="description" content="A step-by-step task guide for the GeeksforGeeks Campus Mantri 2026 program and MongoDB training challenge." />
      </Head>

      <Navbar />

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-gfg-light/30 via-white to-emerald-50/10 dark:from-dark-bg dark:via-dark-bg dark:to-dark-card/10 pt-24 pb-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Fold */}
          <div className="mb-10 text-center sm:text-left">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-650 dark:text-blue-400 text-xs font-bold rounded-full">
              MongoDB Task Guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mt-3">
              Task Guide for MongoDB Challenge
            </h1>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 max-w-xl">
              Follow this step-by-step interactive stepper to complete the MongoDB Skill Badges Challenge and submit your proof.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stepper column */}
            <div className="lg:col-span-2 space-y-6">
              <InteractiveGuide />

              {/* Extra visual warning card */}
              <div className="p-6 rounded-3xl bg-amber-500/5 dark:bg-amber-950/10 border border-amber-500/20 text-left flex gap-4">
                <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-850 dark:text-amber-400">Avoid Skipping Lessons</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    MongoDB academy API monitors the playback velocity of each lecture page. Skipping slides or fast forwarding lessons will prevent the badge credentials from generating in your final Academy profile tab.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar column */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick tip widget */}
              <div className="relative overflow-hidden rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card p-6 shadow-sm">
                <h4 className="text-sm font-extrabold text-gray-800 dark:text-white uppercase tracking-wider mb-3">Onboarding Tips</h4>
                <ul className="space-y-3 text-xs text-gray-655 dark:text-gray-405 leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-gfg-green font-bold">1.</span>
                    <span>Use a single consistent email for both GFG and MongoDB Academy registries.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gfg-green font-bold">2.</span>
                    <span>Ensure you capture screenshots in high definition to avoid PDF validation rejections.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gfg-green font-bold">3.</span>
                    <span>Check out the active countdown timer on the <Link href="/tasks" className="text-gfg-green hover:underline">Active Tasks page</Link> to submit on time.</span>
                  </li>
                </ul>
              </div>

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
