import React from "react";
import Reveal from "../utilities/Reveal";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 bg-dark text-light font-spotify">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold  mt-12 mb-20 text-primary font-spotify">
          Get In Touch
        </h2>
        
        <Reveal width="w-full">
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
            Shoot me an email and let's connect! For more of my digital adventures, find me on{' '}
            <a href="https://www.linkedin.com/in/jordan-a-church/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              LinkedIn
            </a>{' '}
            or{' '}
            <a href="https://github.com/JChurch95" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              GitHub
            </a>.
          </p>
          <button className="bg-primary hover:bg-primary text-dark font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 font-spotify">
            <a href="mailto:your.email@example.com" className="text-lg">
            Say Howdy! 🤠
            </a>
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
