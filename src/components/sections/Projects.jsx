import React from 'react'
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
    {
      title: "Rabbit Route",
      description: "An AI itinerary generator that makes trip planning a breeze! Simply input your destination and preferences, and watch as it crafts personalized day-by-day itineraries featuring carefully selected restaurants, activities, and accommodations.",
      tech: ["React", "OpenAI", "Tailwind CSS", "Supabase", "FastAPI", "SQLModel", "PostgreSQL"],
      github: "https://github.com/JChurch95/Trip_Planner_Frontend",
      live: "https://rabbitroute.netlify.app/",
      image: "/placeholder/500/300"
    },
    {
      title: "Mall Rats Skate Shop",
      description: "An e-commerce skate shop bringing the heart of skate culture right to your screen! Features ratings, product photos, and a slick dark interface that feels as smooth as a freshly waxed ledge.",
      tech: ["React", "CSS Modules", "Supabase", "FastAPI", "SQLModel", "PostgreSQL", "JWT"],
      github: "https://github.com/yourusername/project",
      live: "https://project-demo.com",
      image: "/placeholder/500/300"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-black/50 -z-10" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 -z-10" />

      <motion.div 
        className="max-w-6xl mx-auto px-6"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-light mb-16 text-center">
          <span className="text-primary">&lt;</span>
          Featured Projects
          <span className="text-primary">/&gt;</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-dark/80 rounded-xl overflow-hidden border border-primary/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Project Image with gradient overlay */}
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/90 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-light/80 mb-4 line-clamp-3">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <a 
                    href={project.github}
                    className="px-4 py-2 rounded-full bg-primary text-dark font-medium hover:bg-primary/90 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                  <a 
                    href={project.live}
                    className="px-4 py-2 rounded-full bg-light/10 text-light font-medium hover:bg-light/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects