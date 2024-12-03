import React from "react";
import { motion } from "framer-motion";
import Reveal from "../utilities/Reveal";

const Projects = () => {
  const projects = [
    {
      title: "Rabbit Route",
      description:
        "An AI itinerary generator that makes trip planning a breeze! Simply input your destination and preferences, and watch as it crafts personalized day-by-day itineraries featuring carefully selected restaurants, activities, and accommodations.",
      tech: [
        "Python",
        "React",
        "OpenAI",
        "Tailwind CSS",
        "Supabase",
        "FastAPI",
        "SQLModel",
        "PostgreSQL",
        "JWT"
      ],
      github: "https://github.com/JChurch95/Trip_Planner_Frontend",
      live: "https://rabbitroute.netlify.app/",
      image: "/Rabbit_Route.png",
    },
    {
      title: "Mall Rats Skate Shop",
      description:
        "An e-commerce skate shop bringing the heart of skate culture right to your screen! Features ratings, product photos, and a slick dark interface that feels as smooth as a freshly waxed ledge.",
      tech: [
        "Python",
        "React",
        "CSS Modules",
        "Supabase",
        "FastAPI",
        "SQLModel",
        "PostgreSQL",
        "JWT",
      ],
      github: "https://github.com/JChurch95/crudco",
      live: "https://project-demo.com",
      image: "/placeholder/500/300",
    },
  ];
  return (
    <section id="projects" className="min-h-screen py-20 bg-dark text-light font-spotify">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-28 text-center font-spotify">
            Featured Projects
          </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal key={index}>
              <motion.div
                className="group relative bg-dark/80 rounded-xl overflow-hidden border border-primary/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Project Image with gradient overlay */}
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full bg-white object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-spotify">
                    {project.title}
                  </h3>
                  <p className="text-light/80 mb-4 line-clamp-3 font-spotify">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-spotify"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={project.github}
                      className="px-4 py-2 rounded-full bg-primary text-dark font-medium hover:bg-primary/90 transition-colors font-spotify"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                    <a
                      href={project.live}
                      className="px-4 py-2 rounded-full bg-light/10 text-light font-medium hover:bg-light/20 transition-colors font-spotify"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
