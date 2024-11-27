import React from 'react'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">About Me</h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I'm a software developer passionate about building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
        </p>
        <div className="mt-8 space-y-4">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-semibold text-white mb-3">Skills</h3>
            <p className="text-gray-300">
              Frontend Development • Backend Development • UI/UX Design • Problem Solving
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About