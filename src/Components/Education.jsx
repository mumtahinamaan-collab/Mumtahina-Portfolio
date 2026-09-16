import React from "react";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "BS Software Engineering",
      institute: "Virtual University of Pakistan",
      duration: "2021 - 2025",
      description:
        "Studied software engineering with a focus on programming, web development, databases, software design, and application development.",
    },
    {
      degree: "FSc Pre-Engineering",
      institute: "Degree College for Women, Warburton",
      duration: "2019-2021",
      description:
        "Studied Mathematics, Physics, Chemistry and foundational subjects for engineering.",
    },
  ];

  return (
    <section
      id="education"
      className="bg-[#020b18] text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm uppercase tracking-widest mb-2">
            My Background
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Education
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Education Cards */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-cyan-500/30"></div>

          <div className="space-y-10">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* Timeline Dot */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-[#020b18] shadow-[0_0_15px_rgba(34,211,238,0.7)]"></div>

                {/* Card */}
                <div className="ml-12 md:ml-0 md:w-[45%] bg-[#03101f] border border-cyan-500/20 rounded-2xl p-6 shadow-[0_0_35px_rgba(0,180,255,0.08)] hover:border-cyan-400/60 transition duration-300">

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 text-xl">
                      <FaGraduationCap />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">
                        {item.degree}
                      </h3>

                      <p className="text-cyan-400 text-sm">
                        {item.institute}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <FaCalendarAlt className="text-cyan-400" />
                    {item.duration}
                  </div>

                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;