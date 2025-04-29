import React from "react";
import { motion } from "framer-motion"; // ✅ required for animations
import { FaLinkedin, FaGithub, FaTwitter,  } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiNetlify } from "react-icons/si"; 
import BankingScreen from "../../assets/project/Bankingscreen.jpeg";
import Forest from "../../assets/project/Forest.jpeg"
import Website from "../../assets/project/Website.jpeg"






export default function Portfolio() {
  return (
    <div className="min-h-screen from-indigo-900 via-purple-800 bg-slate-900 text-white font-sans">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black bg-opacity-70 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-4xl font-bold text-white-400">Harsh</h1>
          <nav className="flex  space-x-6">
            {['Home', 'Project', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className=" text-xl text-white-200 hover:text-blue-900"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section className="h-[85vh] flex items-center justify-center text-center px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div>
          <motion.h1
            className="text-2xl md:text-xl font-extrabold mb-4 text-white-300 drop-shadow"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hey, I'm Harsh 👋
          </motion.h1>
          <motion.p
            className="text-6xl md:text-7xl text-white leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I enjoy <span className="text-blue-400"> building</span> and <span className="text-blue-400">designing</span> <br />
            for the web.
          </motion.p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-slate-600 hover:bg-blue-500 text-blue-400 px-6 py-2 rounded-xl transition shadow">
              Tell Me More
            </button>
            <a
              href="/Harsh_Resume.pdf"
              className="bg-white hover:bg-gray-100 text-purple-600 px-6 py-2 rounded-xl transition shadow"
            >
              Get Resume
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="project" className="py-20 px-6 bg-slate-900 text-white">
  <h2 className="text-4xl font-bold mb-20">Here are a few of my favorite projects.</h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {[
      {
        image:BankingScreen,
        title: "Banking Management System",
        description:
          "An interactive and user-friendly web application that simulates the core functionalities of a real-world banking system. ",
        github: "https://github.com/HarshChhillar/Banking-Mangement-System",
        netlify: "https://harshbank.netlify.app/",
        skills: ["Html", "Css", "JavaScript", "JSON", "LocalStorage"],
      },
      {
        image: Forest,
        title: "FRI System",
        description:
          "The FRI System is a structured and informative website created for the Forest Research Institute. It includes sections like institute overview, research departments, events, and contact information..",
        github: "https://github.com/HarshChhillar/FRI-Project.git",
        netlify: "https://statuesque-biscochitos-d345fa.netlify.app/",
        skills: ["Html", "Css", "JavaScript", "JSON", "LocalStorage"],
      },
      {
        image: Website,
        title: "Mauli Cabs Website ",
        description:
          "Mauli Cabs is a modern and dynamic web platform designed for booking taxis with ease. The site provides users with detailed taxi fare rates across various categories and trip types such as one-way, round-trip, and hourly rentals..",
        github: "https://github.com/Github-codes24/mauli-website.git",
        netlify: "https://mauli-website.netlify.app/",
        skills: ["HTML5", "Tailwind CSS",  "REACT", "ReactRouter" ],
      },
    ].map((project, index) => (
      <div key={index}>
        {/* Image inside a border */}
        <div className="border-2 border-white rounded-xl p-2 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg w-full h-48 object-cover"
          />
        </div>

        {/* Title and icons row */}
        <div className="mt-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <div className="flex gap-3 text-white text-lg">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaGithub />
            </a>
            <a
              href={project.netlify}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <SiNetlify />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="mt-2 text-gray-300 text-sm">{project.description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-900 border text-white text-xs px-3 py-1 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>



      {/* Skills Section */}
      <section className="py-20 px-6 bg-slate-900">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
    <div className="text-left mb-10 md:mb-0 md:w-1/2">
      <h3 className="text-5xl font-bold text-white-300 mb-4">I got the experience.</h3>
      <p className="text-5xl text-white-300">Here is my toolbelt for success.</p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:w-1/2 text-center">
      <div className="bg-slate-800 p-4 rounded-xl flex flex-col items-center">
        <FaHtml5 className="text-4xl text-orange-500 mb-2" />
        <span>HTML5</span>
      </div>
      <div className="bg-slate-800 p-4 rounded-xl flex flex-col items-center">
        <FaCss3Alt className="text-4xl text-blue-500 mb-2" />
        <span>CSS3</span>
      </div>
      <div className="bg-slate-800 p-4 rounded-xl flex flex-col items-center">
        <FaJs className="text-4xl text-yellow-400 mb-2" />
        <span>JavaScript</span>
      </div>
      <div className="bg-slate-800 p-4 rounded-xl flex flex-col items-center">
        <FaReact className="text-4xl text-cyan-400 mb-2" />
        <span>React</span>
      </div>
      
      <div className="bg-slate-800 p-4 rounded-xl flex flex-col items-center">
        <FaGitAlt className="text-4xl text-red-500 mb-2" />
        <span>Git</span>
      </div>
    </div>
  </div>
</section>


      {/* Interested Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold text-white-300 mb-6">Interested in Working Together?</h2>
      
        <button
         className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-full text-white">Get Resume</button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <form className="space-y-4">
            <h3 className="text-3xl font-bold text-white-300 mb-4">Send a Message</h3>
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-white-800 text-white" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-white-800 text-white" />
            <input type="text" placeholder="Subject" className="w-full p-3 rounded bg-white-800 text-white" />
            <textarea placeholder="Message" className="w-full p-3 rounded bg-white-800 text-white h-32" />
            <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-full">Send Message</button>
          </form>

          <div className="text-white-300">
            <h2 className="text-3xl font-bold text-white-300 mb-6">Get In Touch</h2>
            <p className="mb-4">Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you. Simply fill the form and send me an email.</p>
            <div className="flex  space-x-4 mt-6 text-2xl">
              <a href="https://www.linkedin.com/in/harsh-chaudhary-20981a294/" className="hover:text-blue-900"><FaLinkedin /></a>
              <a href="https://github.com/HarshChhillar" className="hover:text-blue-900"><FaGithub /></a>
              <a href="#" className="hover:text-blue-900"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black bg-opacity-40 py-6 text-center text-sm text-purple-300">
        © {new Date().getFullYear()} Harsh Chaudhary. All rights reserved.
      </footer>
    </div>
  );
}