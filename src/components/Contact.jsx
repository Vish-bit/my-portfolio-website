import React from "react";
import { Linkedin, Github, Mail, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="px-10 pt-10 pb-6 text-center bg-black">
      {/* <h2 className="text-3xl font-bold mb-6 text-white">Contact Info</h2> */}
      <p className="text-gray-400 mb-4">
        Let's connect and build something amazing.
      </p>
      <p className="text-violet-400 mb-6">vishakham2506@gmail.com</p>
      <div className="flex justify-center gap-6 mt-6">
        <a 
          href="https://www.linkedin.com/in/vishakhamore-98399a148"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-violet-800/20 rounded-full text-violet-400 hover:bg-violet-800/30 transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a 
          href="https://github.com/Vish-bit"
          className="p-3 bg-blue-800/20 rounded-full text-blue-400 hover:bg-blue-800/30 transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <a 
          href="#"
          className="p-3 bg-blue-800/20 rounded-full text-blue-400 hover:bg-blue-800/30 transition-colors"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a 
          href="mailto:vishakham2506@gmail.com"
          className="p-3 bg-blue-800/20 rounded-full text-blue-400 hover:bg-blue-800/30 transition-colors"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
