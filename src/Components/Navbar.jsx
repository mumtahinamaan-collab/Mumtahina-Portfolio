
import React, { useState } from "react";
import { Download, Menu, X } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    setMobileOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className="
          fixed top-0 left-0 w-full h-16
          bg-[#020b18]/95 backdrop-blur-md
          border-b border-cyan-500/10
          flex items-center justify-between
          px-5 md:px-10
          z-50
        "
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3"
        >
          <div
            className="
              w-9 h-9 rounded-full
              bg-cyan-400
              flex items-center justify-center
              text-[#020b18]
              font-bold
              shadow-[0_0_15px_rgba(34,211,238,0.25)]
            "
          >
            M
          </div>

          <h4 className="text-sm font-semibold tracking-[0.15em] text-white">
            MUMTAHINA
          </h4>
        </button>

        {/* Desktop Menu */}
        <div
          className="
            hidden lg:flex
            items-center gap-7
            absolute left-1/2
            -translate-x-1/2
          "
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
                text-sm font-medium
                text-gray-400
                pb-2
                border-b-2 border-transparent
                hover:text-cyan-400
                hover:border-cyan-400
                transition-all duration-300
              "
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Resume */}
          <a
            href="/MumtahinaCV.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              hidden md:flex
              items-center gap-2
              px-4 py-2
              rounded-lg
              border border-cyan-400/40
              text-cyan-400
              text-sm font-medium
              hover:bg-cyan-400/10
              hover:border-cyan-400
              transition-all duration-300
            "
          >
            <Download size={16} />
            Resume
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              lg:hidden
              w-10 h-10
              rounded-lg
              bg-[#03101f]
              border border-cyan-500/20
              text-cyan-400
              flex items-center justify-center
              hover:border-cyan-400/50
              transition
            "
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="
            fixed top-16 left-0
            w-full
            bg-[#020b18]
            border-b border-cyan-500/10
            z-40
            lg:hidden
            p-4
          "
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="
                  text-left
                  px-4 py-3
                  rounded-lg
                  text-sm font-medium
                  text-gray-400
                  border-b-2 border-transparent
                  hover:text-cyan-400
                  hover:border-cyan-400
                  transition-all duration-300
                "
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center justify-center gap-2
                px-4 py-3 mt-2
                rounded-lg
                border border-cyan-400/30
                text-cyan-400
                text-sm font-medium
                hover:bg-cyan-400/10
                transition-all duration-300
              "
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
