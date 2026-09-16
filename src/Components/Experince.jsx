import React from "react";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Full Stack Web Development Intern",
    company: "EXPS Nexus",
    duration: "1 Month",
    type: "Internship",
    description:
      "Worked on full-stack web development projects using Django REST Framework and React. Developed responsive frontend interfaces, REST APIs, authentication, database functionality, and integrated frontend with backend services.",
    technologies: [
      "Python",
      "Django",
      "DRF",
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#020b18] text-white py-24 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            My Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Work <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            My professional experience, internships, and hands-on work in
            web development and technology.
          </p>
        </div>

        {/* Experience */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-cyan-500/20 md:-translate-x-1/2"></div>

          <div className="space-y-12">

            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* Timeline Dot */}
                <div className="absolute left-5 md:left-1/2 top-8 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#020b18] shadow-[0_0_15px_rgba(34,211,238,0.7)] -translate-x-1/2 z-10"></div>

                {/* Card */}
                <div className="ml-12 md:ml-0 md:w-[45%]">
                  <div className="bg-[#03101f] border border-cyan-500/20 hover:border-cyan-400/60 rounded-2xl p-6 shadow-[0_0_35px_rgba(0,180,255,0.08)] hover:shadow-[0_0_35px_rgba(0,180,255,0.15)] transition-all duration-300 hover:-translate-y-1">

                    {/* Icon + Type */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                        <FaBriefcase className="text-cyan-400" />
                      </div>

                      <span className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                        {experience.type}
                      </span>
                    </div>

                    {/* Role */}
                    <h3 className="text-xl font-bold mb-1">
                      {experience.role}
                    </h3>

                    <p className="text-cyan-400 font-medium mb-3">
                      {experience.company}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-5">
                      <FaCalendarAlt className="text-cyan-500" />
                      {experience.duration}
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-7 text-sm">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-3 py-1.5 rounded-lg bg-[#061827] text-gray-300 border border-cyan-500/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;