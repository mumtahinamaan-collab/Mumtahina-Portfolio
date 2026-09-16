import React from "react";
import { FaPython, FaReact } from "react-icons/fa";
import { SiDjango, SiPostgresql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";


const Hero = () => {
  return (
    <section className="min-h-screen bg-[#020b18] text-white flex items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div className="text-center lg:text-left">

            <p className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-2">
              Hi, I'm
            </p>

            <h1 className="text-6xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-cyan-400">Mumtahina</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mt-5">
              Full Stack Web Developer.I design and build modern web applications using Python, Django, React, and REST APIs — from database and backend logic to responsive frontend and deployment.

            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-2">

<div className="flex flex-wrap items-center gap-4">

  {/* View Projects */}
  <a
    href="#projects"
    className="
      inline-flex items-center justify-center gap-2
      px-7 py-3
      rounded-full
      bg-cyan-500
      hover:bg-cyan-400
      text-white
      font-semibold
      transition duration-300
      shadow-lg shadow-cyan-500/20
    "
  >
    View Projects →
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/mumtahinamaan-collab"
    target="_blank"
    rel="noreferrer"
    className="
      inline-flex items-center justify-center gap-2
      px-7 py-3
      rounded-full
      border border-cyan-500/60
      text-white
      hover:bg-cyan-500/10
      hover:border-cyan-400
      font-semibold
      transition duration-300
    "
  >
    <FaGithub size={18} />
    GitHub
  </a>

</div>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start mt-10">

              <div className="text-center px-5 sm:px-8 border-r border-gray-700">
                <h3 className="text-3xl font-bold text-cyan-400">3+</h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Projects Done
                </p>
              </div>

              <div className="text-center px-5 sm:px-8 border-r border-gray-700">
                <h3 className="text-3xl font-bold text-cyan-400">1+</h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Internship
                </p>
              </div>

              <div className="text-center px-5 sm:px-8">
                <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Dedication
                </p>
              </div>

            </div>
          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">

            {/* Code Window */}
            <div
              className="w-full max-w-[480px] rounded-2xl
              border border-cyan-500/50
              bg-[#03101f]
              shadow-[0_0_30px_rgba(0,180,255,0.15)]
              overflow-hidden"
            >

              {/* Window Header */}
              <div className="h-11 border-b border-cyan-500/20 flex items-center px-4">

                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>

                <div className="ml-5 text-xs text-gray-400 bg-[#0b1a2b] px-4 py-1.5 rounded-md">
                  Mumtahina.py
                </div>

              </div>


              {/* Code */}
              <div className="p-5 sm:p-7 font-mono text-xs sm:text-sm leading-7 overflow-x-auto">

                <p>
                  <span className="text-pink-400">class</span>{" "}
                  <span className="text-cyan-400">Developer</span>:
                </p>

                <p className="pl-4">
                  name ={" "}
                  <span className="text-green-400">
                    "Mumtahina"
                  </span>
                </p>

                <p className="pl-4">
                  role ={" "}
                  <span className="text-green-400">
                    "Full Stack Developer"
                  </span>
                </p>

                <p className="pl-4">stack = [</p>

                <p className="pl-8 text-green-400">
                  "Python",
                </p>

                <p className="pl-8 text-green-400">
                  "Django",
                </p>

                <p className="pl-8 text-green-400">
                  "React",
                </p>

                <p className="pl-8 text-green-400">
                  "postgreSQL"
                </p>

                <p className="pl-4">]</p>

                <p className="pl-4">
                  status ={" "}
                  <span className="text-green-400">
                    "Open to opportunities"
                  </span>
                </p>

                <p className="mt-2 text-gray-500">
                  # Build. Learn. Grow.
                </p>

              </div>
            </div>


            {/* Technology Icons */}
            <div className="flex sm:flex-col flex-row gap-5 sm:gap-6 items-center">

              <div className="text-[#3776AB] text-4xl sm:text-5xl hover:scale-110 transition">
                <FaPython />
              </div>

              <div className="text-[#44B78B] text-4xl sm:text-5xl hover:scale-110 transition">
                <SiDjango />
              </div>

              <div className="text-[#61DAFB] text-4xl sm:text-5xl hover:scale-110 transition">
                <FaReact />
              </div>

              <div className="text-[#336791] text-4xl sm:text-5xl hover:scale-110 transition">
                <SiPostgresql />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;