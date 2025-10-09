import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="px-10 pt-10 pb-6 text-center bg-zinc-800">
      <h2 className="text-3xl font-bold mb-6">Contact Info</h2>
      <p className="text-gray-400 mb-4">
        Let’s connect and build something amazing.
      </p>
      <p className="text-primary">vishakham2506@gmail.com</p>
      <div className="flex justify-center gap-6 mt-6">
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-github"></i>
        </a>
        <a href="#">
          <i className="fab fa-google"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
