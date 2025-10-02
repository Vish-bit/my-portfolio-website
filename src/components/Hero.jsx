import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full"
    >
      <div className="home-bg flex flex items-center justify-evenly text-center px-6 mx-12">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="src\assets\avatar-vishakha.png"
            alt="avatar"
            className="w-70 h-70 avatar-glow bg-white border border-purple-300 rounded-full object-contain"
          />
        </div>
        <div className="flex flex-col items-start justify-center text-left md:w-1/2">
          <h2 className="font-semibold about name">
            Hello, I'm Vishakha.
          </h2>
          <h2 className="font-bold about role">
            A Software Engineer, Frontend Developer, UI Developer
          </h2>
          <p className="text-xl mt-4">
            <em>
              
            </em>
          </p>
          <div className="flex items-center gap-8 mt-8 justify-between">
            <button className="btn primary-btn text-xl">Download CV</button>
            <a href="#contact"><button className="btn secondary-btn text-xl">Contact Me</button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
