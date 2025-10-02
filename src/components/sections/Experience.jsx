import React from "react";
import { Reveal } from "../utilities/Reveal";

const Experience = () => {
  const experiences = [
    {
      title: "Marketing Specialist - Operations",
      company: "Contec Inc",
      location: "Spartanburg, SC",
      date: "Feb 2025 – Sept 2025",
      achievements: [
        "Administrator for ContecYou, Contec's learning management system designed to certify compounding pharamcies in specific clearnoom trainings required by USP regulations",
        "Led the management of their LMS, CRM, and Sales Enablement support inboxes, managing platform operations, resolving technical issues, and coordinating user support and training",
        "Sales Enablement platform (Highspot) super admin for the company, leading sales rep trainings and maintaining governance across the platform",
        "Managed Microsoft 365 content and coordinated training sessions for platform use",
      ],
    },
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
        "Managed a $5 million B2B sales territory, specializing in non-woven and spinning carding equipment",
        "Delivered comprehensive technical evaluations to optimize client equipment and processes",
        "Simplified complex technical solutions into practical, easy-to-follow steps, fostering trust and strengthening client relationships",
      ],
    },
    {
      title: "Process Improvement Engineer",
      company: "Milliken",
      location: "Gaffney, SC",

      date: "Dec 2021 – Dec 2023",
      achievements: [
        "Led process improvement projects at the Limestone Plant, driving efficiency across multiple manufacturing operations (blending, carding, spinning, twisting, and weaving)",
        "Completed Six Sigma Green Belt training and applied statistical software to analyze quality and process data",
        "Improved quality control procedures and optimized workflows, resulting in measurable cost savings and enhanced reliability",
      ],
    },
    {
      title: "Textile Production Manager",
      company: "Inman Mills",
      location: "Inman, SC",

      date: "Aug 2018 – Nov 2021",
      achievements: [
        "Managed 5 departments with a team of ~40 employees, driving production efficiency and quality",
        "Oversaw operations across Blending, Carding, Drawing, Jet Spinning, and Vortex Spinning",
        "Supported production of specialized materials, including Kevlar for the U.S. military and fire-resistant mattress covers, ensuring compliance with strict safety and durability standards.",
      ],
    },
  ];
  return (
    <section id="experience" className="min-h-screen py-20 bg-dark text-light font-spotify">
      <h2 className="text-4xl md:text-6xl font-bold text-primary  mt-12 mb-12 text-center font-spotify">
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
                  <p className="text-xl text-light/90 font-spotify">
                    {exp.company} - {exp.location}
                  </p>
                  <p className="text-light/60 text-sm font-spotify">
                    {exp.date}
                  </p>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-white font-spotify">
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
