import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      {/* Main content container */}
      <motion.div
        className="relative z-10 max-w-4xl w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile image */}
        <motion.div
          className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary p-1 mt-20"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img
            src="/public/Web Size Headshot copy.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
        
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-light">
            <span className="text-primary">Jordan Church</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-light/80 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-base md:text-lg text-light/60 max-w-2xl mx-auto mb-8">
            I’m a software developer specializing in creating dynamic and
            responsive web applications. With expertise in technologies like
            React, Tailwind, and PostgreSQL, I focus on crafting solutions that
            are not only functional but also visually engaging. I take pride in
            building accessible, user-friendly applications that make a real
            impact. Feel free to explore my portfolio to see my work and learn
            more about me!
          </p>

          {/* CTA Button */}
          <motion.a
            href="#projects"
            className="inline-block px-8 py-3 rounded-full bg-primary text-dark font-medium 
                     hover:bg-primary/90 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Tech stack tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            "React",
            "FastAPI",
            "Tailwind",
            "PostgreSQL",
            "Python",
            "JavaScript",
          ].map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-light/5 text-light/80 text-sm 
                       border border-light/10 hover:border-primary/50 hover:bg-primary/5 
                       transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
