import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="px-10 py-20">
      <h2 className="text-3xl font-bold mb-10">Featured Project</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="src\assets\project.png"
            alt="project"
            className="rounded-xl shadow-lg md:w-1/2"
          />
          <div>
            <h3 className="text-xl font-semibold">Example Project</h3>
            <p className="text-gray-400 mt-3">
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, and detailed audio stats.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="src\assets\project.png"
            alt="project"
            className="rounded-xl shadow-lg md:w-1/2"
          />
          <div>
            <h3 className="text-xl font-semibold">Example Project</h3>
            <p className="text-gray-400 mt-3">
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, and detailed audio stats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
