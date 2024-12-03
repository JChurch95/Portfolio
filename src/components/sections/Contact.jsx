import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark text-light">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary">Get In Touch</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
        Shoot me an email and let's connect! You can also find me on LinkedIn or GitHub if that's more your speed.
        </p>
        <button className="bg-primary hover:bg-primary/90 text-dark font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
          <a href="mailto:your.email@example.com" className="text-lg">
            Say Hello
          </a>
        </button>
      </div>
    </section>
  )
}

export default Contact