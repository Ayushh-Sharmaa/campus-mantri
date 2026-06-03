import { useState } from 'react'

export default function Tasks() {
  const [expandedTask, setExpandedTask] = useState(null)

  const tasks = [
    {
      id: 1,
      title: 'LinkedIn Repost & Reach Engagement',
      points: 50,
      icon: '🔗',
      description: 'Repost the official GeeksforGeeks LinkedIn post on your profile',
      details: [
        'Repost the official post with a caption for better visibility',
        'Engagement and reach will be evaluated',
        'Proper public repost required',
        'Official post link may change weekly',
      ],
      submission: 'Submit the link of your reposted LinkedIn post',
      deadline: '15th June 2026',
      color: 'from-blue-500 to-blue-600',
      link: 'https://www.linkedin.com/posts/geeksforgeeks-learn-to-code_free-workshops-at-summer-skillup-activity-7467907718926729218-9l0j?utm_source=share&utm_medium=member_ios&rcm=ACoAACGn6jgBN2J3YQIrufMfiQRILn2EtP8r2-8',
    },
    {
      id: 2,
      title: 'GeeksforGeeks GATE Courses Promotion',
      points: 250,
      icon: '📚',
      description: 'Promote GATE courses to students in your network',
      details: [
        'Share GATE courses with students through social handles',
        'Encourage enrollment in useful preparation courses',
        'Personally explore at least one GATE course',
        'Use your own graphics and creative content',
      ],
      submission: 'Submit Google Doc with screenshots of promotional posts',
      deadline: '15th June 2026',
      color: 'from-purple-500 to-purple-600',
      link: 'https://www.geeksforgeeks.org/courses/category/gate',
    },
    {
      id: 3,
      title: 'Summer SkillUp Program Promotion',
      points: 300,
      icon: '🚀',
      description: 'Promote the Summer SkillUp program using your UTM link',
      details: [
        'Use your assigned UTM tracking link for all promotions',
        'Share on LinkedIn, WhatsApp, Telegram, Instagram & college communities',
        'Creative captions will improve your performance',
        'Tracked by clicks, reach, and engagement',
      ],
      submission: 'Submit Google Doc with promotional posts and registration proof',
      deadline: '15th June 2026',
      color: 'from-emerald-500 to-emerald-600',
      link: 'https://drive.google.com/file/d/1uIUoj873gwShG4ydKOL2Hz2RVz69O58a/view?usp=sharing',
    },
  ]

  return (
    <section id="tasks" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Tasks to Complete</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Earn points by completing these tasks. Each task has a deadline of 15th June 2026.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            ⚠️ All posts must be created after 20th May 2026
          </p>
        </div>

        {/* Tasks Grid */}
        <div className="space-y-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`card-hover border-2 border-gray-200 hover:border-gray-300 rounded-2xl overflow-hidden transition-all`}
            >
              <div className="bg-white">
                <div
                  className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 cursor-pointer"
                  onClick={() => setExpandedTask(expandedTask === task.id ? null : task.id)}
                >
                  {/* Left Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`text-4xl`}>{task.icon}</div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-gfg-dark">{task.title}</h3>
                        <p className="text-gray-600 mt-1">{task.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Points Badge */}
                  <div className="mt-6 md:mt-0 flex flex-col md:flex-col items-start md:items-end gap-4">
                    <div className={`px-6 py-3 bg-gradient-to-r ${task.color} text-white rounded-full font-bold text-lg`}>
                      {task.points} Points
                    </div>
                    <div className="text-sm text-gray-500 md:text-right">
                      Deadline: {task.deadline}
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <div className="mt-4 md:mt-0 md:ml-4">
                    <svg
                      className={`w-6 h-6 text-gfg-green transition-transform ${expandedTask === task.id ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedTask === task.id && (
                  <div className="border-t border-gray-200 bg-gfg-light px-8 py-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Details */}
                      <div>
                        <h4 className="font-display font-bold text-lg mb-4 text-gfg-dark">What to Do</h4>
                        <ul className="space-y-3">
                          {task.details.map((detail, idx) => (
                            <li key={idx} className="flex gap-3">
                              <svg className="w-5 h-5 text-gfg-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Submission Requirements */}
                      <div>
                        <h4 className="font-display font-bold text-lg mb-4 text-gfg-dark">Submission Requirements</h4>
                        <div className="bg-white p-6 rounded-lg border-l-4 border-gfg-green mb-4">
                          <p className="text-gray-700 mb-4">{task.submission}</p>
                          <p className="text-sm text-gray-600 mb-4">
                            ✓ Only one submission allowed<br/>
                            ✓ Public visibility required<br/>
                            ✓ Enable "Anyone with the link can view" for Google Docs
                          </p>
                        </div>
                        <a
                          href={task.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary w-full text-center"
                        >
                          View Task Details
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Important Instructions */}
        <div className="mt-16 bg-amber-50 border-2 border-amber-200 rounded-2xl p-8">
          <h3 className="font-display text-xl font-bold text-amber-900 mb-4">📋 Important Instructions</h3>
          <ul className="space-y-3 text-amber-900">
            <li className="flex gap-3">
              <span className="text-2xl">⚠️</span>
              <span><strong>Deadline:</strong> All tasks must be completed by 15th June 2026</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">📅</span>
              <span><strong>Date Requirement:</strong> All posts must be created after 20th May 2026</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">🔄</span>
              <span><strong>Resubmission:</strong> If rejected, you get one chance to resubmit</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">📱</span>
              <span><strong>Proof Format:</strong> Submit all proofs in Google Docs with "Anyone with the link can view" access</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">💰</span>
              <span><strong>Cost:</strong> Completely free. No charges at any stage.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
