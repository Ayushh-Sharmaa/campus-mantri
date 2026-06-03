export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gfg-green rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-6">
          <div className="px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
            <span className="text-gfg-green font-semibold text-sm">🚀 Join the Program</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Become a <span className="gradient-text">Campus Mantri</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join GeeksforGeeks' exclusive ambassador program and inspire your peers. Grow your network, earn rewards, and make an impact on your campus.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="https://campus-portal.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Access Dashboard
          </a>
          <a href="#steps" className="btn-secondary">
            Learn More
          </a>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16">
          <div className="card-hover">
            <div className="text-3xl md:text-4xl font-bold gradient-text">600+</div>
            <p className="text-gray-600 text-sm md:text-base mt-2">Points to Earn</p>
          </div>
          <div className="card-hover">
            <div className="text-3xl md:text-4xl font-bold gradient-text">100%</div>
            <p className="text-gray-600 text-sm md:text-base mt-2">Free Program</p>
          </div>
          <div className="card-hover">
            <div className="text-3xl md:text-4xl font-bold gradient-text">3 Tasks</div>
            <p className="text-gray-600 text-sm md:text-base mt-2">To Complete</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gfg-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}
