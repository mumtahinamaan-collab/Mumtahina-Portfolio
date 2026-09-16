import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
    const [isSending, setIsSending] = useState(false);
const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
      setIsSending(true);
  setSent(false);

    emailjs
      .send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
                setIsSending(false);
        setSent(true);

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSent(false);
        }, 2000);
        },
        (error) => {

          console.error("FULL ERROR:", error);

        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#020b18] text-white py-24 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's{" "}
              <span className="text-cyan-400">talk.</span>
            </h2>

            <p className="text-gray-400 my-4 max-w-2xl leading-relaxed">
              Have a project, opportunity, or idea in mind? Feel free to get in
              touch. I'm open to junior full-stack development roles,
              internships, freelance projects, and exciting web development
              opportunities.
            </p>

            <div className="space-y-5">

              {/* Email */}
              <a
                href="mailto:mumtahinamaan@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-xl
                  bg-cyan-400/10 border border-cyan-400/20
                  group-hover:border-cyan-400/60
                  group-hover:bg-cyan-400/15 transition"
                >
                  <FaEnvelope className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Email</p>

                  <p className="text-gray-200 group-hover:text-cyan-400 transition">
                    mumtahinamaan@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mumtahina-maan-a0b2b6389/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-xl
                  bg-cyan-400/10 border border-cyan-400/20
                  group-hover:border-cyan-400/60
                  group-hover:bg-cyan-400/15 transition"
                >
                  <FaLinkedin className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">LinkedIn</p>

                  <p className="text-gray-200 group-hover:text-cyan-400 transition">
                    Mumtahina Naeem
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/mumtahinamaan-collab"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-xl
                  bg-cyan-400/10 border border-cyan-400/20
                  group-hover:border-cyan-400/60
                  group-hover:bg-cyan-400/15 transition"
                >
                  <FaGithub className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">GitHub</p>

                  <p className="text-gray-200 group-hover:text-cyan-400 transition">
                    Mumtahina Naeem
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-cyan-500/10">
              <p className="text-gray-500 text-sm">
                Based in Lahore, Pakistan · Open to Full-Time Roles & Freelance Opportunities in Full Stack Web Development

              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#03101f] border border-cyan-500/20
            rounded-2xl p-6 md:p-8
            shadow-[0_0_30px_rgba(34,211,238,0.05)]"
          >

            {/* Name */}
            <div className="mb-5">
              <label className="block text-sm text-gray-400 mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full bg-[#020b18] border border-cyan-500/20
                rounded-xl px-4 py-3 text-white
                placeholder-gray-600
                focus:outline-none focus:border-cyan-400
                transition"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-sm text-gray-400 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full bg-[#020b18] border border-cyan-500/20
                rounded-xl px-4 py-3 text-white
                placeholder-gray-600
                focus:outline-none focus:border-cyan-400
                transition"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-[#020b18] border border-cyan-500/20
                rounded-xl px-4 py-3 text-white
                placeholder-gray-600
                focus:outline-none focus:border-cyan-400
                transition resize-none"
              />
            </div>

            {/* Button */}
            <button
              disabled={isSending}
              type="submit"
              className="w-full flex items-center justify-center gap-2
              bg-cyan-400 text-[#020b18]
              font-semibold py-3 rounded-xl
              hover:bg-cyan-300
              transition cursor-pointer
              shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            >
              <FaPaperPlane />
                {isSending
    ? "Sending..."
    : sent
    ? "Sent ✓"
    : "Send Message"}
            </button>

            <p className="text-gray-600 text-xs text-center mt-4">
              Your message will be sent directly to my inbox.
            </p>
          </form>
        </div>

        {/* Footer */}
        <div className="border-t border-cyan-500/10 mt-20 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2026 Mumtahina. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;