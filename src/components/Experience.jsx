import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Calendar, MapPin, ExternalLink, ChevronDown, Briefcase, Award, TrendingUp, Code, Database, Globe, Zap, Users, Target, Rocket, Star, Clock, ArrowRight } from "lucide-react";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const experiences = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "YatriBiz Pvt Ltd",
      location: "Mumbai",
      period: "Nov 2025 - Present",
      type: "full-time",
      level: "senior",
      startDate: "2025",
      endDate: "Present",
      desc: [
        "Worked on scalable corporate transportation and booking platforms, focusing on performance, usability, and state management.",
        "Fixed critical bugs and optimized existing code to improve application stability, performance, and user experience.",
        "Implemented live trip tracking using Google Maps integration, enabling real-time location updates.",
        "Developed and enhanced new features for booking workflows, dashboards, and user management modules.",
        "Initiated frontend development for a new Online Flights & Hotels Booking system, contributing to core UI architecture and reusable components."
      ],
      technologies: ["React.js", "TypeScript", "Zustand", "Tailwind CSS", "Google Maps API"],
      achievements: [
        "Improved application performance by 40%",
        "Successfully implemented real-time tracking system",
        "Led frontend architecture for new booking platform"
      ],
      projects: [
        {
          name: "Corporate Cabs - Online Booking Platform",
          tech: ["React.js", "TypeScript", "Zustand", "Tailwind CSS"],
          description: "Fixed critical bugs and optimized existing code to improve application stability, performance, and user experience. Implemented live trip tracking using Google Maps integration."
        },
        {
          name: "Online Flights & Hotels Booking System",
          tech: ["React.js", "TypeScript", "Tailwind CSS"],
          description: "Initiated frontend development for new booking system, contributing to core UI architecture and reusable components."
        }
      ],
      color: "from-blue-800 to-violet-800",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Wishtree Technologies",
      location: "Pune, MH",
      period: "Apr 2022 - Jul 2025",
      type: "full-time",
      level: "mid",
      startDate: "2022",
      endDate: "2025",
      desc: [
        "Designed and developed scalable, responsive web applications using React.js, JavaScript, HTML, CSS, and TypeScript, delivering high-quality UI/UX aligned with client requirements.",
        "Enhanced UI/UX in WordPress, Flutter Web, and enterprise dashboard applications, optimizing for performance, accessibility, and responsiveness.",
        "Built modular and reusable React components to improve performance, maintainability, and consistency across multiple projects.",
        "Integrated RESTful APIs and collaborated on GraphQL-based services, ensuring seamless data exchange between frontend and backend systems.",
        "Contributed to system design discussions, following Agile methodologies, CI/CD workflows, and version control practices with Git/GitHub."
      ],
      technologies: ["React.js", "TypeScript", "Redux", "Tailwind CSS", "WordPress", "Flutter Web"],
      achievements: [
        "Led 3 major project deliveries",
        "Mentored 2 junior developers",
        "Improved application performance by 35%"
      ],
      projects: [
        {
          name: "Enterprise Dashboard Platform",
          tech: ["React.js", "TypeScript", "Redux", "Tailwind CSS"],
          description: "Built role-based dashboards with optimized performance and API-driven data visualization."
        },
        {
          name: "E-commerce Store",
          tech: ["React.js", "Tailwind CSS"],
          description: "Developed secure checkout flows and managed client-side state efficiently."
        }
      ],
      color: "from-violet-800 to-blue-900",
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Data Science and Machine Learning Intern",
      company: "Gilbert Research Center",
      location: "",
      period: "Oct 2024 - Jan 2025",
      type: "internship",
      level: "entry",
      startDate: "2024",
      endDate: "2024",
      desc: [
        "Completed a 3-months internship focused on core concepts of Data Science and Machine Learning",
        "Gained hands-on experience with data preprocessing, model development, and performance evaluation using Python and industry-standard ML libraries."
      ],
      technologies: ["Python", "Machine Learning", "Data Science", "Data Preprocessing", "Model Development"],
      achievements: [
        "Completed intensive ML internship",
        "Developed predictive models",
        "Mastered data preprocessing techniques"
      ],
      color: "from-violet-900 to-blue-950",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Software Engineer Intern",
      company: "Wishtree Technologies LLP",
      location: "Pune, MH",
      period: "Jan 2022 - Apr 2022",
      type: "internship",
      level: "entry",
      startDate: "2021",
      endDate: "2021",
      desc: [
        "In 3-months internship Built frontend layouts using HTML, CSS, Bootstrap, and React.js",
        "Integrated backend logic with Node.js and Express.js",
        "Connected MongoDB collections and performed CRUD operations",
        "Explored Git, Visual Studio Code, and asynchronous JavaScript."
      ],
      technologies: ["HTML", "CSS", "Bootstrap", "React.js", "Node.js", "Express.js", "MongoDB"],
      achievements: [
        "Completed 3-month internship successfully",
        "Built responsive web applications",
        "Gained full-stack development experience"
      ],
      color: "from-blue-900 to-violet-900",
      icon: <Database className="w-6 h-6" />
    },
  ];

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 30]);

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

  const glowAnimation = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Main Content */}
      <motion.div
        className="container mx-auto"
      >
        {/* Section Header */}
        <motion.div
          style={{ y: textY }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            className="inline-flex items-center gap-2 mb-4"
          >
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-violet-400" />
            <span className="text-violet-400 text-base sm:text-lg font-semibold">CAREER JOURNEY</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            id="about"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500 bg-clip-text text-transparent"
          >
            Work Experience
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            My professional journey through software development, from internships to full-time roles
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Timeline Line */}
          <motion.div
            className="absolute left-6 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-0.5 sm:w-1 bg-gradient-to-b from-blue-800 to-violet-800 rounded-full"
            style={{
              height: "100%",
              top: "10px",
              transformOrigin: "top",
              scaleY: useSpring(scrollYProgress, { stiffness: 350, damping: 50 })
            }}
            variants={glowAnimation}
            animate="animate"
          />

          {/* Experience Cards */}
          <div className="relative space-y-16 sm:space-y-24 lg:space-y-32">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                variants={itemVariants}
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full border-4 border-violet-600 z-20"
                  whileHover={{ scale: 1.5 }}
                  variants={glowAnimation}
                  animate="animate"
                >
                  <motion.div
                    className="w-full h-full bg-gradient-to-r from-blue-800 to-violet-800 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Card */}
                <motion.div
                  className={`w-full sm:w-5/6 lg:w-1/2 ${index % 2 === 0 ? 'sm:pr-8 lg:pr-12' : 'sm:pl-8 lg:pl-12'}`}
                  variants={cardVariants}
                  whileHover="hover"
                  onClick={() => setSelectedExperience(selectedExperience?.id === exp.id ? null : exp)}
                  layoutId={`experience-card-${exp.id}`}
                >
                  <motion.div
                    className={`relative bg-gradient-to-br ${exp.color} p-0.5 sm:p-0.5 rounded-xl shadow-2xl cursor-pointer transform transition-all duration-300`}
                    whileHover={{
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <div className="bg-slate-900 rounded-xl p-4 sm:p-6 lg:p-8">
                      {/* Card Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 sm:mb-6 gap-4">
                        <div className="flex items-center items-start gap-3">
                          <motion.div
                            className={`p-2 sm:p-3 bg-gradient-to-r ${exp.color} rounded-xl text-white`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            {exp.icon}
                          </motion.div>
                          <div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{exp.title}</h3>
                            <p className="text-blue-300 font-medium text-sm sm:text-base">{exp.company}</p>
                            {exp.location && (
                              <div className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm mt-1">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                                {exp.location}
                              </div>
                            )}
                          </div>
                        </div>

                        <motion.div
                          className="flex flex-col items-start sm:items-end pl-3 sm:pl-0 gap-2"
                          animate={{
                            opacity: hoveredCard === exp.id ? 1 : 0.7
                          }}
                        >
                          <span className="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-blue-800 to-violet-800 rounded-full text-white text-xs sm:text-sm font-medium">
                            {exp.type}
                          </span>
                          <div className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm min-w-36">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                            {exp.period}
                          </div>
                        </motion.div>
                      </div>

                      {/* Description */}
                      <div className="mb-4 sm:mb-6">
                        <ul className="space-y-2">
                          {exp.desc.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-2 text-gray-300 text-sm sm:text-base"
                            >
                              <span className="text-blue-400 mt-1">•</span>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Expandable Content */}
                      <AnimatePresence mode="wait">
                        {selectedExperience?.id === exp.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            {/* Technologies */}
                            <div className="mb-4 sm:mb-6">
                              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                                Technologies Used
                              </h4>
                              <div className="flex flex-wrap gap-1 sm:gap-2">
                                {exp.technologies.map((tech, i) => (
                                  <motion.span
                                    key={i}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: i * 0.1, type: "spring" }}
                                    className="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-blue-800 to-violet-800 rounded-full text-white text-xs sm:text-sm"
                                  >
                                    {tech}
                                  </motion.span>
                                ))}
                              </div>
                            </div>

                            {/* Achievements */}
                            <div className="mb-4 sm:mb-6">
                              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                                Key Achievements
                              </h4>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-2 text-gray-300 text-sm sm:text-base"
                                  >
                                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                                    {achievement}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Projects */}
                            {exp.projects && exp.projects.length > 0 && (
                              <div>
                                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                  <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                                  Key Projects
                                </h4>
                                <div className="space-y-3 sm:space-y-4">
                                  {exp.projects.map((project, i) => (
                                    <motion.div
                                      key={i}
                                      initial={{ x: -20, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ delay: i * 0.1 }}
                                      className="p-3 sm:p-4 bg-purple-500/10 rounded-lg border border-purple-500/20"
                                    >
                                      <h5 className="text-white font-semibold mb-2 text-sm sm:text-base">{project.name}</h5>
                                      <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">{project.description}</p>
                                      <div className="flex flex-wrap gap-1 sm:gap-2">
                                        {project.tech.map((tech, j) => (
                                          <span
                                            key={j}
                                            className="px-2 py-0.5 sm:px-2 sm:py-1 bg-purple-600/30 rounded text-purple-300 text-xs"
                                          >
                                            {tech}
                                          </span>
                                        ))}
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Expand/Collapse Button */}
                      <motion.button
                        className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-xs sm:text-sm font-medium">
                          {selectedExperience?.id === exp.id ? 'Show Less' : 'Show More'}
                        </span>
                        <motion.div
                          animate={{
                            rotate: selectedExperience?.id === exp.id ? 180 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
