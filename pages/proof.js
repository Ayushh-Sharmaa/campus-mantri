import Head from 'next/head'
import Navbar from '../components/Navbar'
import ProofSubmission from '../components/ProofSubmission'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function ProofPage() {
  return (
    <>
      <Head>
        <title>Proof Submission - Campus Mantri Hub</title>
        <meta name="description" content="Submit your MongoDB challenge completion proof to the GeeksforGeeks Campus Mantri portal." />
      </Head>

      <Navbar />

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-gfg-light/30 via-white to-emerald-50/10 dark:from-dark-bg dark:via-dark-bg dark:to-dark-card/10 pt-24 pb-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Fold */}
          <div className="mb-10 text-center sm:text-left">
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-full">
              Proof Submission Hub
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mt-3">
              Submit Task Verification Proof
            </h1>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 max-w-xl">
              Upload your validation documents to the official Campus Mantri portal and check off steps to ensure approval.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checklist Column */}
            <div className="lg:col-span-2 space-y-6">
              <ProofSubmission />
            </div>

            {/* Sidebar Column */}
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
