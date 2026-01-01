import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Code, Database, Globe, Zap, Users, Target, Rocket, Star, Calendar, ArrowRight, Play } from "lucide-react";
import CabsImg from "../assets/cabs.jpg"
import DashboardImg from "../assets/dashboard.jpg"
import EcommerceImg from "../assets/ecommerce.jpg"
import FlightsBookImg from "../assets/flight-booking.jpg"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const projects = [
    {
      id: 1,
      title: "Corporate Cabs - Online Booking Platform",
      category: "Transportation Tech",
      description: "A comprehensive corporate transportation booking platform with real-time tracking, advanced booking workflows, and seamless user management.",
      image: CabsImg,
      technologies: ["React.js", "TypeScript", "Zustand", "Tailwind CSS", "Google Maps API"],
      features: [
        "Real-time trip tracking with Google Maps",
        "Advanced booking workflows",
        "User role management system",
        "Performance optimization (40% improvement)",
        "Responsive design for all devices"
      ],
      achievements: [
        "Fixed critical bugs improving stability",
        "Implemented live tracking system",
        "Enhanced user experience significantly"
      ],
      liveUrl: "#",
      color: "from-blue-800 to-violet-800",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Online Flights & Hotels Booking System",
      category: "Travel Tech",
      description: "Modern flight and hotel booking platform with intuitive UI, reusable components, and scalable architecture.",
      image: FlightsBookImg,
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
      features: [
        "Component-based architecture",
        "Reusable UI components library",
        "Scalable frontend structure",
        "Modern booking workflows",
        "Cross-platform compatibility"
      ],
      achievements: [
        "Led frontend architecture design",
        "Built comprehensive component library",
        "Established coding standards"
      ],
      liveUrl: "#",
      color: "from-violet-800 to-blue-900",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Enterprise Dashboard Platform",
      category: "Business Intelligence",
      description: "Role-based dashboard platform with real-time data visualization, API-driven insights, and optimized performance.",
      image: DashboardImg,
      technologies: ["React.js", "TypeScript", "Redux", "Tailwind CSS", "Chart.js"],
      features: [
        "Role-based access control",
        "Real-time data visualization",
        "API-driven data integration",
        "Performance optimization",
        "Interactive charts and graphs"
      ],
      achievements: [
        "Built scalable dashboard architecture",
        "Optimized performance by 35%",
        "Implemented advanced data visualization"
      ],
      liveUrl: "#",
      color: "from-blue-900 to-violet-900",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 4,
      title: "E-commerce Store",
      category: "E-commerce",
      description: "Modern e-commerce platform with secure checkout flows, efficient state management, and responsive design.",
      image: EcommerceImg,
      technologies: ["React.js", "Tailwind CSS", "Stripe API", "Node.js"],
      features: [
        "Secure payment integration",
        "Efficient state management",
        "Responsive product catalog",
        "Shopping cart functionality",
        "Order tracking system"
      ],
      achievements: [
        "Implemented secure checkout flows",
        "Optimized client-side state management",
        "Enhanced user shopping experience"
      ],
      liveUrl: "#",
      color: "from-violet-900 to-blue-950",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);

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
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
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
  }

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
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            animate="animate"
            className="inline-flex items-center gap-2 mb-4"
            variants={floatingAnimation}
          >
            <Code className="w-6 h-6 sm:w-8 sm:h-8 text-violet-400" />
            <span className="text-violet-400 text-base sm:text-lg font-semibold">PROJECT PORTFOLIO</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            id="projects"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            A collection of my recent work showcasing modern web development,
            innovative solutions, and attention to detail
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
            >
              <motion.div
                className={`relative bg-gradient-to-br ${project.color} p-0.5 sm:p-0.5 rounded-xl shadow-2xl cursor-pointer transform transition-all duration-300`}
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="bg-slate-900 rounded-xl overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

                    {/* Project Overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="flex gap-3 sm:gap-4">
                        <motion.button
                          className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.button>
                        <motion.a
                          href={project.liveUrl}
                          className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.a>
                      </div>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-violet-800/20 backdrop-blur-sm rounded-full text-violet-800 text-xs sm:text-sm font-medium border border-violet-800/30">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{project.description}</p>
                      </div>
                      <motion.div
                        className={`p-2 sm:p-3 bg-gradient-to-r ${project.color} rounded-xl text-white sm:ml-4`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {project.icon}
                      </motion.div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1, type: "spring" }}
                          className="px-2 py-0.5 sm:px-3 sm:py-1 bg-violet-800/30 rounded-full text-violet-300 text-xs sm:text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Expandable Details */}
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0 }}
                      animate={{
                        height: selectedProject?.id === project.id ? "auto" : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="pt-4 border-t border-gray-700">
                        {/* Features */}
                        <div className="mb-4">
                          <h4 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center gap-2">
                            <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, i) => (
                              <motion.li
                                key={i}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-2 text-gray-300 text-sm sm:text-base"
                              >
                                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center gap-2">
                            <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                            Achievements
                          </h4>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-2 text-gray-300 text-sm sm:text-base"
                              >
                                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>

                    {/* View Details Button */}
                    <motion.button
                      className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xs sm:text-sm font-medium">
                        {selectedProject?.id === project.id ? 'Show Less' : 'View Details'}
                      </span>
                      <motion.div
                        animate={{
                          rotate: selectedProject?.id === project.id ? 180 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </motion.div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-800 to-violet-800 rounded-full text-white font-semibold text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            <a href="#contact">
              <span className="text-sm sm:text-base">Let's build something amazing together</span>
            </a>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
