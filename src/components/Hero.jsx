import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, ArrowRight, Code, Briefcase, Sparkles } from "lucide-react";
import Avatar from "../assets/avatar-vishakha-2.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Content */}
      <div className="container mx-auto py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 ">
          {/* Avatar Section */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-800 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={Avatar}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-800 to-violet-800 rounded-full flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4 px-3 py-1 sm:px-4 sm:py-2 bg-blue-800/20 rounded-full border border-blue-800/30"
              whileHover={{ scale: 1.05 }}
            >
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-blue-400 text-xs sm:text-sm font-medium">Available for Opportunities</span>
            </motion.div>

            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
            >
              Hello, I'm <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500 bg-clip-text text-transparent">Vishakha</span>
            </motion.h2>

            <motion.h3 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4 }}
            >
              Software Engineer - Frontend Developer
            </motion.h3>

            <motion.p 
              className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5 }}
            >
              Passionate about creating exceptional user experiences through clean, efficient code. 
              Specializing in React.js, TypeScript, and modern web technologies to build scalable, 
              performant applications that make a difference.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="/assets/files/CV_VishakhaMore.pdf"
                download="CV_VishakhaMore.pdf"
                className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-800 to-violet-800 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download CV
              </motion.a>
              
              <motion.a
                href="#contact"
                className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 border-2 border-violet-600 rounded-full text-violet-400 font-semibold hover:bg-violet-600/10 transition-all text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact Me
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.7 }}
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">3+</div>
                <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">4+</div>
                <div className="text-xs sm:text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">5+</div>
                <div className="text-xs sm:text-sm text-gray-400">Technologies</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:visible"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-4 h-8 sm:w-6 sm:h-10 border-2 border-violet-600 rounded-full flex justify-center">
          <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-violet-600 rounded-full mt-1 sm:mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
