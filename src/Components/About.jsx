import React from "react";
import { FaCode, FaServer, FaDatabase, FaLaptopCode } from "react-icons/fa";

const About = () => {
  const skills = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      text: "React.js, JavaScript, Tailwind CSS and responsive UI development.",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      text: "Python, Django, Django REST Framework and REST API development.",
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      text: "SQLite, PostgreSQL, Django ORM and database management.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Full Stack",
      text: "Building complete web applications by connecting frontend, backend and APIs.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#020b18] text-white py-24 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Who <span className="text-cyan-400">I Am</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* About Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Full Stack Web Developer
            </h3>

            <p className="text-gray-400 leading-8 mb-5">
              I'm a Software Engineering graduate and a passionate Full Stack
              Web Developer focused on building modern, responsive, and
              user-friendly web applications.
            </p>

            <p className="text-gray-400 leading-8 mb-5">
              I work with Python, Django, Django REST Framework, React,
              JavaScript, and Tailwind CSS. I enjoy turning ideas into
              complete web applications and connecting frontend interfaces
              with powerful backend APIs.
            </p>

            <p className="text-gray-400 leading-8">
              I have hands-on experience building e-commerce, social media,
              and AI-powered news applications, with a strong interest in
              learning new technologies and improving my development skills.
            </p>

            {/* Small Info */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="px-5 py-3 rounded-xl bg-[#03101f] border border-cyan-500/20">
                <span className="text-cyan-400 font-bold">BS</span>
                <span className="text-gray-400 ml-2">
                  Software Engineering
                </span>
              </div>

              <div className="px-5 py-3 rounded-xl bg-[#03101f] border border-cyan-500/20">
                <span className="text-cyan-400 font-bold">Full Stack</span>
                <span className="text-gray-400 ml-2">Developer</span>
              </div>
            </div>
          </div>

          {/* Skill Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#03101f] border border-cyan-500/20 hover:border-cyan-400/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_30px_rgba(0,180,255,0.06)]"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl mb-5">
                  {skill.icon}
                </div>

                <h4 className="text-lg font-semibold mb-3">
                  {skill.title}
                </h4>

                <p className="text-gray-400 text-sm leading-6">
                  {skill.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;