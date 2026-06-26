import { useState } from 'react'
import { FileCheck, FileText, CheckCircle2, ChevronRight, Download, Eye, AlertCircle } from 'lucide-react'

export default function ProofSubmission() {
  const [isChecked, setIsChecked] = useState({
    dashboard: false,
    badge: false,
    merged: false,
    deadline: false,
  })

  const toggleCheck = (key) => {
    setIsChecked((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const checklistItems = [
    {
      id: 'dashboard',
      label: 'MongoDB Course Dashboard Screenshot',
      description: 'Capture your main course landing page showing all modules completed with green checkmarks.',
      required: true,
    },
    {
      id: 'badge',
      label: 'MongoDB Skill Badge Screenshot',
      description: 'Capture the official credential certificate or badging registry detail from MongoDB Academy.',
      required: true,
    },
    {
      id: 'merged',
      label: 'Merge screenshots into one single PDF',
      description: 'Ensure both screenshots are placed in a single document (PDF or Word Doc) before submitting.',
      required: true,
    },
    {
      id: 'deadline',
      label: 'Verify UTM parameters / Profile sync',
      description: 'Double check that you used the referral URL (https://gfgcdn.com/tu/vc5/) when registering.',
      required: false,
    },
  ]

  const completedCount = Object.values(isChecked).filter(Boolean).length

  return (
    <div id="proof" className="rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <span className="px-3 py-1 bg-gfg-green/10 text-gfg-green dark:text-emerald-400 text-xs font-bold rounded-full">
            Mandatory Verification
          </span>
          <h3 className="text-2xl font-extrabold text-gray-800 dark:text-white mt-2">
            Proof Submission Guide
          </h3>
        </div>
        <div className="bg-gray-50 dark:bg-dark-border/20 px-4 py-2 rounded-xl border border-gray-150 dark:border-dark-border/40">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold block">CHECKLIST PROGRESS</span>
          <span className="text-sm font-extrabold text-gfg-green dark:text-emerald-400">
            {completedCount} / {checklistItems.length} Verified
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
        To receive your 250 points, you must upload validation proofs to the official Campus Mantri portal. Follow this checklist to guarantee your submission is approved on the first try.
      </p>

      {/* Interactive Checklist */}
      <div className="space-y-4 mb-8">
        {checklistItems.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleCheck(item.id)}
            className={`flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer select-none ${
              isChecked[item.id]
                ? 'bg-gfg-green/5 border-gfg-green/30 dark:bg-emerald-950/10 dark:border-emerald-900/30'
                : 'bg-white dark:bg-dark-card border-gray-200 dark:border-dark-border/40 hover:bg-gray-50 dark:hover:bg-dark-border/20'
            }`}
          >
            <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all flex-shrink-0 ${
              isChecked[item.id]
                ? 'bg-gfg-green border-gfg-green text-white scale-105'
                : 'border-gray-350 dark:border-dark-border'
            }`}>
              {isChecked[item.id] && <CheckCircle2 className="w-4 h-4 text-white" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-gray-800 dark:text-white leading-none">
                  {item.label}
                </h4>
                {item.required && (
                  <span className="text-[10px] bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400 font-bold px-1.5 py-0.5 rounded uppercase">
                    Required
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Guide details panel */}
      <div className="bg-blue-50 dark:bg-blue-950/15 border border-blue-100 dark:border-blue-900/20 p-5 rounded-2xl flex gap-4 items-start mb-8">
        <FileText className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-bold text-blue-900 dark:text-blue-400">PDF Merging & Submission Instructions</h4>
          <p className="text-xs text-blue-800 dark:text-blue-300/80 leading-relaxed mt-1.5">
            Take screenshots of both your GFG/MongoDB dashboard showing 100% completion AND your official badge certificate. Open any free PDF tool (like PDF24 or Smallpdf) and merge these image files into a single PDF document. Open the official Campus Mantri Dashboard, click on &quot;Submit Proof&quot; for this task, and upload the PDF file before <strong>28th July 2026</strong>.
          </p>
        </div>
      </div>

      {/* Submission CTA */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-gray-50 dark:bg-dark-border/20 rounded-2xl border border-gray-150 dark:border-dark-border/40">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
          <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
            Note: Submissions are manually audited by Team GFG within 3-5 working days.
          </span>
        </div>
        <a
          href="https://campus-portal.geeksforgeeks.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-gfg-dark dark:bg-dark-border hover:bg-black dark:hover:bg-dark-border/85 text-white dark:text-gray-200 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all w-full sm:w-auto justify-center"
        >
          Submit to Campus Portal
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
