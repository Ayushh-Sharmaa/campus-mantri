import { useState, useEffect } from 'react'
import { Check, ChevronRight, ChevronLeft, Eye, Award, Monitor, Play, BookOpen, AlertTriangle, Sparkles, ExternalLink } from 'lucide-react'

export default function InteractiveGuide() {
  const [activeStep, setActiveStep] = useState(0)
  const [selectedModule, setSelectedModule] = useState(null)
  const [modulesState, setModulesState] = useState([
    { id: 1, title: 'MongoDB Basics & Shell', duration: '1h 30m', status: 'Not Started', difficulty: 'Beginner' },
    { id: 2, title: 'CRUD Operations & Operators', duration: '2h 00m', status: 'Not Started', difficulty: 'Beginner' },
    { id: 3, title: 'Data Modeling & Schema Validation', duration: '1h 45m', status: 'Not Started', difficulty: 'Intermediate' },
    { id: 4, title: 'Indexing & Query Performance', duration: '2h 15m', status: 'Not Started', difficulty: 'Advanced' },
  ])

  // Confetti on Step 6
  useEffect(() => {
    if (activeStep === 5) {
      triggerConfetti()
    }
  }, [activeStep])

  const triggerConfetti = async () => {
    try {
      const confetti = (await import('canvas-confetti')).default
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      })
    } catch (err) {
      console.log('Confetti failed to load', err)
    }
  }

  const steps = [
    {
      title: 'Sign In / Register GFG',
      description: 'Create or log in to your GeeksforGeeks account.',
      estimatedTime: '5 Mins',
      details: (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Begin by accessing the official GeeksforGeeks platform. You need a valid GFG account to track your progress and link it later to your Campus Mantri dashboard.
          </p>
          <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 p-4 rounded-xl flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">Official GFG Portal</p>
              <p className="text-sm font-bold text-gfg-dark dark:text-white">geeksforgeeks.org</p>
            </div>
            <a
              href="https://www.geeksforgeeks.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gfg-green dark:bg-emerald-600 text-white rounded-lg text-xs font-bold hover:scale-105 transition-transform flex items-center gap-1.5"
            >
              Visit Website
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Screenshot Mockup */}
          <div className="relative border border-gray-200 dark:border-dark-border/50 rounded-2xl overflow-hidden bg-gray-55 dark:bg-dark-border/10 p-2">
            <div className="flex items-center gap-1.5 pb-2 px-2 border-b border-gray-200 dark:border-dark-border/30 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
              <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium ml-1">GFG Auth Portal</span>
            </div>
            <div className="h-40 rounded-xl bg-white dark:bg-dark-card flex flex-col items-center justify-center p-4 border border-dashed border-gray-200 dark:border-dark-border/40 text-center">
              <div className="w-10 h-10 rounded-full bg-gfg-green/10 flex items-center justify-center text-gfg-green mb-2">
                <Monitor className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold text-gray-700 dark:text-white">GeeksforGeeks Login Screen</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-[250px]">Secure login with email, Google, or GitHub accounts.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Register for MongoDB',
      description: 'Register for the official MongoDB learning path.',
      estimatedTime: '5 Mins',
      details: (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            GeeksforGeeks has teamed up with MongoDB to provide this exclusive, free resource. Register for the collaboration program to track your badge progress.
          </p>
          <div className="bg-mongodb-green/10 border border-mongodb-green/30 p-4 rounded-xl flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-mongodb-dark dark:text-mongodb-green font-semibold">MongoDB Partner Link</p>
              <p className="text-sm font-bold text-gray-800 dark:text-white">gfgcdn.com/tu/vc5/</p>
            </div>
            <a
              href="https://gfgcdn.com/tu/vc5/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-mongodb-dark text-mongodb-green rounded-lg text-xs font-bold hover:scale-105 transition-transform flex items-center gap-1.5"
            >
              Register Now
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Screenshot Mockup */}
          <div className="relative border border-gray-200 dark:border-dark-border/50 rounded-2xl overflow-hidden bg-gray-55 dark:bg-dark-border/10 p-2">
            <div className="flex items-center gap-1.5 pb-2 px-2 border-b border-gray-200 dark:border-dark-border/30 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
              <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium ml-1">MongoDB Registration</span>
            </div>
            <div className="h-40 rounded-xl bg-mongodb-dark flex flex-col items-center justify-center p-4 text-center text-white">
              <span className="text-mongodb-green font-bold text-xl mb-1">mongodb</span>
              <p className="text-xs text-gray-300 max-w-[280px]">Fill out the student developer form to activate your free learning path and coupon code.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Choose Learning Path',
      description: 'Select your preferred MongoDB learning module.',
      estimatedTime: '10 Mins',
      details: (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Choose any of the official MongoDB learning paths. We recommend starting with MongoDB Basics. Explore the interactive paths below:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {modulesState.map((mod) => (
              <div
                key={mod.id}
                className={`p-4 rounded-2xl border transition-all ${
                  selectedModule === mod.id
                    ? 'border-mongodb-green bg-mongodb-green/5 dark:bg-mongodb-green/10 shadow-sm'
                    : 'border-gray-250 dark:border-dark-border/40 bg-white dark:bg-dark-card hover:border-gray-300 dark:hover:border-dark-border'
                }`}
              >
                <div className="flex justify-between items-start gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    mod.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400' :
                    mod.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400' :
                    'bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400'
                  }`}>
                    {mod.difficulty}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-450 font-medium">{mod.duration}</span>
                </div>
                <h4 className="text-sm font-bold text-gray-800 dark:text-white leading-snug">{mod.title}</h4>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[11.5px] text-gray-500 dark:text-gray-400 font-semibold flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      mod.status === 'Completed' ? 'bg-gfg-green' :
                      mod.status === 'In Progress' ? 'bg-blue-500' : 'bg-gray-350'
                    }`}></span>
                    {mod.status}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedModule(mod.id)
                      const updated = [...modulesState]
                      const index = updated.findIndex((m) => m.id === mod.id)
                      updated[index].status = updated[index].status === 'Not Started' ? 'In Progress' : 
                                              updated[index].status === 'In Progress' ? 'Completed' : 'Not Started'
                      setModulesState(updated)
                    }}
                    className="px-3 py-1 bg-gray-50 dark:bg-dark-border/30 hover:bg-mongodb-green/10 hover:text-mongodb-dark dark:hover:text-mongodb-green border border-gray-200 dark:border-dark-border rounded-lg text-xs font-bold transition-all"
                  >
                    {mod.status === 'Not Started' ? 'Start' : mod.status === 'In Progress' ? 'Finish' : 'Reset'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Watch Lessons Fully',
      description: 'Go through every tutorial page and video lesson.',
      estimatedTime: '3 - 4 Hours',
      details: (
        <div className="space-y-4">
          <p className="text-gray-650 dark:text-gray-300 text-sm leading-relaxed">
            Ensure you complete all the lessons step by step. Read the technical documentation, complete the hands-on code examples in the web terminal, and watch the visual video guides.
          </p>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 p-4 rounded-2xl flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="text-sm font-bold text-amber-800 dark:text-amber-400">Important Progress Note</h5>
              <p className="text-xs text-amber-700 dark:text-amber-300/80 mt-1 leading-relaxed">
                Videos must be watched fully without skipping or fast-forwarding for progress to count. MongoDB trackers monitor active completion rates!
              </p>
            </div>
          </div>

          {/* Video Player Mockup */}
          <div className="relative border border-gray-200 dark:border-dark-border/50 rounded-2xl overflow-hidden bg-gray-55 dark:bg-dark-border/10 p-2">
            <div className="h-44 rounded-xl bg-gray-900 flex flex-col items-center justify-center p-4 relative group">
              <div className="w-14 h-14 rounded-full bg-white/10 group-hover:bg-mongodb-green/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white group-hover:text-mongodb-green transition-all cursor-pointer">
                <Play className="w-6 h-6 fill-current" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-gray-400">
                <span>02:45 / 12:30</span>
                <span className="text-mongodb-green font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-mongodb-green animate-ping"></span>
                  Active Tracker
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Complete All Modules',
      description: 'Finish the remaining chapters and exercises.',
      estimatedTime: '2 - 3 Hours',
      details: (
        <div className="space-y-4">
          <p className="text-gray-650 dark:text-gray-300 text-sm leading-relaxed">
            Wrap up the modules by passing the small assessments/quizzes at the end of each module. Verify that all sections show green checkmarks on your MongoDB dashboard.
          </p>

          <div className="space-y-2.5">
            <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 font-semibold">
              <span>Overall Course Completion</span>
              <span className="text-gfg-green">85% Complete</span>
            </div>
            <div className="h-2.5 w-full bg-gray-100 dark:bg-dark-border/40 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-gfg-green to-emerald-500 rounded-full animate-pulse" style={{ width: '85%' }}></div>
            </div>
            <p className="text-xs text-gray-450 dark:text-gray-400 leading-normal">
              💡 Badges unlock automatically after finishing the required lessons. Check your profile registry on MongoDB Academy.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Earn MongoDB Skill Badge',
      description: 'Receive your official MongoDB developer credential.',
      estimatedTime: 'Instant',
      details: (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/10 border border-green-200 dark:border-green-900/30 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-amber-500/20">
              <Award className="w-9 h-9" />
            </div>

            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Congratulations!</h4>
            <p className="text-sm text-gray-650 dark:text-gray-300 max-w-[320px] mx-auto leading-relaxed">
              You have unlocked your MongoDB Skill Badge! Save a high-resolution screenshot of the badge for your Campus Mantri submission.
            </p>
            
            <button
              onClick={triggerConfetti}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 mx-auto hover:scale-105 active:scale-95 transition-all shadow-md shadow-amber-500/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Celebrate Again!
            </button>
          </div>
        </div>
      ),
    },
  ]

  const completionPercentage = Math.round(((activeStep + 1) / steps.length) * 100)

  return (
    <div id="stepper" className="rounded-3xl border border-gray-200/80 dark:border-dark-border/40 bg-white dark:bg-dark-card p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <span className="px-3 py-1 bg-gfg-green/10 text-gfg-green dark:text-emerald-400 text-xs font-bold rounded-full">
            Interactive Roadmap
          </span>
          <h3 className="text-2xl font-extrabold text-gray-800 dark:text-white mt-2">
            Learning & Onboarding Guide
          </h3>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase">Estimated Time</p>
          <p className="text-base font-bold text-gray-800 dark:text-white">~6.5 Hours Total</p>
        </div>
      </div>

      {/* Progress Info */}
      <div className="mb-8 space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="font-bold text-gray-600 dark:text-gray-300">
            Step {activeStep + 1} of {steps.length}: {steps[activeStep].title}
          </span>
          <span className="font-bold text-gfg-green dark:text-emerald-400">
            {completionPercentage}% Completed
          </span>
        </div>
        <div className="h-3 w-full bg-gray-100 dark:bg-dark-border/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gfg-green to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Horizonal Stepper Dots */}
      <div className="flex justify-between items-center mb-8 relative">
        <div className="absolute left-0 right-0 h-0.5 bg-gray-200 dark:bg-dark-border/40 z-0"></div>
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm relative z-10 border transition-all ${
              idx < activeStep
                ? 'bg-gfg-green border-gfg-green text-white'
                : idx === activeStep
                ? 'bg-white dark:bg-dark-card border-gfg-green text-gfg-green shadow-md scale-110'
                : 'bg-white dark:bg-dark-card border-gray-300 dark:border-dark-border/80 text-gray-400 dark:text-gray-450 hover:border-gray-400'
            }`}
            title={step.title}
          >
            {idx < activeStep ? <Check className="w-4 h-4" /> : idx + 1}
          </button>
        ))}
      </div>

      {/* Step Card Content */}
      <div className="border border-gray-150 dark:border-dark-border/40 bg-gradient-to-br from-gfg-light/20 to-white dark:from-dark-card/20 dark:to-dark-card rounded-2xl p-6 mb-8 transition-all duration-300 min-h-[350px] flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-4 mb-4">
            <div>
              <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">
                Step {activeStep + 1} Instructions
              </span>
              <h4 className="text-lg font-bold text-gray-800 dark:text-white mt-1">
                {steps[activeStep].title}
              </h4>
            </div>
            <span className="px-2.5 py-1 bg-gray-100 dark:bg-dark-border/40 text-gray-500 dark:text-gray-400 text-xs font-semibold rounded-lg flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              {steps[activeStep].estimatedTime}
            </span>
          </div>

          <div className="mt-4">{steps[activeStep].details}</div>
        </div>

        {/* Stepper Navigation Buttons */}
        <div className="flex justify-between items-center border-t border-gray-100 dark:border-dark-border/30 pt-6 mt-8">
          <button
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className={`px-4 py-2 border rounded-xl font-semibold text-sm flex items-center gap-1.5 transition-all ${
              activeStep === 0
                ? 'opacity-40 cursor-not-allowed border-gray-200 text-gray-400'
                : 'border-gray-300 hover:bg-gray-50 dark:border-dark-border dark:hover:bg-dark-border/40 text-gray-700 dark:text-gray-300'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          <button
            onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
            disabled={activeStep === steps.length - 1}
            className={`px-4 py-2 rounded-xl font-semibold text-sm flex items-center gap-1.5 transition-all ${
              activeStep === steps.length - 1
                ? 'opacity-40 cursor-not-allowed bg-gray-100 dark:bg-dark-border/20 text-gray-400'
                : 'bg-gfg-green dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold'
            }`}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
