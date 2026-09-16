
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import shopora from "../assets/shopora.jpg"
import postly from "../assets/postly.jpg"
import news from "../assets/news.jpg"
const projects = [
  {
    title: "Shopora",
    category: "Full Stack E-Commerce",
    description:
      "A full-stack e-commerce platform with product browsing, categories, search, filtering, authentication, cart, orders, and secure online payments.",
    tech: ["Django", "DRF", "React", "Tailwind CSS", "Stripe"],
    image: shopora,
    github: "https://github.com/mumtahinamaan-collab/EXPS_EcommerceStore",
    live: "https://shopora-omega.vercel.app/",
  },
  {
    title: "Postly",
    category: "Social Media Platform",
    description:
      "A modern social media application with user profiles, posts, comments, likes, follows, connections, messaging, and responsive interfaces.",
    tech: ["React", "JavaScript", "Redux", "Clerk", "Tailwind CSS"],
    image: postly,
    github: "https://github.com/mumtahinamaan-collab/EXPS_Postly",
    live: "https://postly-tau-five.vercel.app/",
  },
  {
    title: "GroundScope",
    category: "AI News Platform",
    description:
      "A full-stack news platform for discovering, searching, saving, and comparing news from multiple sources, with AI-powered clustering and semantic similarity.",
    tech: ["Django", "DRF", "React", "NLP", "Sentence Transformers"],
    image: news,
    github: "https://github.com/mumtahinamaan-collab/NewsScope",
    live: "https://www.loom.com/share/c6802a8df7d647bfb1793cd2a37847b5",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#020b18] text-white py-24 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-14">

          <p className="text-cyan-400 text-lg font-semibold mb-2">
            My Recent Work
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
            Some of the full-stack applications I have built using modern
            technologies, REST APIs, and responsive user interfaces.
          </p>

        </div>


        {/* ================= PROJECT GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {projects.map((project, index) => (
            <article
              key={index}
              className="
                group
                flex flex-col
                rounded-2xl
                overflow-hidden
                bg-[#03101f]
                border border-cyan-500/20
                hover:border-cyan-400/60
                hover:-translate-y-2
                hover:shadow-[0_0_35px_rgba(0,180,255,0.12)]
                transition-all duration-300
              "
            >

              {/* ================= IMAGE ================= */}
              <div className="relative h-52 overflow-hidden bg-[#061827]">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    
                  "
                />

                {/* Dark Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#020b18]
                    via-[#020b18]/30
                    to-transparent
                  "
                />

                {/* Category */}
                <span
                  className="
                    absolute top-4 left-4
                    px-3 py-1.5
                    rounded-full
                    bg-[#020b18]/80
                    border border-cyan-400/30
                    text-cyan-300
                    text-xs font-medium
                    backdrop-blur-sm
                  "
                >
                  {project.category}
                </span>

              </div>


              {/* ================= CONTENT ================= */}
              <div className="p-6 flex flex-col flex-1">

                <h3
                  className="
                    text-2xl font-bold
                    group-hover:text-cyan-400
                    transition-colors duration-300
                  "
                >
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6 mt-3">
                  {project.description}
                </p>


                {/* ================= TECH STACK ================= */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="
                        px-3 py-1.5
                        rounded-full
                        text-xs
                        text-cyan-300
                        bg-cyan-400/10
                        border border-cyan-400/20
                        hover:border-cyan-400/50
                        transition
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>


                {/* ================= BUTTONS ================= */}
                <div className="flex gap-3 mt-7 pt-5 border-t border-gray-800">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      flex items-center justify-center gap-2
                      px-4 py-2.5
                      rounded-lg
                      border border-cyan-500/40
                      text-gray-200
                      text-sm font-semibold
                      hover:bg-cyan-500/10
                      hover:text-cyan-400
                      transition
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      flex items-center justify-center gap-2
                      px-4 py-2.5
                      rounded-lg
                      bg-cyan-500
                      text-white
                      text-sm font-semibold
                      hover:bg-cyan-400
                      transition
                    "
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;

