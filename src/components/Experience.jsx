import React from 'react'

const Experience = () => {
    const experiences = [
    { title: "Software Engineer Intern", desc: "Wishtree Technologies" },
    { title: "Data Science and Machine Learning Intern", desc: "Mobile payments & security" },
    { title: "Software Engineer", desc: "Wishtree Technologies" },
  ];

  return (
    <section id="experience" className="px-10 py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Work Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, i) => (
          <div key={i} className="bg-gradient-to-r from-slate-900 to-blue-950 rounded-2xl p-6 shadow-lg border border-slate-600 opacity-85">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-400 mt-2">{exp.desc}</p>
            <button className="mt-4 text-primary">Learn More →</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience