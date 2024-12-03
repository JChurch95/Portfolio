import React from "react";
import { Reveal } from "../utilities/Reveal";

const Experience = () => {
  const experiences = [
    {
      title: "Student",
      company: "Carolina Code School",
      location: "Greenville, SC",
      date: "Sep 2024 – Nov 2024",
      achievements: [
        "Completed 444+ hour Full Stack Web Development program",
        "Developed proficiency in Python, RESTful API, CSS, HTML, REACT, JavaScript, SQL, and PostgreSQL",
        "Built and deployed full-stack applications that culminated in presenting a capstone project during Demo Day",
      ],
    },
    {
      title: "Technical Sales Representative",
      company: "Graf Metallic",
      location: "Spartanburg, SC",
      date: "Sep 2023 – Sep 2024",
      achievements: [
        "Managed a $5 million B2B sales territory for non-woven and spinning carding equipment",
        "Conducted in-depth equipment and process evaluations to ensure optimal performance for clients",
        "Strengthened customer relationships by providing tailored solutions and consistent technical support",
      ],
    },
    {
      title: "Process Improvement Engineer",
      company: "Milliken",
      location: "Gaffney, SC",

      date: "Dec 2021 – Dec 2023",
      achievements: [
        "Led the One Drop Project, achieving a 35% increase in package sizes while maintaining quality standards",
        "One Drop Project resulted in saving over 50K resulting in earning a Six Sigma Green Belt certification",
        "Refined quality control procedures across 7+ manufacturing processes",
      ],
    },
    {
      title: "Textile Production Manager",
      company: "Inman Mills",
      location: "Inman, SC",

      date: "Aug 2018 – Nov 2021",
      achievements: [
        "Served as Textile Production Manager, leading and motivating a team of 80 employees across five departments",
        "Oversaw the end to end production of raw materials to finished textile product in Blending, Carding, Spinning, etc.",
        "Led process improvement initiatives, achieving measurable outcomes and delivering impactful results",
        "Contributed to the production of Kevlar for the United States military",
      ],
    },
  ];
  return (
    <section id="experience" className="min-h-screen py-20 bg-dark text-light font-spotify">
      <h2 className="text-4xl md:text-6xl font-bold text-primary mb-12 text-center font-spotify">
        Experience
      </h2>
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 border-primary pl-8 relative"
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
              <Reveal>
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-primary font-spotify">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-light/80 font-spotify">
                    {exp.company} - {exp.location}
                  </p>
                  <p className="text-light/60 text-sm font-spotify">
                    {exp.date}
                  </p>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-light/90 font-spotify">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
