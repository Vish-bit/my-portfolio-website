import React from "react";
import { Linkedin, Github, Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="px-10 pt-8 pb-4 text-center bg-black">
      <a 
        href="mailto:vishakham2506@gmail.com"
        className="text-gray-400 mb-4 hover:text-gray-300 transition-colors"
      >
        Let's connect and build something amazing.
      </a>
      <p className="text-violet-400 mb-6">vishakham2506@gmail.com</p>
      
      <div className="flex justify-center items-center gap-2 mb-6">
        <MapPin className="w-4 h-4 text-gray-400" />
        <span className="text-gray-400 text-sm">Palghar, MH, India</span>
      </div>

      {/* Contact Form */}
      <div className="mb-12">
        <ContactForm />
      </div>
      
      <div className="flex justify-center gap-6 mt-6">
        <a 
          href="https://www.linkedin.com/in/vishakhamore-98399a148"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-blue-800/20 rounded-full text-blue-400 hover:bg-blue-800/30 transition-colors"
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
