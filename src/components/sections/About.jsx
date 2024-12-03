import React from "react";
import { Reveal } from "../utilities/Reveal";
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-dark py-20 font-spotify"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold text-primary mb-12 mt-28 text-center font-spotify">
          About Me
        </h2>
        <div className="text-lg md:text-xl text-white leading-relaxed space-y-8 font-spotify">
          <Reveal>
            <p>
              <span className="bg-primary text-dark py-2 px-3 rounded font-bold mr-1 float-left text-2xl font-spotify">
                H
              </span>
              ey there! I'm Jordan Church, a software developer passionate about crafting efficient, user-focused web applications. My journey into tech started at Carolina Code School, where I gained a strong foundation in React, Python, PostgreSQL, and more through their immersive Full Stack Web Development program.
            </p>
          </Reveal>

          <Reveal>
            <p>
              I specialize in creating dynamic and responsive applications that solve real-world problems. One of my favorite projects is Rabbit Route, an AI-powered trip planner that generates custom itineraries with hotel recommendations and local tips. This project highlights my skills in integrating APIs, structuring databases, and building seamless user experiences. Another standout project, Mall Rats, showcases my ability to design full-stack e-commerce platforms, complete with product categorization, user authentication, and shopping cart functionality.
            </p>
          </Reveal>

          <Reveal>
            <p>
              Before transitioning to software development, I spent six years in the textile industry, where I honed my problem-solving and optimization skills. At Milliken, I worked on innovative projects like using AI to detect weaving defects in real time, sparking my passion for technology's transformative potential. After a year in technical sales, I followed my heart and shifted to software development to bring creative ideas to life.
            </p>
          </Reveal>

          <Reveal>
            <p>
              When I'm not coding, you can find me running, gaming, or exploring new technologies. I thrive on tackling challenges and collaborating with others to build impactful solutions. Let's connect and create something amazing!
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;