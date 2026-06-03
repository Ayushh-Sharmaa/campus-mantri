export default function Steps() {
  const steps = [
    {
      number: 1,
      title: 'Register for Campus Mantri',
      description: 'Sign up for the GeeksforGeeks Campus Mantri Program',
      link: 'https://share.google/4T3Vb47CpehXdYodV',
      icon: '📝',
    },
    {
      number: 2,
      title: 'Complete Your Profile',
      description: 'Update your GFG profile with college details and profile information',
      link: 'https://www.geeksforgeeks.org/profile/',
      icon: '👤',
    },
    {
      number: 3,
      title: 'Follow & Connect',
      description: 'Follow on GFG Connect to stay updated with opportunities',
      link: 'https://www.geeksforgeeks.org/profile/cmayush',
      icon: '🤝',
    },
    {
      number: 4,
      title: 'Start Earning Points',
      description: 'Complete tasks and earn up to 600 points',
      link: '#tasks',
      icon: '⭐',
    },
  ]

  return (
    <section id="steps" className="section-padding bg-gfg-light">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Getting Started</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Follow these simple steps to begin your Campus Mantri journey
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <a
              key={step.number}
              href={step.link}
              target={step.link !== '#tasks' ? '_blank' : undefined}
              rel={step.link !== '#tasks' ? 'noopener noreferrer' : undefined}
              className="group card-hover"
            >
              <div className="bg-white rounded-2xl p-8 h-full border-2 border-transparent hover:border-gfg-green transition-all duration-300">
                {/* Step Number Circle */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gfg-green to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white font-display font-bold text-xl">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="font-display font-bold text-lg mb-3 text-gfg-dark">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-gfg-green font-semibold group-hover:gap-3 transition-all">
                  <span className="text-sm">Get Started</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Important Note */}
        <div className="mt-12 bg-white border-l-4 border-gfg-green rounded-lg p-6">
          <p className="text-gray-700">
            <span className="font-semibold text-gfg-green">💡 Important:</span> No money will be charged. This is a completely free program focused on helping you grow your network and earn rewards through tasks.
          </p>
        </div>
      </div>
    </section>
  )
}
