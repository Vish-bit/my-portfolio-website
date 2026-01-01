import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Engineering (BE) – Information Technology",
      school: "Savitribai Phule Pune University",
      period: "Jul 2021",
      cgpa: "CGPA: 7.2/10",
      type: "university",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      school: "Annasaheb Vartak College of Science",
      location: "Vasai, Palghar, MH, India",
      period: "2016",
      type: "college",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      school: "Twinkle Star English High School",
      location: "Palghar, MH, India",
      period: "2014",
      type: "school",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateY: 90
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            variants={floatingAnimation}
            animate="animate"
          >
            <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-violet-400" />
            <span className="text-violet-400 text-base sm:text-lg font-semibold">EDUCATIONAL JOURNEY</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500 bg-clip-text text-transparent"
          >
            Education
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            My academic foundation and educational background that shaped my technical journey
          </motion.p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          className="space-y-6 sm:space-y-8 lg:space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="max-w-4xl mx-auto"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="relative bg-gradient-to-br from-blue-800 to-violet-800 p-0.5 sm:p-0.5 rounded-l shadow-2xl cursor-pointer transform transition-all duration-300"
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="bg-slate-900 rounded-l p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 bg-gradient-to-r from-blue-800 to-violet-800 rounded-xl text-white"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {edu.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <p className="text-blue-300 font-medium text-lg mb-2">{edu.school}</p>
                        {edu.location && (
                          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        {edu.cgpa && (
                          <div className="mt-2">
                            <span className="px-3 py-1 bg-gradient-to-r from-blue-800 to-violet-800 rounded-full text-white text-sm font-medium">
                              {edu.cgpa}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
