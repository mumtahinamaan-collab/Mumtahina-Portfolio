import React from "react";
import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiDjango,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiSqlite,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";

const skills = [
  {
    title: "Languages & Frontend",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Django", icon: <SiDjango /> },
      { name: "Django REST Framework", icon: <SiDjango /> },
      { name: "REST APIs", icon: "⚡" },
      { name: "JWT Authentication", icon: "🔐" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "Django ORM", icon: "◉" },
      { name: "Database Design", icon: "▣" },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "VS Code", icon: "⌘" },
    ],
  },
  {
    title: "Deployment",
    skills: [
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
      { name: "Environment Variables", icon: "⚙" },
      { name: "API Integration", icon: "↔" },
    ],
  },
  {
    title: "AI & Development",
    skills: [
      { name: "Sentence Transformers", icon: "AI" },
      { name: "NLP", icon: "N" },
      { name: "Semantic Similarity", icon: "∼" },
      { name: "Responsive Design", icon: "▤" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#020b18] text-white py-20 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-cyan-400 text-lg sm:text-xl font-semibold mb-2">
            What I Work With
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Technologies and tools I use to build modern, scalable and
            user-friendly web applications.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((category, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-cyan-500/20
              bg-[#03101f] p-6
              hover:border-cyan-400/60
              hover:shadow-[0_0_30px_rgba(0,180,255,0.12)]
              transition-all duration-300"
            >

              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6">

                <div className="w-2 h-8 bg-cyan-400 rounded-full"></div>

                <h3 className="text-xl font-semibold">
                  {category.title}
                </h3>

              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-3">

                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2
                    rounded-xl border border-gray-700/60
                    bg-[#071827]
                    px-3 py-3
                    text-sm text-gray-300
                    hover:border-cyan-400/50
                    hover:text-cyan-400
                    transition-all duration-300"
                  >

                    <span className="text-cyan-400 text-lg">
                      {skill.icon}
                    </span>

                    <span>
                      {skill.name}
                    </span>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;