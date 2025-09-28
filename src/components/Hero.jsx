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
          <h2 className="font-bold intro" id="about">
            Hey! I'm <span className="text-primary ">Vishakha</span>
          </h2>
          <h2 className="font-bold intro" id="about">
            A <span className="text-primary">Software Engineer</span>
          </h2>
          <p className="text-xl mt-4">
            <em>
              "When I’m not coding, you’ll find me exploring AI tools, building
              side projects, and leveling up my skills to stay ahead in the tech
              space."
            </em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
